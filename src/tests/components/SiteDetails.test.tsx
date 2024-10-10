import React from 'react'
import { render, screen } from '@testing-library/react'
import SiteDetails from '../../components/SiteDetails'
import { mockSites } from '../../mocks/mockData'

describe('SiteDetails', () => {
  it('renders site details correctly', () => {
    const site = mockSites['1']
    render(<SiteDetails site={site} />)

    expect(screen.getByText('Example Site 1')).toBeInTheDocument()
    expect(screen.getByText('An e-commerce website selling handmade crafts')).toBeInTheDocument()
    expect(screen.getByText('https://example1.com')).toBeInTheDocument()
    expect(screen.getByText('Crafty Creations')).toBeInTheDocument()
    expect(screen.getByText('A small business specializing in unique handmade items')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('Owner')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('jane@example1.com')).toBeInTheDocument()
    expect(screen.getByText('Small')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('MongoDB')).toBeInTheDocument()
    expect(screen.getByText('Full metadata for Example Site 1')).toBeInTheDocument()
  })
})