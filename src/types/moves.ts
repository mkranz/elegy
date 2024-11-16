import type { Character } from './character'

export interface Move {
  name: string
  description?: string
  outcomes: {
    strongHit: {
      text: string
      actions: Array<{
        label: string
        execute: (character: Character) => void
      }>
    }
    weakHit: {
      text: string
      actions: Array<{
        label: string
        execute: (character: Character) => void
      }>
    }
    miss: {
      text: string
      actions: Array<{
        label: string
        execute: (character: Character) => void
      }>
    }
  }
} 