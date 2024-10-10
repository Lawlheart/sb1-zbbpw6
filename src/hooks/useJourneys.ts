import { useState, useEffect } from 'react'
import { Journey } from '../types'
import { getJourneys, saveJourneys } from '../utils/storage'
import { generateUniqueId } from '../utils/idGenerator'
import toast from 'react-hot-toast'

export const useJourneys = () => {
  const [journeys, setJourneys] = useState<Journey[]>([])
  const [selectedJourneys, setSelectedJourneys] = useState<string[]>([])

  useEffect(() => {
    setJourneys(getJourneys())
  }, [])

  const addJourneys = (newJourneys: Journey[]) => {
    const updatedJourneys = [...journeys, ...newJourneys]
    setJourneys(updatedJourneys)
    saveJourneys(updatedJourneys)
  }

  const deleteJourney = (journeyId: string) => {
    const updatedJourneys = journeys.filter(journey => journey.id !== journeyId)
    setJourneys(updatedJourneys)
    saveJourneys(updatedJourneys)
    setSelectedJourneys(prev => prev.filter(id => id !== journeyId))
    toast.success('Journey deleted successfully')
  }

  const toggleJourneySelection = (journeyId: string) => {
    setSelectedJourneys(prev =>
      prev.includes(journeyId) ? prev.filter(id => id !== journeyId) : [...prev, journeyId]
    )
  }

  const selectAllJourneys = () => {
    setSelectedJourneys(journeys.map(journey => journey.id))
  }

  const deselectAllJourneys = () => {
    setSelectedJourneys([])
  }

  const seedJourneys = (siteIds: string[]) => {
    const newJourneys: Journey[] = [
      {
        id: generateUniqueId('journey'),
        status: 'Find',
        nextStep: 'Survey',
        siteId: siteIds[0] || generateUniqueId('site'),
        discoveredDate: new Date().toISOString(),
      },
      {
        id: generateUniqueId('journey'),
        status: 'Survey',
        nextStep: 'Pitch',
        siteId: siteIds[1] || generateUniqueId('site'),
        discoveredDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        outreachDate: new Date().toISOString(),
      },
      {
        id: generateUniqueId('journey'),
        status: 'Pitch',
        nextStep: 'Audit',
        siteId: siteIds[2] || generateUniqueId('site'),
        discoveredDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        outreachDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        followupDate: new Date().toISOString(),
      },
    ]

    addJourneys(newJourneys)
    toast.success('Sample journeys added successfully')
  }

  return {
    journeys,
    selectedJourneys,
    addJourneys,
    deleteJourney,
    toggleJourneySelection,
    selectAllJourneys,
    deselectAllJourneys,
    seedJourneys,
  }
}