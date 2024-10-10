import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';

import { Journey, Site } from '../types';
import JourneyList from '../components/JourneyList';
import JourneyDetails from '../components/JourneyDetails';
import SiteDetails from '../components/SiteDetails';
import { getJourneys, getSites, saveJourneys } from '../utils/storage';
import { generateUniqueId } from '../utils/idGenerator';

const JourneysPage: React.FC = () => {
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [sites, setSites] = useState<{ [key: string]: Site }>({});
  const [selectedJourney, setSelectedJourney] = useState<Journey | null>(null);
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);

  useEffect(() => {
    setJourneys(getJourneys());
    setSites(getSites());
  }, []);

  const handleSelectJourney = (journey: Journey) => {
    setSelectedJourney(journey);
    setSelectedSite(sites[journey.siteId]);
  };

  const handleDeleteJourney = (journeyId: string) => {
    const updatedJourneys = journeys.filter(journey => journey.id !== journeyId);
    setJourneys(updatedJourneys);
    saveJourneys(updatedJourneys);
    if (selectedJourney && selectedJourney.id === journeyId) {
      setSelectedJourney(null);
      setSelectedSite(null);
    }
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-beehive-900">Journeys</h2>
        <Link
          href="/journey/new"
          className="flex items-center px-4 py-2 bg-honey-600 text-beehive-100 rounded hover:bg-honey-700 transition-colors"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          New Journey
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <JourneyList
            journeys={journeys}
            onSelectJourney={handleSelectJourney}
            onDeleteJourney={handleDeleteJourney}
          />
        </div>
        <div>
          {selectedJourney && selectedSite && (
            <>
              <JourneyDetails
                journey={selectedJourney}
                site={selectedSite}
              />
              <SiteDetails site={selectedSite} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JourneysPage;