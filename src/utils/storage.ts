import { Journey, Site } from '@/types'
import { mockJourneys, mockSites } from '@/mocks/mockData'

const JOURNEYS_KEY = 'journeys'
const SITES_KEY = 'sites'

export const getJourneys = (): Journey[] => {
  if (typeof window === 'undefined') return mockJourneys

  const storedJourneys = localStorage.getItem(JOURNEYS_KEY)
  if (storedJourneys) {
    return JSON.parse(storedJourneys)
  }
  localStorage.setItem(JOURNEYS_KEY, JSON.stringify(mockJourneys))
  return mockJourneys
}

export const getSites = (): { [key: string]: Site } => {
  if (typeof window === 'undefined') return mockSites

  const storedSites = localStorage.getItem(SITES_KEY)
  if (storedSites) {
    return JSON.parse(storedSites)
  }
  localStorage.setItem(SITES_KEY, JSON.stringify(mockSites))
  return mockSites
}

export const saveJourneys = (journeys: Journey[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(JOURNEYS_KEY, JSON.stringify(journeys))
  }
}

export const saveSites = (sites: { [key: string]: Site }): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(SITES_KEY, JSON.stringify(sites))
  }
}