import React from 'react';
import { Journey, Site } from '../types';

interface DataOverviewProps {
  journeys: Journey[];
  sites: { [key: string]: Site };
  selectedJourneys: string[];
  selectedSites: string[];
  onSelectJourney: (journeyId: string) => void;
  onSelectSite: (siteId: string) => void;
  onSelectAll: (type: 'journeys' | 'sites') => void;
  onDeselectAll: (type: 'journeys' | 'sites') => void;
  onDeleteJourney: (journeyId: string) => void;
  onDeleteSite: (siteId: string) => void;
  onEditSite: (site: Site) => void;
  onEditJourney: (journey: Journey) => void;
}

const DataOverview: React.FC<DataOverviewProps> = ({
  journeys,
  sites,
  selectedJourneys,
  selectedSites,
  onSelectJourney,
  onSelectSite,
  onSelectAll,
  onDeselectAll,
  onDeleteJourney,
  onDeleteSite,
  onEditSite,
  onEditJourney,
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Journeys</h3>
        <div className="mb-2">
          <button
            onClick={() => onSelectAll('journeys')}
            className="mr-2 px-2 py-1 bg-honey-100 text-honey-800 rounded"
          >
            Select All
          </button>
          <button
            onClick={() => onDeselectAll('journeys')}
            className="px-2 py-1 bg-honey-100 text-honey-800 rounded"
          >
            Deselect All
          </button>
        </div>
        <table className="min-w-full divide-y divide-honey-200">
          <thead className="bg-honey-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-honey-500 uppercase tracking-wider">
                Select
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-honey-500 uppercase tracking-wider">
                Site
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-honey-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-honey-500 uppercase tracking-wider">
                Next Step
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-honey-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-honey-200">
            {journeys.map((journey) => (
              <tr key={journey.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedJourneys.includes(journey.id)}
                    onChange={() => onSelectJourney(journey.id)}
                    className="focus:ring-honey-500 h-4 w-4 text-honey-600 border-honey-300 rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{sites[journey.siteId]?.name || 'Unknown'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{journey.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{journey.nextStep}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => onEditJourney(journey)}
                    className="text-honey-600 hover:text-honey-900 mr-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => onDeleteJourney(journey.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      <line x1="10" y1="11" x2="10" y2="17"/>
                      <line x1="14" y1="11" x2="14" y2="17"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Sites</h3>
        <div className="mb-2">
          <button
            onClick={() => onSelectAll('sites')}
            className="mr-2 px-2 py-1 bg-honey-100 text-honey-800 rounded"
          >
            Select All
          </button>
          <button
            onClick={() => onDeselectAll('sites')}
            className="px-2 py-1 bg-honey-100 text-honey-800 rounded"
          >
            Deselect All
          </button>
        </div>
        <table className="min-w-full divide-y divide-honey-200">
          <thead className="bg-honey-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-honey-500 uppercase tracking-wider">
                Select
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-honey-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-honey-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-honey-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-honey-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-honey-200">
            {Object.values(sites).map((site) => (
              <tr key={site.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedSites.includes(site.id)}
                    onChange={() => onSelectSite(site.id)}
                    className="focus:ring-honey-500 h-4 w-4 text-honey-600 border-honey-300 rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{site.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{site.companyName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{site.size}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => onEditSite(site)}
                    className="text-honey-600 hover:text-honey-900 mr-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => onDeleteSite(site.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      <line x1="10" y1="11" x2="10" y2="17"/>
                      <line x1="14" y1="11" x2="14" y2="17"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataOverview;