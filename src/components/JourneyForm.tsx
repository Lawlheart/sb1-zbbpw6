import React, { useState } from 'react';
import { Journey, JourneyStatus, Site } from '../types';
import { generateUniqueId } from '../utils/idGenerator';

interface JourneyFormProps {
  journey?: Journey;
  sites: { [key: string]: Site };
  onSubmit: (journey: Journey) => void;
  onCancel: () => void;
}

const JourneyForm: React.FC<JourneyFormProps> = ({ journey, sites, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Journey>(
    journey || {
      id: generateUniqueId('journey'),
      status: JourneyStatus.Find,
      nextStep: JourneyStatus.Survey,
      siteId: '',
      discoveredDate: new Date().toISOString().split('T')[0],
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{journey ? 'Edit Journey' : 'Create New Journey'}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Site</label>
          <select
            name="siteId"
            value={formData.siteId}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-honey-500 focus:ring-honey-500"
          >
            <option value="">Select a site</option>
            {Object.values(sites).map((site) => (
              <option key={site.id} value={site.id}>
                {site.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-honey-500 focus:ring-honey-500"
          >
            {Object.values(JourneyStatus).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Next Step</label>
          <select
            name="nextStep"
            value={formData.nextStep}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-honey-500 focus:ring-honey-500"
          >
            {Object.values(JourneyStatus).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Discovered Date</label>
          <input
            type="date"
            name="discoveredDate"
            value={formData.discoveredDate}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-honey-500 focus:ring-honey-500"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-honey-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-honey-600 hover:bg-honey-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-honey-500"
        >
          {journey ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
};

export default JourneyForm;