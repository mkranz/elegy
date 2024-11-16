import type { Character, ProgressTrack } from './character'

export interface MoveOutcome {
  text: string
  actions?: Array<{
    label: string
    execute: (character: Character, progressTrack?: ProgressTrack) => void
  }>
}

export interface MoveOutcomes {
  strongHit: MoveOutcome
  weakHit: MoveOutcome
  miss: MoveOutcome
}

export interface Move {
  name: string
  description?: string
  outcomes: MoveOutcomes
} 