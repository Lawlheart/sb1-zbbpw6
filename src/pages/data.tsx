import React from 'react';
import { useJourneys } from '../hooks/useJourneys';
import { useSites } from '../hooks/useSites';
import DataOverview from '../components/DataOverview';
import ImportData from '../components/ImportData';
import ExportData from '../components/ExportData';
import { Journey, Site } from '../types';

const DataPage: React.FC = () => {
  const {
    journeys,
    selectedJourneys,
    addJourneys,
    deleteJourney,
    toggleJourneySelection,
    selectAllJourneys,
    deselectAllJourneys,
    seedJourneys,
  } = useJourneys();

  const {
    sites,
    selectedSites,
    addSites,
    deleteSite,
    toggleSiteSelection,
    selectAllSites,
    deselectAllSites,
    seedSites,
  } = useSites();

  const handleImport = (
    importedSites: { [key: string]: Site },
    importedJourneys: Journey[]
  ) => {
    addSites(importedSites);
    addJourneys(importedJourneys);
  };

  const handleSelectAll = (type: 'journeys' | 'sites') => {
    if (type === 'journeys') {
      selectAllJourneys();
    } else {
      selectAllSites();
    }
  };

  const handleDeselectAll = (type: 'journeys' | 'sites') => {
    if (type === 'journeys') {
      deselectAllJourneys();
    } else {
      deselectAllSites();
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Data Management</h2>
        <div className="space-x-4">
          <button
            onClick={() => seedJourneys(Object.keys(sites))}
            className="px-4 py-2 bg-honey-600 text-white rounded hover:bg-honey-700 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Seed Journeys
          </button>
          <button
            onClick={seedSites}
            className="px-4 py-2 bg-honey-600 text-white rounded hover:bg-honey-700 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Seed Sites
          </button>
        </div>
      </div>

      <DataOverview
        journeys={journeys}
        sites={sites}
        selectedJourneys={selectedJourneys}
        selectedSites={selectedSites}
        onSelectJourney={toggleJourneySelection}
        onSelectSite={toggleSiteSelection}
        onSelectAll={handleSelectAll}
        onDeselectAll={handleDeselectAll}
        onDeleteJourney={deleteJourney}
        onDeleteSite={deleteSite}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImportData
          onImport={handleImport}
          existingSites={sites}
          existingJourneys={journeys}
        />
        <ExportData
          sites={sites}
          journeys={journeys}
          selectedSites={selectedSites}
          selectedJourneys={selectedJourneys}
        />
      </div>
    </div>
  );
};

export default DataPage;