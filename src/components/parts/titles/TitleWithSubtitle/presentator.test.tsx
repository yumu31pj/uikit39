import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { TitleWithSubtextType } from './index.types'
import { TitleWithSubtitlePresentator } from "./presentator"
import styles from "./style.module.scss"

describe('TitleWithSubtitlePresentator', () => {
  const mockProps: TitleWithSubtextType = {
    title: 'Test Title',
    subtitle: 'Test Subtitle'
  };

  const mockHasUnderlineProps: TitleWithSubtextType = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    hasUnderline: true
  };

  test('renders title and subtitle correctly', () => {
    render(<TitleWithSubtitlePresentator {...mockProps} />)
    const titleElement = screen.getByText(mockProps.title)
    const subtitleElement = screen.getByText(mockProps.subtitle)
    expect(titleElement).toBeInTheDocument()
    expect(subtitleElement).toBeInTheDocument()
  });

  test('applies the correct container class', () => {
    render(<TitleWithSubtitlePresentator {...mockProps} />)
    const containerElement = screen.getByRole('heading', { name: mockProps.title }).closest('div')
    expect(containerElement).toHaveClass(styles["c-title-with-subtitle"])
  });

  test('applies the correct modifier "underline" class', () => {
    render(<TitleWithSubtitlePresentator {...mockHasUnderlineProps} />)
    const containerElement = screen.getByRole('heading', { name: mockProps.title }).closest('div')
    expect(containerElement).toHaveClass(styles["c-title-with-subtitle"]);
    expect(containerElement).toHaveClass(styles["c-title-with-subtitle--underline"])
  })

})