import { ref, computed } from 'vue'

interface DiceRollOptions {
  actionScore?: number
  title?: string
}

const show = ref(false)
const bonus = ref(0)
const challengeDie1 = ref<number | null>(null)
const challengeDie2 = ref<number | null>(null)
const currentActionScore = ref<number>(0)
const canSelectActionScore = ref(true)
const currentTitle = ref<string>('')

const totalActionScore = computed(() => 
  currentActionScore.value + bonus.value
)

const rollResult = computed(() => {
  if (challengeDie1.value === null || challengeDie2.value === null) {
    return null
  }

  if (totalActionScore.value > challengeDie1.value && totalActionScore.value > challengeDie2.value) {
    return 'Strong Hit'
  } else if (totalActionScore.value > challengeDie1.value || totalActionScore.value > challengeDie2.value) {
    return 'Weak Hit'
  } else {
    return 'Miss'
  }
})

const roll = () => {
  challengeDie1.value = Math.floor(Math.random() * 10) + 1
  challengeDie2.value = Math.floor(Math.random() * 10) + 1
}

const open = (options: DiceRollOptions) => {
  canSelectActionScore.value = options?.actionScore === undefined
  currentActionScore.value = options?.actionScore || 5
  currentTitle.value = options?.title || 'Custom Roll'
  bonus.value = 0
  challengeDie1.value = null
  challengeDie2.value = null
  show.value = true
}

const close = () => {
  show.value = false
  bonus.value = 0
}

export function useDiceRoller() {
  return {
    // State
    show,
    bonus,
    challengeDie1,
    challengeDie2,
    currentTitle,
    currentActionScore,
    canSelectActionScore,
    totalActionScore,
    rollResult,
    
    // Methods
    roll,
    open,
    close
  }
} 