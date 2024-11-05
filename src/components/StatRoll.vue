<template>
  <div class="stat-roll">
    <span class="stat-name">{{ statName }}</span>
    <button @click="handleRoll" class="roll-button">Roll</button>
  </div>
</template>

<script setup lang="ts">
import { useDiceRoller } from '@/composables/useDiceRoller'
import { useCharacter } from '@/composables/useCharacter'
import { computed } from 'vue'

const props = defineProps<{
  statName: string
}>()

const { character } = useCharacter()
const { open } = useDiceRoller()

const statValue = computed(() => {
  const stat = props.statName.toLowerCase() as keyof typeof character.value.stats
  return character.value.stats[stat] || 0
})

const handleRoll = () => {
  open({
    actionScore: statValue.value,
    title: `${props.statName.charAt(0).toUpperCase() + props.statName.slice(1)} Roll`
  })
}
</script>

<style scoped>
.stat-roll {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stat-name {
  text-transform: capitalize;
}

.roll-button {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: #4a5568;
  color: white;
  cursor: pointer;
}

.roll-button:hover {
  background-color: #2d3748;
}
</style> 