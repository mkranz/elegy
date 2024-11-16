import { ref, watch } from 'vue'
import { type Character, createDefaultCharacter } from '../types/character'
import { ProgressTrackDifficulty } from '../types/character'

const STORAGE_KEY = 'elegy-character'

// Create a singleton instance of the character state
const character = ref<Character>(
  JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || createDefaultCharacter()
)

// Save to localStorage whenever character changes
watch(character, (newValue: Character) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue))
}, { deep: true })

export function useCharacter() {
  const getDefaultFocusValue = (impacts: Record<string, boolean>) => {
    const activeImpacts = Object.values(impacts).filter(v => v).length
    if (activeImpacts === 0) return 2
    if (activeImpacts === 1) return 1
    return 0
  }

  const resetFocus = () => {
    character.value.focus = getDefaultFocusValue(character.value.impacts)
  }

  const addProgressTrack = (type: 'elegies' | 'connections' | 'combat') => {
    const trackName = prompt(`Enter ${type === 'elegies' ? 'elegy' : type === 'connections' ? 'connection' : 'combat'} name:`)
    if (trackName) {
      character.value.progressTracks.push({
        id: Date.now(),
        title: trackName,
        progress: 0,
        difficulty: ProgressTrackDifficulty.dangerous,
        type,
        isInitialized: false
      })
    }
  }

  const removeProgressTrack = (trackId: number) => {
    const trackIndex = character.value.progressTracks.findIndex(t => t.id === trackId)
    if (trackIndex !== -1) {
      character.value.progressTracks.splice(trackIndex, 1)
    }
  }

  const addAsset = (assetData: any) => {
    character.value.assets.push({
      name: assetData.name,
      description: assetData.description,
      icon: assetData.icon,
      group: assetData.group,
      abilities: assetData.abilities,
      unlockedLevels: { 1: true, 2: false, 3: false }
    })
  }

  const removeAsset = (index: number) => {
    character.value.assets.splice(index, 1)
  }

  const updateAsset = (asset: any, level: number) => {
    if (level.toString() === '1' && !asset.unlockedLevels[1]) {
      asset.unlockedLevels[2] = false
      asset.unlockedLevels[3] = false
    }
  }

  return {
    character,
    getDefaultFocusValue,
    resetFocus,
    addProgressTrack,
    removeProgressTrack,
    addAsset,
    removeAsset,
    updateAsset
  }
} 