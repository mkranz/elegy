import type { MoveOutcomes } from '@/types/moves'
import type { Character, ProgressTrack } from '@/types/character'
import { ref, computed } from 'vue'
import { useCharacter } from './useCharacter'

type OutcomeCallback = (outcome: 'strongHit' | 'weakHit' | 'miss') => void

interface DiceRollOptions {
  actionScore?: number
  title?: string
  statName?: string
  outcomes?: MoveOutcomes
  progressTrack?: ProgressTrack
  onOutcome?: OutcomeCallback
}

const show = ref(false)
const bonus = ref(0)
const challengeDie1 = ref<number | null>(null)
const challengeDie2 = ref<number | null>(null)
const currentActionScore = ref<number>(0)
const canSelectActionScore = ref(true)
const currentTitle = ref<string>('')
const currentStatName = ref<string>('')
const currentOutcomes = ref<MoveOutcomes>()
const onOutcome = ref<OutcomeCallback>()
const appliedActions = ref<Set<string>>(new Set())
const currentProgressTrack = ref<ProgressTrack | undefined>()

const { character } = useCharacter()

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

const currentOutcome = computed(() => {
  if (!rollResult.value || !currentOutcomes.value) return null
  
  switch (rollResult.value) {
    case 'Strong Hit':
      return currentOutcomes.value.strongHit
    case 'Weak Hit':
      return currentOutcomes.value.weakHit
    case 'Miss':
      return currentOutcomes.value.miss
    default:
      return null
  }
})

const executeAction = (action: { label: string, execute: (character: Character, progressTrack?: ProgressTrack) => void }) => {
  action.execute(character.value, currentProgressTrack.value)
  appliedActions.value.add(action.label)
}

const roll = () => {
  challengeDie1.value = Math.floor(Math.random() * 10) + 1
  challengeDie2.value = Math.floor(Math.random() * 10) + 1
  
  if (onOutcome.value && rollResult.value) {
    onOutcome.value(rollResult.value.toLowerCase().replace(' ', '') as 'strongHit' | 'weakHit' | 'miss')
  }
}

const open = (options: DiceRollOptions) => {
  onOutcome.value = options?.onOutcome
  currentProgressTrack.value = options?.progressTrack
  canSelectActionScore.value = options?.actionScore === undefined
  currentActionScore.value = options?.actionScore || 5
  currentTitle.value = options?.title || 'Custom Roll'
  currentStatName.value = options?.statName || ''
  currentOutcomes.value = options?.outcomes
  bonus.value = 0
  challengeDie1.value = null
  challengeDie2.value = null
  appliedActions.value.clear()
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
    currentStatName,
    currentActionScore,
    canSelectActionScore,
    totalActionScore,
    rollResult,
    currentOutcome,
    appliedActions,
    
    // Methods
    roll,
    open,
    close,
    executeAction
  }
} 