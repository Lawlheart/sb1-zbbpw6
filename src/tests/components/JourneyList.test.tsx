import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import JourneyList from '../../components/JourneyList'
import { mockJourneys } from '../../mocks/mockData'

describe('JourneyList', () => {
  const mockOnSelectJourney = jest.fn()
  const mockOnDeleteJourney = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders journey list items', () => {
    render(<JourneyList journeys={mockJourneys} onSelectJourney={mockOnSelectJourney} onDeleteJourney={mockOnDeleteJourney} />)

    expect(screen.getByText('1')).toBeInTheDocument() // siteId
    expect(screen.getByText('2')).toBeInTheDocument() // siteId
    expect(screen.getByText('Find')).toBeInTheDocument()
    expect(screen.getByText('Survey')).toBeInTheDocument()
  })

  it('calls onSelectJourney when a journey is clicked', () => {
    render(<JourneyList journeys={mockJourneys} onSelectJourney={mockOnSelectJourney} onDeleteJourney={mockOnDeleteJourney} />)

    fireEvent.click(screen.getByText('1'))
    expect(mockOnSelectJourney).toHaveBeenCalledWith(mockJourneys[0])
  })

  it('calls onDeleteJourney when delete button is clicked and confirmed', () => {
    window.confirm = jest.fn(() => true)
    render(<JourneyList journeys={mockJourneys} onSelectJourney={mockOnSelectJourney} onDeleteJourney={mockOnDeleteJourney} />)

    const deleteButtons = screen.getAllByLabelText('Delete journey')
    fireEvent.click(deleteButtons[0])

    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to delete this journey?')
    expect(mockOnDeleteJourney).toHaveBeenCalledWith(mockJourneys[0].id)
  })

  it('does not call onDeleteJourney when delete is canceled', () => {
    window.confirm = jest.fn(() => false)
    render(<JourneyList journeys={mockJourneys} onSelectJourney={mockOnSelectJourney} onDeleteJourney={mockOnDeleteJourney} />)

    const deleteButtons = screen.getAllByLabelText('Delete journey')
    fireEvent.click(deleteButtons[0])

    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to delete this journey?')
    expect(mockOnDeleteJourney).not.toHaveBeenCalled()
  })
})