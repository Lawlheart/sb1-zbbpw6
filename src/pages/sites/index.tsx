import React from 'react'
import Link from 'next/link'
import { Globe, ArrowRight } from 'lucide-react'
import { Site, SiteSize } from '../../types'
import { getSites } from '../../utils/storage'

const SitesList: React.FC = () => {
  const sites = Object.values(getSites())

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Sites</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-amber-200">
          {sites.map((site) => (
            <li key={site.id}>
              <Link href={`/sites/${site.id}`} className="block hover:bg-amber-50">
                <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <Globe className="flex-shrink-0 h-5 w-5 text-amber-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-amber-900 truncate">{site.name}</p>
                      <p className="text-sm text-amber-500">{site.companyName}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                      {SiteSize[site.size]}
                    </p>
                    <ArrowRight className="ml-2 h-5 w-5 text-amber-400" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SitesList