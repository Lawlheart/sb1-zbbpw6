import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '../../pages/index'

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => {
    return children
  }
})

describe('HomePage', () => {
  it('renders the welcome message and navigation links', () => {
    render(<HomePage />)

    expect(screen.getByText('Welcome to A11y Hive')).toBeInTheDocument()
    expect(screen.getByText('Your central hub for accessibility audits and journey tracking')).toBeInTheDocument()

    expect(screen.getByText('Journeys')).toBeInTheDocument()
    expect(screen.getByText('Audits')).toBeInTheDocument()
    expect(screen.getByText('Sites')).toBeInTheDocument()
    expect(screen.getByText('Data')).toBeInTheDocument()
  })
})