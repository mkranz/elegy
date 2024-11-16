<script setup lang="ts">
import { ProgressTrackDifficulty } from '@/types/character';
import { computed, ref } from 'vue'
import { useDiceRoller } from '../composables/useDiceRoller'
import { useMoves } from '@/composables/useMoves'

const props = defineProps<{
  title: string,
  type: 'elegies' | 'connections' | 'combat'
}>()

const progress = defineModel<number>('progress', { required: true })
const difficulty = defineModel<ProgressTrackDifficulty>('difficulty', { default: ProgressTrackDifficulty.dangerous })
const { moves } = useMoves()
const emit = defineEmits(['remove'])

const progressIncrement = computed(() => {
  switch (difficulty.value) {
    case ProgressTrackDifficulty.troublesome: return 12 // 3 boxes
    case ProgressTrackDifficulty.dangerous: return 8   // 2 boxes
    case ProgressTrackDifficulty.formidable: return 4  // 1 box
    case ProgressTrackDifficulty.extreme: return 2     // 2 ticks
    case ProgressTrackDifficulty.epic: return 1        // 1 tick
    default: return 4
  }
})

const increaseProgress = () => {
  progress.value = Math.min(40, progress.value + progressIncrement.value)
}

const decreaseProgress = () => {
  progress.value = Math.max(0, progress.value - progressIncrement.value)
}

const toggleBox = (index: number) => {
  const currentProgress = index * 4
  if (progress.value > currentProgress) {
    progress.value = currentProgress
  } else {
    progress.value = currentProgress + 4
  }
}

const getBoxClass = (index: number) => {
  const boxProgress = Math.min(4, Math.max(0, progress.value - (index * 4)))
  return {
    'box-empty': boxProgress === 0,
    'box-tick1': boxProgress === 1,
    'box-tick2': boxProgress === 2,
    'box-tick3': boxProgress === 3,
    'box-full': boxProgress === 4
  }
}

const getBoxSymbol = (index: number) => {
  const boxProgress = Math.min(4, Math.max(0, progress.value - (index * 4)))
  switch (boxProgress) {
    case 1: return '/'
    case 2: return 'X'
    case 3: return '⊗'
    case 4: return '✧'
    default: return ''
  }
}

const { open } = useDiceRoller()

const handleAttempt = () => {
  var move = props.type === 'combat' ? moves.endTheFight : 
             props.type === 'connections' ? moves.makeConnection : 
             props.type === 'elegies' ? moves.fulfillElegy : null

  if (move) {
    open({
      actionScore: Math.max(1, Math.floor(progress.value / 4)),
      title: move.name,
      outcomes: move.outcomes
    })
  }
}
</script>

<template>
  <q-card class="progress-track">
    <q-card-section>
      <div class="row items-center justify-between q-mb-md">
        <div class="text-h6">{{ title }}</div>
        <div class="row q-gutter-sm">
          <q-select
            v-model="difficulty"
            :options="[
              { label: 'Troublesome', value: ProgressTrackDifficulty.troublesome },
              { label: 'Dangerous', value: ProgressTrackDifficulty.dangerous },
              { label: 'Formidable', value: ProgressTrackDifficulty.formidable },
              { label: 'Extreme', value: ProgressTrackDifficulty.extreme },
              { label: 'Epic', value: ProgressTrackDifficulty.epic }
            ]"
            dense
            outlined
            options-dense
            emit-value
            style="min-width: 150px"
          />
          <q-btn
            flat
            round
            color="negative"
            icon="close"
            @click="$emit('remove')"
          />
        </div>
      </div>

      <div class="row q-col-gutter-xs">
        <div 
          v-for="i in 10" 
          :key="i" 
          class="col"
        >
          <q-btn
            class="full-width box"
            :class="getBoxClass(i-1)"
            flat
            no-caps
            :label="getBoxSymbol(i-1)"
            @click="toggleBox(i-1)"
          />
        </div>
      </div>

      <div class="row items-center justify-center q-mt-md q-gutter-md">
        <q-btn
          flat
          round
          icon="remove"
          :disable="progress === 0"
          @click="decreaseProgress"
        />
        <div class="text-subtitle1">{{ progress }} / 40</div>
        <q-btn
          flat
          round
          icon="add"
          :disable="progress === 40"
          @click="increaseProgress"
        />
      </div>
    </q-card-section>

    <div class="row justify-between items-center q-mt-md">
      <q-btn
        flat
        color="primary"
        label="Attempt"
        @click="handleAttempt"
      />
    </div>
  </q-card>
</template>

<style lang="sass">
.progress-track
  .box
    aspect-ratio: 1
    border: 1px solid $grey-5
    
    &.box-empty
      background: white
    
    &.box-tick1
      background: $grey-2
    
    &.box-tick2
      background: $grey-3
    
    &.box-tick3
      background: $grey-4
    
    &.box-full
      background: $primary
      color: white
</style> 