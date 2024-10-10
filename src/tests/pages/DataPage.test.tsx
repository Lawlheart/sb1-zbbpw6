import React from 'react'
import { render, screen } from '@testing-library/react'
import DataPage from '../../pages/data'
import { useJourneys } from '../../hooks/useJourneys'
import { useSites } from '../../hooks/useSites'

// Mock the hooks
jest.mock('../../hooks/useJourneys')
jest.mock('../../hooks/useSites')

// Mock the components
jest.mock('../../components/DataOverview', () => {
  return function MockDataOverview() {
    return <div data-testid="data-overview">Mocked DataOverview</div>
  }
})

jest.mock('../../components/ImportData', () => {
  return function MockImportData() {
    return <div data-testid="import-data">Mocked ImportData</div>
  }
})

jest.mock('../../components/ExportData', () => {
  return function MockExportData() {
    return <div data-testid="export-data">Mocked ExportData</div>
  }
})

// Mock Lucide React icons
jest.mock('lucide-react', () => ({
  Seedling: () => <div data-testid="seedling-icon" />,
}))

describe('DataPage', () => {
  beforeEach(() => {
    (useJourneys as jest.Mock).mockReturnValue({
      journeys: [],
      selectedJourneys: [],
      addJourneys: jest.fn(),
      deleteJourney: jest.fn(),
      toggleJourneySelection: jest.fn(),
      selectAllJourneys: jest.fn(),
      deselectAllJourneys: jest.fn(),
      seedJourneys: jest.fn(),
    })
    
    (useSites as jest.Mock).mockReturnValue({
      sites: {},
      selectedSites: [],
      addSites: jest.fn(),
      deleteSite: jest.fn(),
      toggleSiteSelection: jest.fn(),
      selectAllSites: jest.fn(),
      deselectAllSites: jest.fn(),
      seedSites: jest.fn(),
    })
  })

  it('renders without crashing', () => {
    render(<DataPage />)
    expect(screen.getByText('Data Management')).toBeInTheDocument()
  })

  it('renders Seed Journeys and Seed Sites buttons with icons', () => {
    render(<DataPage />)
    expect(screen.getByText('Seed Journeys')).toBeInTheDocument()
    expect(screen.getByText('Seed Sites')).toBeInTheDocument()
    expect(screen.getAllByTestId('seedling-icon')).toHaveLength(2)
  })

  it('renders DataOverview component', () => {
    render(<DataPage />)
    expect(screen.getByTestId('data-overview')).toBeInTheDocument()
  })

  it('renders ImportData and ExportData components', () => {
    render(<DataPage />)
    expect(screen.getByTestId('import-data')).toBeInTheDocument()
    expect(screen.getByTestId('export-data')).toBeInTheDocument()
  })
})