<template>
  <q-btn-group spread>
    <q-btn
      flat
      :disable="modelValue <= min"
      @click="decrease"
      icon="remove"
    />
    <q-btn
      flat
      disable
      :label="modelValue"
    />
    <q-btn
      flat
      :disable="modelValue >= max"
      @click="increase"
      icon="add"
    />
  </q-btn-group>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: number
  min: number
  max: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const increase = () => {
  if (props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue + 1)
  }
}

const decrease = () => {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1)
  }
}
</script>