import { renderHook, act } from '@testing-library/react'
import { useJourneys } from '@/hooks/useJourneys'
import { getJourneys, saveJourneys } from '@/utils/storage'
import { generateUniqueId } from '@/utils/idGenerator'
import { Journey } from '@/types'

jest.mock('@/utils/storage')
jest.mock('@/utils/idGenerator')
jest.mock('react-hot-toast')

const mockJourneys: Journey[] = [
  { id: 'journey-1', status: 'Find', nextStep: 'Survey', siteId: 'site-1', discoveredDate: '2023-05-01' },
  { id: 'journey-2', status: 'Survey', nextStep: 'Pitch', siteId: 'site-2', discoveredDate: '2023-05-02' },
]

describe('useJourneys', () => {
  beforeEach(() => {
    (getJourneys as jest.Mock).mockReturnValue(mockJourneys)
    ;(generateUniqueId as jest.Mock).mockReturnValue('journey-new')
  })

  it('should initialize with journeys from storage', () => {
    const { result } = renderHook(() => useJourneys())
    expect(result.current.journeys).toEqual(mockJourneys)
  })

  it('should add new journeys', () => {
    const { result } = renderHook(() => useJourneys())
    const newJourney: Journey = { id: 'journey-3', status: 'Pitch', nextStep: 'Audit', siteId: 'site-3', discoveredDate: '2023-05-03' }

    act(() => {
      result.current.addJourneys([newJourney])
    })

    expect(result.current.journeys).toEqual([...mockJourneys, newJourney])
    expect(saveJourneys).toHaveBeenCalledWith([...mockJourneys, newJourney])
  })

  // Add more tests here...
})