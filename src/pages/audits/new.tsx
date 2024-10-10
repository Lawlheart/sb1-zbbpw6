import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { mockSites } from '@/mocks/mockData'

const CreateAudit: React.FC = () => {
  const [selectedSiteId, setSelectedSiteId] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedSiteId) {
      const newAuditId = Math.floor(Math.random() * 1000)
      router.push(`/audits/${newAuditId}?siteId=${selectedSiteId}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-100">
            Journey - Audit Flow
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/audits" className="text-gray-300 hover:text-white">
                  Audits
                </Link>
              </li>
              <li>
                <Link href="/sites" className="text-gray-300 hover:text-white">
                  Sites
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Create New Audit</h1>
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow">
            <div>
              <label htmlFor="siteSelect" className="block text-sm font-medium text-gray-300">
                Select Site
              </label>
              <select
                id="siteSelect"
                value={selectedSiteId}
                onChange={(e) => setSelectedSiteId(e.target.value)}
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
              >
                <option value="">Select a site</option>
                {Object.values(mockSites).map((site) => (
                  <option key={site.id} value={site.id}>
                    {site.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Audit
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default CreateAudit