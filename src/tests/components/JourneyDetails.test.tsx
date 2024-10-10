import React from 'react'
import { render, screen } from '@testing-library/react'
import JourneyDetails from '../../components/JourneyDetails'
import { mockJourneys, mockSites } from '../../mocks/mockData'

describe('JourneyDetails', () => {
  it('renders journey details correctly', () => {
    const journey = mockJourneys[0]
    const site = mockSites[journey.siteId]
    render(<JourneyDetails journey={journey} site={site} />)

    expect(screen.getByText('Journey Details')).toBeInTheDocument()
    expect(screen.getByText('Example Site 1')).toBeInTheDocument()
    expect(screen.getByText('Find')).toBeInTheDocument()
    expect(screen.getByText('Survey')).toBeInTheDocument()
    expect(screen.getByText(/Discovered:/)).toBeInTheDocument()
  })
})