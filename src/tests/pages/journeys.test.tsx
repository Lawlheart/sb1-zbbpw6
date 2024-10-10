import React from 'react'
import { render, screen } from '@testing-library/react'
import JourneysPage from '../../pages/journeys'
import { mockJourneys, mockSites } from '../../mocks/mockData'

jest.mock('../../utils/storage', () => ({
  getJourneys: jest.fn(() => mockJourneys),
  getSites: jest.fn(() => mockSites),
}))

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => {
    return children
  }
})

describe('JourneysPage', () => {
  it('renders the Journeys title and New Journey button', () => {
    render(<JourneysPage />)

    expect(screen.getByText('Journeys')).toBeInTheDocument()
    expect(screen.getByText('New Journey')).toBeInTheDocument()
  })

  it('renders the JourneyList component', () => {
    render(<JourneysPage />)

    expect(screen.getByText('1')).toBeInTheDocument() // siteId from mockJourneys
    expect(screen.getByText('Find')).toBeInTheDocument() // status from mockJourneys
  })
})