import React from 'react';
import { Journey, Site } from '../types';
import toast from 'react-hot-toast';

interface ExportDataProps {
  sites: { [key: string]: Site };
  journeys: Journey[];
  selectedSites: string[];
  selectedJourneys: string[];
}

const ExportData: React.FC<ExportDataProps> = ({
  sites,
  journeys,
  selectedSites,
  selectedJourneys,
}) => {
  const handleExport = () => {
    const exportData = {
      sites: Object.fromEntries(
        Object.entries(sites).filter(([id]) => selectedSites.includes(id))
      ),
      journeys: journeys.filter((journey) => selectedJourneys.includes(journey.id)),
    };
    const dataStr = JSON.stringify(exportData);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'a11y_hive_export.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    toast.success('Data exported successfully');
  };

  return (
    <div>
      <button
        onClick={handleExport}
        className="w-full px-4 py-2 bg-honey-600 text-white rounded hover:bg-honey-700 transition-colors flex items-center justify-center"
        disabled={selectedSites.length === 0 && selectedJourneys.length === 0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Export Selected Data
      </button>
    </div>
  );
};

export default ExportData;