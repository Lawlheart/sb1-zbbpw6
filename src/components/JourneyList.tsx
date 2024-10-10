import React from 'react';
import { Journey, JourneyStatus } from '../types';
import { ChevronRight, Trash2 } from 'lucide-react';

interface JourneyListProps {
  journeys: Journey[];
  onSelectJourney: (journey: Journey) => void;
  onDeleteJourney: (journeyId: string) => void;
}

const JourneyList: React.FC<JourneyListProps> = ({ journeys, onSelectJourney, onDeleteJourney }) => {
  const getStatusColor = (status: JourneyStatus) => {
    switch (status) {
      case JourneyStatus.Find:
        return 'bg-blue-200 text-blue-800';
      case JourneyStatus.Survey:
        return 'bg-green-200 text-green-800';
      case JourneyStatus.Pitch:
        return 'bg-yellow-200 text-yellow-800';
      case JourneyStatus.Audit:
        return 'bg-purple-200 text-purple-800';
      case JourneyStatus.Deck:
        return 'bg-pink-200 text-pink-800';
      case JourneyStatus.Presentation:
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const handleDelete = (journeyId: string) => {
    if (window.confirm('Are you sure you want to delete this journey?')) {
      onDeleteJourney(journeyId);
    }
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-beehive-200">
        {journeys.map((journey) => (
          <li key={`journey-list-${journey.id}`}>
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 hover:bg-beehive-100 transition-colors">
              <button
                onClick={() => onSelectJourney(journey)}
                className="flex-grow text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-beehive-900 truncate">
                      Site ID: {journey.siteId}
                    </p>
                    <p className={`ml-2 flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(journey.status)}`}>
                      {journey.status}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-beehive-700">
                      Next: {journey.nextStep}
                    </p>
                    <ChevronRight className="ml-2 h-5 w-5 text-beehive-400" />
                  </div>
                </div>
              </button>
              <button
                onClick={() => handleDelete(journey.id)}
                className="ml-4 p-2 text-beehive-600 hover:text-beehive-900 focus:outline-none"
                aria-label="Delete journey"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JourneyList;