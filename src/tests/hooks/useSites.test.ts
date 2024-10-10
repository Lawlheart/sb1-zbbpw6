import { renderHook, act } from '@testing-library/react-hooks'
import { useSites } from '../../hooks/useSites'
import { getSites, saveSites } from '../../utils/storage'
import { generateUniqueId } from '../../utils/idGenerator'
import { Site } from '../../types'

jest.mock('../../utils/storage')
jest.mock('../../utils/idGenerator')
jest.mock('react-hot-toast')

const mockSites: { [key: string]: Site } = {
  '1': { id: '1', name: 'Site 1', link: 'https://site1.com', details: 'Details 1', fullMetaData: 'Metadata 1', size: 'Small', builtWith: ['React'], companyName: 'Company 1', companyDescription: 'Description 1', contactName: 'Contact 1', contactRole: 'Role 1', contactMethod: 'Email', meetingNotes: '', email: 'contact1@site1.com', phoneNumber: '123-456-7890' },
  '2': { id: '2', name: 'Site 2', link: 'https://site2.com', details: 'Details 2', fullMetaData: 'Metadata 2', size: 'Medium', builtWith: ['Angular'], companyName: 'Company 2', companyDescription: 'Description 2', contactName: 'Contact 2', contactRole: 'Role 2', contactMethod: 'Phone', meetingNotes: '', email: 'contact2@site2.com', phoneNumber: '098-765-4321' },
}

describe('useSites', () => {
  beforeEach(() => {
    (getSites as jest.Mock).mockReturnValue(mockSites)
    ;(generateUniqueId as jest.Mock).mockReturnValue('new-id')
  })

  it('should initialize with sites from storage', () => {
    const { result } = renderHook(() => useSites())
    expect(result.current.sites).toEqual(mockSites)
  })

  it('should add new sites', () => {
    const { result } = renderHook(() => useSites())
    const newSite: Site = { id: '3', name: 'Site 3', link: 'https://site3.com', details: 'Details 3', fullMetaData: 'Metadata 3', size: 'Large', builtWith: ['Vue'], companyName: 'Company 3', companyDescription: 'Description 3', contactName: 'Contact 3', contactRole: 'Role 3', contactMethod: 'Email', meetingNotes: '', email: 'contact3@site3.com', phoneNumber: '111-222-3333' }

    act(() => {
      result.current.addSites({ '3': newSite })
    })

    expect(result.current.sites).toEqual({ ...mockSites, '3': newSite })
    expect(saveSites).toHaveBeenCalledWith({ ...mockSites, '3': newSite })
  })

  it('should delete a site', () => {
    const { result } = renderHook(() => useSites())

    act(() => {
      result.current.deleteSite('1')
    })

    expect(result.current.sites).toEqual({ '2': mockSites['2'] })
    expect(saveSites).toHaveBeenCalledWith({ '2': mockSites['2'] })
  })

  it('should toggle site selection', () => {
    const { result } = renderHook(() => useSites())

    act(() => {
      result.current.toggleSiteSelection('1')
    })

    expect(result.current.selectedSites).toEqual(['1'])

    act(() => {
      result.current.toggleSiteSelection('1')
    })

    expect(result.current.selectedSites).toEqual([])
  })

  it('should select all sites', () => {
    const { result } = renderHook(() => useSites())

    act(() => {
      result.current.selectAllSites()
    })

    expect(result.current.selectedSites).toEqual(['1', '2'])
  })

  it('should deselect all sites', () => {
    const { result } = renderHook(() => useSites())

    act(() => {
      result.current.selectAllSites()
      result.current.deselectAllSites()
    })

    expect(result.current.selectedSites).toEqual([])
  })

  it('should seed sites', () => {
    const { result } = renderHook(() => useSites())

    act(() => {
      result.current.seedSites()
    })

    expect(Object.keys(result.current.sites).length).toBe(4) // 2 original + 2 seeded
    expect(saveSites).toHaveBeenCalled()
  })
})