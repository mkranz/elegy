<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: number
  max?: number
  min?: number
  label?: string
}>(), {
  max: 5,
  min: 0,
  label: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const circles = computed(() => {
  const totalSpots = props.max - props.min
  return Array(totalSpots).fill(0).map((_, i) => {
    const value = i + props.min
    return {
      value,
      filled: value < 0 
        ? value >= props.modelValue  // Fill right-to-left for negative
        : value < props.modelValue,  // Fill left-to-right for positive
      negative: value < 0
    }
  })
})

const handleClick = (value: number) => {
    let newValue;
    if (value === 0) {
        newValue = 1
    }
    else if (value > 0) {
        newValue = value + 1
    }
    else if (value < 0) {
        newValue = value;
    }
    if (props.modelValue === newValue && (newValue === 1 || newValue === -1)) {
        newValue = 0;
    }
  emit('update:modelValue', newValue)
}
</script>

<template>
  <div class="meter-track row items-center">
    <div v-if="label" class="text-subtitle1 q-mr-md">{{ label }} ({{ modelValue }})</div>
    <div class="circles-container">
      <div class="zero-line" v-if="min < 0" />
      <div 
        v-for="(circle, index) in circles" 
        :key="index"
        class="circle"
        :class="{ 
          filled: circle.filled,
          negative: circle.negative 
        }"
        @click="handleClick(circle.value)"
      />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.circles-container
  display: flex
  gap: 8px
  position: relative
  padding: 4px 0

.zero-line
  position: absolute
  left: 0
  top: 50%
  bottom: 50%
  width: 2px
  background-color: currentColor
  opacity: 0.3

.circle
  width: 24px
  height: 24px
  border-radius: 50%
  border: 2px solid currentColor
  cursor: pointer
  transition: background-color 0.2s ease
  position: relative

  &.negative
    border-color: var(--q-negative)
    &.filled
      background-color: var(--q-negative)

  &.filled:not(.negative)
    background-color: currentColor

  &:hover
    opacity: 0.8
</style> 