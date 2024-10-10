import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import AuditList from './pages/AuditList';
import AuditPage from './pages/AuditPage';
import CreateAudit from './pages/CreateAudit';
import SitesList from './pages/SitesList';
import DataPage from './pages/DataPage';
import JourneysPage from './pages/JourneysPage';
import { Hexagon } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50 text-amber-900">
        <Toaster position="top-right" />
        <header className="bg-amber-700 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link to="/" className="flex items-center text-amber-100 hover:text-white">
              <Hexagon className="h-8 w-8 mr-2" />
              <h1 className="text-3xl font-bold">A11y Hive</h1>
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="text-amber-200 hover:text-white">Home</Link>
                </li>
                <li>
                  <Link to="/journeys" className="text-amber-200 hover:text-white">Journeys</Link>
                </li>
                <li>
                  <Link to="/audits" className="text-amber-200 hover:text-white">Audits</Link>
                </li>
                <li>
                  <Link to="/sites" className="text-amber-200 hover:text-white">Sites</Link>
                </li>
                <li>
                  <Link to="/data" className="text-amber-200 hover:text-white">Data</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/journeys" element={<JourneysPage />} />
            <Route path="/audits" element={<AuditList />} />
            <Route path="/audit/new" element={<CreateAudit />} />
            <Route path="/audit/:id" element={<AuditPage />} />
            <Route path="/sites" element={<SitesList />} />
            <Route path="/data" element={<DataPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;