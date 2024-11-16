<script setup lang="ts">
import { computed } from 'vue'
import { useCharacter } from '../composables/useCharacter'

const { character, resetFocus } = useCharacter()
const meters = ['health', 'spirit', 'blood'] as const

const handleClick = ( value: number, meter: typeof meters[number]) => {
    if (value === 1 && (meter && character.value.meters[meter] === value || !meter && character.value.focus === value)) {
        value = 0;
    }
    character.value.meters[meter] = value;
}

const handleFocusClick = ( value: number) => {
  let newValue;
    if (value > 0) {
        newValue = value + 1
    }
    else if (value < 0) {
        newValue = value;
    }
    else {
      newValue = 1
    }

    if (character.value.focus === newValue && (newValue === 1 || newValue === -1)) {
        newValue = 0;
    }
    character.value.focus = newValue;
}



const circles = computed(() => {
  const totalSpots = 16
  return Array(totalSpots).fill(0).map((_, i) => {
    const value = i - 6
    return {
      value,
      active: value < 0 
        ? value >= character.value.focus  // Fill right-to-left for negative
        : value < character.value.focus,  // Fill left-to-right for positive
    }
  })
})


</script>

<template>
  <!-- Focus meter - full width with special styling -->
  <div class="meter-container">
    <div class="meter-label">Focus ({{ character.focus }})</div>
    <div class="focus-track">
      <div v-for="circle in circles" :key="circle.value" 
            class="focus-pip" 
            :class="{
              'negative': circle.value < 0,
              'positive': circle.value >= 0,
              'active': circle.active
            }"
            @click="handleFocusClick(circle.value)">
      </div>
      <q-btn flat dense color="primary" icon="refresh" @click="resetFocus" />
    </div>
    
  </div>

  <!-- Other meters in a grid -->
  <div class="meters-grid">
    <div v-for="meter in meters" :key="meter" class="meter-container">
      <div class="meter-label">{{ meter }} ({{ character.meters[meter] }})</div>
      <div class="meter-track">
        <div v-for="n in 5" :key="n"
              class="meter-pip"
              :class="{ active: character.meters[meter] >= n }"
              @click="handleClick(n, meter)">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.meter-container
  margin-bottom: 0.5rem

.meter-label
  font-size: 0.9rem
  margin-bottom: 0.25rem

.focus-track
  display: flex
  gap: 4px
  align-items: center
  flex-grow: 1

.focus-pip
  width: 12px
  height: 12px
  border-radius: 50%
  cursor: pointer
  border: 1px solid currentColor

  &.negative
    background: #ff525240
  
  &.positive
    background: #52ff5240
  
  &.active
    background: currentColor

    &.negative
      background: #ff5252

.meters-grid
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))
  gap: 1rem
  margin-top: 1rem

.meter-track
  display: flex
  gap: 4px

.meter-pip
  width: 16px
  height: 16px
  border-radius: 50%
  cursor: pointer
  border: 1px solid currentColor

  &.active
    background: currentColor
</style>