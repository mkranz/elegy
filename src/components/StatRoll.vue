<template>
  <span class="stat-roll">
    <button @click="handleRoll" class="roll-button">Roll</button>
    <span class="stat-name">{{ statName }}</span>    
  </span>
</template>

<script setup lang="ts">
import { useDiceRoller } from '@/composables/useDiceRoller'
import { useCharacter } from '@/composables/useCharacter'
import { computed } from 'vue'
import type { Move } from '@/types/moves';
import type { ProgressTrack } from '@/types/character';

const props = defineProps<{
  statName: string
  move?: Move
  progressTrack?: ProgressTrack
}>()

const { character } = useCharacter()
const { open } = useDiceRoller()

const statValue = computed(() => {
  const stat = props.statName.toLowerCase() as keyof typeof character.value.stats
  return character.value.stats[stat] || 0
})

const emit = defineEmits(['roll-outcome'])

const handleRoll = () => {
  open({
    actionScore: statValue.value,
    title: props.move?.name || `${props.statName.charAt(0).toUpperCase() + props.statName.slice(1)} Roll`,
    statName: props.statName,
    outcomes: props.move?.outcomes,
    progressTrack: props.progressTrack,
    onOutcome: (outcome: 'strongHit' | 'weakHit' | 'miss') => {
      emit('roll-outcome', outcome)
    }
  })
}
</script>

<style lang="sass" scoped>
.stat-roll
  display: inline-flex
  align-items: center
  gap: 0.5rem

.stat-name
  text-transform: capitalize

.roll-button
  padding: 0.25rem 0.5rem
  border-radius: 0.25rem
  background-color: #4a5568
  color: white
  cursor: pointer
  line-height: 1


.roll-button:hover
  background-color: #2d3748
</style> 