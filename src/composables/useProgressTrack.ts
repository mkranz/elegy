import { ProgressTrackDifficulty } from '@/types/character'

export function useProgressTrack() {
  const getProgressIncrement = (difficulty: ProgressTrackDifficulty) => {
  switch (difficulty) {
    case ProgressTrackDifficulty.troublesome: return 12 // 3 boxes
    case ProgressTrackDifficulty.dangerous: return 8   // 2 boxes
    case ProgressTrackDifficulty.formidable: return 4  // 1 box
    case ProgressTrackDifficulty.extreme: return 2     // 2 ticks
    case ProgressTrackDifficulty.epic: return 1        // 1 tick
    default: return 4
    }
  }

  return {
    getProgressIncrement
  }
}
