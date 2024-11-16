import { ref, watch } from 'vue'

const PORTRAIT_STORAGE_KEY = 'elegy-character-portrait'

const portrait = ref<string>(
  localStorage.getItem(PORTRAIT_STORAGE_KEY) || ''
)

// Save to localStorage whenever portrait changes
watch(portrait, (newValue: string) => {
  localStorage.setItem(PORTRAIT_STORAGE_KEY, newValue)
})

export function usePortrait() {
  const setPortrait = (value: string) => {
    portrait.value = value
  }

  return {
    portrait,
    setPortrait
  }
} 