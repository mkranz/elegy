<script setup lang="ts">
import { ProgressTrackDifficulty, type ProgressTrack } from '@/types/character';
import { computed, ref } from 'vue'
import { useDiceRoller } from '../composables/useDiceRoller'
import { useMoves } from '@/composables/useMoves'
import StatRoll from './StatRoll.vue'
import { useProgressTrack } from '@/composables/useProgressTrack'

const props = defineProps<{
  title: string,
  type: 'elegies' | 'connections' | 'combat',
  progressTrack: ProgressTrack
}>()


const { moves } = useMoves()
const { open } = useDiceRoller()
const { increaseProgress, decreaseProgress } = useProgressTrack()
const emit = defineEmits(['remove'])

const isEditing = ref(false)

const showInitialMove = computed(() => {
  return (props.type === 'combat' && !props.progressTrack.isInitialized) ||
         (props.type === 'connections' && !props.progressTrack.isInitialized)
})

var completionMove = props.type === 'combat' ? moves.endTheFight : 
             props.type === 'connections' ? moves.formBond : 
             props.type === 'elegies' ? moves.fulfillElegy : null

const toggleBox = (index: number) => {
  if (!isEditing.value || props.progressTrack.completed) return
  const currentProgress = index * 4
  if (props.progressTrack.progress > currentProgress) {
    props.progressTrack.progress = currentProgress
  } else {
    props.progressTrack.progress = currentProgress + 4
  }
}

const getBoxClass = (index: number) => {
  const boxProgress = Math.min(4, Math.max(0, props.progressTrack.progress - (index * 4)))
  return {
    'box-empty': boxProgress === 0,
    'box-tick1': boxProgress === 1,
    'box-tick2': boxProgress === 2,
    'box-tick3': boxProgress === 3,
    'box-full': boxProgress === 4
  }
}

const getBoxSymbol = (index: number) => {
  const boxProgress = Math.min(4, Math.max(0, props.progressTrack.progress - (index * 4)))
  switch (boxProgress) {
    case 1: return 'brightness_3'
    case 2: return 'brightness_2'
    case 3: return 'bedtime'
    case 4: return 'brightness_1'
    default: return 'radio_button_unchecked'
  }
}

const handleAttempt = () => {
  if (completionMove) {
    open({
      actionScore: Math.max(1, Math.floor(props.progressTrack.progress / 4)),
      title: completionMove.name,
      outcomes: completionMove.outcomes,
      progressTrack: props.progressTrack
    })
  }
}

const handleClash = () => {
  if (props.type === 'combat') {
    open({
      title: moves.clash.name,
      outcomes: moves.clash.outcomes,
      progressTrack: props.progressTrack
    })
  }
}

const handleDevelopRelationship = () => {
  if (props.type === 'connections') {
    increaseProgress(props.progressTrack)
  }
}

const handleTestRelationship = () => {
  if (props.type === 'connections') {
    open({
      title: moves.testRelationship.name,
      outcomes: moves.testRelationship.outcomes,
      progressTrack: props.progressTrack
    })
  }
}

const handleReachMilestone = () => {
  if (props.type === 'elegies') {
    increaseProgress(props.progressTrack)
  }
}

const shouldShowMoves = computed(() => {
  return !props.progressTrack.completed && (
    !showInitialMove.value || props.progressTrack.isInitialized
  )
})

</script>

