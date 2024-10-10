import React, { useRef } from 'react';
import { Journey, Site } from '../types';
import toast from 'react-hot-toast';

interface ImportDataProps {
  onImport: (sites: { [key: string]: Site }, journeys: Journey[]) => void;
  existingSites: { [key: string]: Site };
  existingJourneys: Journey[];
}

const ImportData: React.FC<ImportDataProps> = ({ onImport, existingSites, existingJourneys }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target?.result as string);
          onImport(importedData.sites, importedData.journeys);
          toast.success('Data imported successfully');
        } catch (error) {
          toast.error('Error importing data. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImport}
        accept=".json"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full px-4 py-2 bg-honey-600 text-white rounded hover:bg-honey-700 transition-colors flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        Import Data
      </button>
    </div>
  );
};

export default ImportData;