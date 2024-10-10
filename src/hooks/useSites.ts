import { useState, useEffect } from 'react'
import { Site } from '../types'
import { getSites, saveSites } from '../utils/storage'
import { generateUniqueId } from '../utils/idGenerator'
import toast from 'react-hot-toast'

export const useSites = () => {
  const [sites, setSites] = useState<{ [key: string]: Site }>({})
  const [selectedSites, setSelectedSites] = useState<string[]>([])

  useEffect(() => {
    setSites(getSites())
  }, [])

  const addSites = (newSites: { [key: string]: Site }) => {
    const updatedSites = { ...sites, ...newSites }
    setSites(updatedSites)
    saveSites(updatedSites)
  }

  const deleteSite = (siteId: string) => {
    const { [siteId]: deletedSite, ...updatedSites } = sites
    setSites(updatedSites)
    saveSites(updatedSites)
    setSelectedSites(prev => prev.filter(id => id !== siteId))
    toast.success('Site deleted successfully')
  }

  const toggleSiteSelection = (siteId: string) => {
    setSelectedSites(prev =>
      prev.includes(siteId) ? prev.filter(id => id !== siteId) : [...prev, siteId]
    )
  }

  const selectAllSites = () => {
    setSelectedSites(Object.keys(sites))
  }

  const deselectAllSites = () => {
    setSelectedSites([])
  }

  const seedSites = () => {
    const newSites: { [key: string]: Site } = {
      [generateUniqueId('site')]: {
        id: generateUniqueId('site'),
        link: 'https://example1.com',
        name: 'Example Site 1',
        details: 'An e-commerce website selling handmade crafts',
        fullMetaData: 'Full metadata for Example Site 1',
        size: 'Small',
        builtWith: ['React', 'Node.js', 'MongoDB'],
        companyName: 'Crafty Creations',
        companyDescription: 'A small business specializing in unique handmade items',
        contactName: 'Jane Doe',
        contactRole: 'Owner',
        contactMethod: 'Email',
        meetingNotes: '',
        email: 'jane@example1.com',
        phoneNumber: '+1 (555) 123-4567',
      },
      [generateUniqueId('site')]: {
        id: generateUniqueId('site'),
        link: 'https://example2.com',
        name: 'Example Site 2',
        details: 'A blog about sustainable living',
        fullMetaData: 'Full metadata for Example Site 2',
        size: 'Medium',
        builtWith: ['WordPress', 'PHP', 'MySQL'],
        companyName: 'Green Living Blog',
        companyDescription: 'A popular blog promoting eco-friendly lifestyle choices',
        contactName: 'John Smith',
        contactRole: 'Editor',
        contactMethod: 'Phone',
        meetingNotes: '',
        email: 'john@example2.com',
        phoneNumber: '+1 (555) 987-6543',
      },
    }

    addSites(newSites)
    toast.success('Sample sites added successfully')
  }

  return {
    sites,
    selectedSites,
    addSites,
    deleteSite,
    toggleSiteSelection,
    selectAllSites,
    deselectAllSites,
    seedSites,
  }
}