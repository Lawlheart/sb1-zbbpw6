import React from 'react';
import Link from 'next/link';
import { List, FileText, Globe, Database } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4 text-honey-600 font-honey welcome-message">Welcome to A11y Hive</h1>
      <p className="text-xl mb-8 text-beehive-800">Your central hub for accessibility audits and journey tracking</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/journeys" className="bg-honey-200 p-6 rounded-lg shadow-md hover:bg-honey-300 transition-colors">
          <List className="h-12 w-12 mx-auto mb-4 text-honey-700" />
          <h2 className="text-xl font-semibold text-beehive-800">Journeys</h2>
        </Link>
        <Link href="/audits" className="bg-honey-200 p-6 rounded-lg shadow-md hover:bg-honey-300 transition-colors">
          <FileText className="h-12 w-12 mx-auto mb-4 text-honey-700" />
          <h2 className="text-xl font-semibold text-beehive-800">Audits</h2>
        </Link>
        <Link href="/sites" className="bg-honey-200 p-6 rounded-lg shadow-md hover:bg-honey-300 transition-colors">
          <Globe className="h-12 w-12 mx-auto mb-4 text-honey-700" />
          <h2 className="text-xl font-semibold text-beehive-800">Sites</h2>
        </Link>
        <Link href="/data" className="bg-honey-200 p-6 rounded-lg shadow-md hover:bg-honey-300 transition-colors">
          <Database className="h-12 w-12 mx-auto mb-4 text-honey-700" />
          <h2 className="text-xl font-semibold text-beehive-800">Data</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;