<template>
  <q-card :class="['progress-track', { 'completed-track': progressTrack.completed }]">
    <q-card-section>
      <div class="row items-center justify-between">
        <div>
          <div class="text-h6 line-height-1">{{ title }}</div>
          <div v-if="!isEditing" class="text-subtitle2 line-height-1">
            {{ props.progressTrack.difficulty }}
            <q-badge v-if="progressTrack.completed" color="positive">Completed</q-badge>
          </div>
          <div v-if="type === 'connections' && progressTrack.role" class="text-subtitle2 line-height-1 q-mt-xs">
            Role: {{ progressTrack.role }}
          </div>
        </div>
        <div class="row">
          <q-select
            v-if="isEditing && !progressTrack.completed"
            v-model="props.progressTrack.difficulty"
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
            v-if="!progressTrack.completed"
            flat
            round
            color="primary"
            icon="edit"
            @click="isEditing = !isEditing"
          />
          <q-btn
            v-if="!progressTrack.completed"
            flat
            round
            color="negative"
            icon="close"
            @click="$emit('remove')"
          />
        </div>
      </div>

      <template v-if="showInitialMove">
        <template v-if="props.type === 'combat'">
          <div class="text-subtitle1 q-my-md">Enter The Fray</div>
          <div class="q-gutter-y-md">
            <div>
              Facing off against your foe:
              <StatRoll 
                statName="heart" 
                :move="moves.enterTheFray"
                :progress-track="props.progressTrack"
              />
            </div>
            <div>
              In the thick of it at close quarters:
              <StatRoll 
                statName="force" 
                :move="moves.enterTheFray"
                :progress-track="props.progressTrack"
              />
            </div>
            <div>
              On the move or preparing to act:
              <StatRoll 
                statName="dexterity" 
                :move="moves.enterTheFray"
                :progress-track="props.progressTrack"
              />
            </div>
            <div>
              Caught in a trap or sizing up the situation:
              <StatRoll 
                statName="intellect" 
                :move="moves.enterTheFray"
                :progress-track="props.progressTrack"
              />
            </div>
          </div>
        </template>

        <template v-if="props.type === 'connections'">
          <div class="text-subtitle1 q-my-md">Make A Connection</div>
          <div class="q-gutter-y-md">
            <div>
              <StatRoll 
                statName="heart" 
                :move="moves.makeConnection"
                :progress-track="props.progressTrack"
              />
            </div>
          </div>
        </template>
        </template>

        <template v-else>

        <div class="row q-col-gutter-xs q-mt-sm">
          <div 
            v-for="i in 10" 
            :key="i" 
            class="col"
          >
          <q-icon
                v-if="getBoxSymbol(i-1)"
                :name="getBoxSymbol(i-1)"
                @click="toggleBox(i-1)"
                :class="getBoxClass(i-1)"
              size="sm"
            />

          </div>
        </div>

        <div v-if="isEditing" class="row items-center justify-center q-mt-md q-gutter-md">
          <q-btn
            flat
            round
            icon="remove"
            :disable="props.progressTrack.progress === 0"
            @click="decreaseProgress(props.progressTrack)"
          />
          <div class="text-subtitle1">{{ props.progressTrack.progress }} / 40</div>
          <q-btn
            flat
            round
            icon="add"
            :disable="props.progressTrack.progress === 40"
            @click="increaseProgress(props.progressTrack)"
          />
        </div>

        <div v-if="shouldShowMoves" class="row justify-between items-center q-mt-md">
          <q-btn
            flat
            color="primary"
            v-if="type === 'combat'"
            label="Clash"
            @click="handleClash"
          />

          <q-btn
            flat
            color="primary"
            v-if="type === 'connections'"
            label="Develop Relationship"
            @click="handleDevelopRelationship"
          />

          <q-btn
            flat
            color="primary"
            v-if="type === 'connections'"
            label="Test Relationship"
            @click="handleTestRelationship"
          />


          <q-btn
            flat
            color="primary"
            v-if="type === 'elegies'"
            label="Reach a Milestone"
            @click="handleReachMilestone"
          />


          <q-btn
            flat
            color="primary"
            :label="completionMove?.name"
            @click="handleAttempt"
          />
        </div>
      </template>

    </q-card-section>
  </q-card>
</template>

<style lang="sass">
.progress-track
  &.completed-track
    opacity: 0.7
    
    .box-tick1,
    .box-tick2,
    .box-tick3,
    .box-full
      color: $positive

.line-height-1
  line-height: 1rem !important
</style> 