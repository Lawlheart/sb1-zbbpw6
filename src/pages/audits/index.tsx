import React from 'react'
import Link from 'next/link'
import { FileText, ArrowRight, PlusCircle } from 'lucide-react'

interface Audit {
  id: string
  siteId: string
  siteName: string
  date: string
  status: 'Completed' | 'In Progress' | 'Scheduled'
}

const mockAudits: Audit[] = [
  { id: '1', siteId: '1', siteName: 'Example Site 1', date: '2023-05-01', status: 'Completed' },
  { id: '2', siteId: '2', siteName: 'Example Site 2', date: '2023-05-15', status: 'In Progress' },
  { id: '3', siteId: '3', siteName: 'Example Site 3', date: '2023-06-01', status: 'Scheduled' },
]

const AuditList: React.FC = () => {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Audits</h2>
        <Link
          href="/audits/new"
          className="flex items-center px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          New Audit
        </Link>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-amber-200">
          {mockAudits.map((audit) => (
            <li key={audit.id}>
              <Link href={`/audits/${audit.id}`} className="block hover:bg-amber-50">
                <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="flex-shrink-0 h-5 w-5 text-amber-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-amber-900 truncate">{audit.siteName}</p>
                      <p className="text-sm text-amber-500">ID: {audit.siteId}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {audit.status}
                    </p>
                    <p className="ml-2 text-sm text-amber-500">{audit.date}</p>
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

export default AuditList