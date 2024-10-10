import React, { useState } from 'react';
import { Site, SiteSize } from '../types';
import { generateUniqueId } from '../utils/idGenerator';

interface SiteFormProps {
  site?: Site;
  onSubmit: (site: Site) => void;
  onCancel: () => void;
}

const SiteForm: React.FC<SiteFormProps> = ({ site, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Site>(
    site || {
      id: generateUniqueId('site'),
      link: '',
      name: '',
      details: '',
      fullMetaData: '',
      size: SiteSize.Small,
      builtWith: [],
      companyName: '',
      companyDescription: '',
      contactName: '',
      contactRole: '',
      contactMethod: '',
      meetingNotes: '',
      email: '',
      phoneNumber: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{site ? 'Edit Site' : 'Create New Site'}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-honey-500 focus:ring-honey-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Link</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-honey-500 focus:ring-honey-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Size</label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-honey-500 focus:ring-honey-500"
          >
            {Object.values(SiteSize).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-honey-500 focus:ring-honey-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Details</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-honey-500 focus:ring-honey-500"
          ></textarea>
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
          {site ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
};

export default SiteForm;