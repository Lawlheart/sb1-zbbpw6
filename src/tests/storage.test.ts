import { getJourneys, getSites, saveJourneys, saveSites } from '../utils/storage'
import { mockJourneys, mockSites } from '../mocks/mockData'

describe('storage utils', () => {
  beforeEach(() => {
    localStorage.clear()
    // Mock localStorage.getItem to return null initially
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('gets and saves journeys correctly', () => {
    expect(getJourneys()).toEqual(mockJourneys)
    const newJourneys = [...mockJourneys, {...mockJourneys[0], id: '4'}]
    saveJourneys(newJourneys)
    // Mock localStorage.getItem to return the saved journeys
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(newJourneys))
    expect(getJourneys()).toEqual(newJourneys)
  })

  it('gets and saves sites correctly', () => {
    expect(getSites()).toEqual(mockSites)
    const newSites = {...mockSites, '4': {...mockSites['1'], id: '4'}}
    saveSites(newSites)
    // Mock localStorage.getItem to return the saved sites
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(newSites))
    expect(getSites()).toEqual(newSites)
  })
})