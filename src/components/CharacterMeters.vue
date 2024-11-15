<script setup lang="ts">
import { computed } from 'vue'
import { type Impact, type Meter } from '../types/character'
import { useCharacter } from '../composables/useCharacter'
import MeterTrack from './MeterTrack.vue'

const { character, resetFocus } = useCharacter()

const impactsList = [
  'wounded',
  'permanently harmed',
  'starving',
  'sinner',
  'shaken',
  'traumatized'
]

const defaultFocusValue = computed(() => {
  const activeImpacts = Object.values(character.value.impacts).filter(v => v).length
  if (activeImpacts === 0) return 2
  if (activeImpacts === 1) return 1
  return 0
})
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Condition Meters</div>
      <div class="row q-col-gutter-md">
        <!-- Focus -->
        <div class="col-12 col-sm-12">
          <div class="row items-center">
            <MeterTrack v-model="character.focus" :min="-6" :max="10" label="Focus" />
            <q-btn flat color="primary" label="Reset" :title="'Reset focus to ' + defaultFocusValue"
              @click="resetFocus" />
          </div>
        </div>

        <!-- Health, Spirit, Blood -->
        <template v-for="meter in ['health', 'spirit', 'blood']" :key="meter">
          <div class="col-12 col-sm-4">
            <MeterTrack v-model="character.meters[meter as Meter]" :label="meter" />
          </div>
        </template>

        <!-- Impacts -->
        <div class="col-12 col-sm-12">
          <div class="text-h6">Impacts</div>
          <div class="row q-col-gutter-sm">
            <div v-for="impact in impactsList" :key="impact" class="col-12 col-sm-2">
              <q-checkbox v-model="character.impacts[impact as Impact]" :label="impact" />
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template> 