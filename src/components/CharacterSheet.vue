<script setup lang="ts">
import { ref, computed } from 'vue'
import { type Impact, type Meter, type Stat } from '../types/character'
import Counter from './Counter.vue'
import ProgressTrack from './ProgressTrack.vue'
import StatRoll from './StatRoll.vue'
import { useCharacter } from '../composables/useCharacter'
import Assets from './Assets.vue'
import MeterTrack from './MeterTrack.vue'

// Use the character composable
const { 
  character, 
  resetFocus, 
  addProgressTrack, 
  removeProgressTrack
} = useCharacter()

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

const elegiesTracks = computed(() => 
  character.value.progressTracks.filter(t => t.type === 'elegies')
)

const connectionTracks = computed(() => 
  character.value.progressTracks.filter(t => t.type === 'connections')
)

const combatTracks = computed(() => 
  character.value.progressTracks.filter(t => t.type === 'combat')
)

</script>
<template>
  <q-page padding>
    <div class="character-sheet q-gutter-md">
      <!-- Header Section -->
      <q-card class="header">
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-4">
              <q-input
                v-model="character.name"
                label="Name"
                outlined
              />
            </div>
            <div class="col-12 col-sm-4">
              <q-input
                v-model="character.looks"
                label="Looks"
                outlined
              />
            </div>
            <div class="col-12 col-sm-4">
              <q-input
                v-model="character.background"
                label="Background"
                outlined
              />
            </div>
          </div>
        </q-card-section>
      </q-card>

      <!-- Meters Section -->
      <q-card>
        <q-card-section>
          
          <div class="text-h6">Condition Meters</div>
          <div class="row q-col-gutter-md">
            <!-- Focus -->
            <div class="col-12 col-sm-6">
              <div class="row items-center q-col-gutter-md">
                <div class="col">
                  <MeterTrack
                    v-model="character.focus"
                    :min="-6"
                    :max="10"
                    label="Focus"
                  />
                </div>
                <div class="col-auto">
                  <q-btn
                    flat
                    color="primary"
                    label="Reset"
                    :title="'Reset focus to ' + defaultFocusValue"
                    @click="resetFocus"
                  />
                </div>
              </div>
            </div>

            <!-- Impacts -->
            <div class="col-12 col-sm-6">
              <div class="text-h6">Impacts</div>
              <div class="row q-col-gutter-sm">
                <div 
                  v-for="impact in impactsList" 
                  :key="impact"
                  class="col-12 col-sm-6"
                >
                  <q-checkbox
                    v-model="character.impacts[impact as Impact]"
                    :label="impact"
                  />
                </div>
              </div>
            </div>

            
            <!-- Health, Spirit, Blood -->
            <template v-for="meter in ['health', 'spirit', 'blood']" :key="meter">
              <div class="col-12 col-sm-4">
                <MeterTrack
                  v-model="character.meters[meter as Meter]"
                  :label="meter"
                />
              </div>
            </template>
          </div>
        </q-card-section>
      </q-card>

      <!-- Stats Section -->
      <q-card>
        <q-card-section>
          <div class="text-h6">Stats</div>
          <div class="row q-col-gutter-md">
            <div 
              v-for="stat in ['force', 'dexterity', 'intellect', 'glamour', 'heart']" 
              :key="stat"
              class="col-12 col-sm-2"
            >
              <div class="text-subtitle1 q-mb-sm">
                <StatRoll :statName="stat" />
              </div>
              <q-btn-group spread>
                <q-btn
                  flat
                  :disable="character.stats[stat as Stat] <= 5"
                  @click="character.stats[stat as Stat]--"
                  icon="remove"
                />
                <q-btn
                  flat
                  disable
                  :label="character.stats[stat as Stat]"
                />
                <q-btn
                  flat
                  :disable="character.stats[stat as Stat] >= 10"
                  @click="character.stats[stat as Stat]++"
                  icon="add"
                />
              </q-btn-group>
            </div>
          </div>
        </q-card-section>
      </q-card>

      
      <Assets />

      <!-- Progress Tracks -->
        <!-- Elegies -->
        <div class="col-12">
          <q-card>
            <q-card-section>
              <div class="row items-center justify-between q-mb-md">
                <div class="text-h6">Elegies</div>
                <q-btn
                  color="primary"
                  icon="add"
                  label="Add Elegy"
                  @click="addProgressTrack('elegies')"
                />
              </div>
              <div class="row q-col-gutter-md">
                <div 
                  v-for="(track, index) in elegiesTracks" 
                  :key="track.id"
                  class="col-12 col-md-6"
                >
                  <ProgressTrack 
                    :title="track.title"
                    type="elegies"
                    v-model:difficulty="track.difficulty"
                    v-model:progress="track.progress"
                    @remove="removeProgressTrack(track.id)"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Connections -->
        <div class="col-12">
          <q-card>
            <q-card-section>
              <div class="row items-center justify-between q-mb-md">
                <div class="text-h6">Connections</div>
                <q-btn
                  color="primary"
                  icon="add"
                  label="Add Connection"
                  @click="addProgressTrack('connections')"
                />
              </div>
              <div class="row q-col-gutter-md">
                <div 
                  v-for="(track, index) in connectionTracks" 
                  :key="track.id"
                  class="col-12 col-md-6"
                >
                  <ProgressTrack 
                    :title="track.title"
                    type="connections"
                    v-model:difficulty="track.difficulty"
                    v-model:progress="track.progress"
                    @remove="removeProgressTrack(track.id)"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Combat -->
        <div class="col-12">
          <q-card>
            <q-card-section>
              <div class="row items-center justify-between q-mb-md">
                <div class="text-h6">Combat</div>
                <q-btn
                  color="primary"
                  icon="add"
                  label="Add Combat"
                  @click="addProgressTrack('combat')"
                />
              </div>
              <div class="row q-col-gutter-md">
                <div 
                  v-for="(track, index) in combatTracks" 
                  :key="track.id"
                  class="col-12 col-md-6"
                >
                  <ProgressTrack 
                    :title="track.title"
                    type="combat"
                    v-model:difficulty="track.difficulty"
                    v-model:progress="track.progress"
                    @remove="removeProgressTrack(track.id)"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

    </div>

  </q-page>
</template>

<style lang="sass">
.character-sheet
  max-width: 1200px
  margin: 0 auto
</style> 