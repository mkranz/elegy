import type { Character } from './character'

export interface MoveOutcome {
  text: string
  actions?: Array<{
    label: string
    execute: (character: Character) => void
  }>
}

export interface MoveOutcomes {
  strongHit: MoveOutcome
  weakHit: MoveOutcome
  miss: MoveOutcome
} 