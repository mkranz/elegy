<script setup lang="ts">
import { ref, computed } from 'vue'
import { type Impact, type Meter } from '../types/character'
import Counter from './Counter.vue'
import ProgressTrack from './ProgressTrack.vue'
import StatRoll from './StatRoll.vue'
import { useCharacter } from '../composables/useCharacter'
import Assets from './Assets.vue'
import MeterTrack from './MeterTrack.vue'
import Stats from './Stats.vue'
import CharacterPortrait from './CharacterPortrait.vue'

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

const availableXP = computed(() =>
  character.value.experience.total - character.value.experience.spent
)

// Add these methods to handle XP changes safely
const incrementSpent = () => {
  if (character.value.experience.spent < character.value.experience.total) {
    character.value.experience.spent++
  }
}

const decrementSpent = () => {
  if (character.value.experience.spent > 0) {
    character.value.experience.spent--
  }
}

const showInfoModal = ref(false)
const editingInfo = ref({ ...character.value.info })

const saveInfo = () => {
  character.value.info = { ...editingInfo.value }
  showInfoModal.value = false
}

const openInfoModal = () => {
  editingInfo.value = { ...character.value.info }
  showInfoModal.value = true
}

</script>
<template>
  <q-page padding>
    <div class="character-sheet q-gutter-md">
      <!-- Header Section -->
      <q-card class="header">
        <q-card-section>
          <div class="row items-center q-col-gutter-md">
            <div class="col-auto">
              <CharacterPortrait v-model="character.info.portrait" />
            </div>
            <div class="col">
              <div class="character-name">{{ character.info.name }}</div>
              <div class="character-species">{{ character.info.species }}</div>
            </div>
            <div class="col-auto">
              <q-btn flat color="primary" label="Character Info" @click="openInfoModal" />
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

      <Stats />

      <Assets />

      <!-- Progress Tracks -->
      <!-- Elegies -->
      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="row items-center justify-between q-mb-md">
              <div class="text-h6">Elegies</div>
              <q-btn color="primary" icon="add" label="Add Elegy" @click="addProgressTrack('elegies')" />
            </div>
            <div class="row q-col-gutter-md">
              <div v-for="(track, index) in elegiesTracks" :key="track.id" class="col-12 col-md-6">
                <ProgressTrack :title="track.title" type="elegies" v-model:difficulty="track.difficulty"
                  v-model:progress="track.progress" @remove="removeProgressTrack(track.id)" />
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
              <q-btn color="primary" icon="add" label="Add Connection" @click="addProgressTrack('connections')" />
            </div>
            <div class="row q-col-gutter-md">
              <div v-for="(track, index) in connectionTracks" :key="track.id" class="col-12 col-md-6">
                <ProgressTrack :title="track.title" type="connections" v-model:difficulty="track.difficulty"
                  v-model:progress="track.progress" @remove="removeProgressTrack(track.id)" />
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
              <q-btn color="primary" icon="add" label="Add Combat" @click="addProgressTrack('combat')" />
            </div>
            <div class="row q-col-gutter-md">
              <div v-for="(track, index) in combatTracks" :key="track.id" class="col-12 col-md-6">
                <ProgressTrack :title="track.title" type="combat" v-model:difficulty="track.difficulty"
                  v-model:progress="track.progress" @remove="removeProgressTrack(track.id)" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Experience -->
      <q-card>
        <q-card-section>
          <div class="row items-center justify-between q-mb-md">
            <div class="text-h6">Experience</div>

          </div>
          <div class="row items-center q-gutter-md">
            <div>
              <div class="text-caption">Total</div>
              <div class="row items-center q-gutter-sm">
                <q-btn-group flat>
                  <q-btn flat dense icon="remove" @click="character.experience.total--" />
                  <div class="text-h6 text-center">{{ character.experience.total }}</div>
                  <q-btn flat dense icon="add" @click="character.experience.total++" />
                </q-btn-group>
                <div class="text-caption">total</div>
              </div>
            </div>

            <div>
              <div class="text-caption">Spent</div>
              <div class="row items-center q-gutter-sm">
                <q-btn-group flat>
                  <q-btn flat dense icon="remove" @click="decrementSpent" />
                  <div class="text-h6 text-center">{{ character.experience.spent }}</div>
                  <q-btn flat dense icon="add" @click="incrementSpent" />
                </q-btn-group>
                <div class="text-caption">spent</div>
              </div>
            </div>

            <div>
              <div class="text-caption">Available</div>
              <div class="text-h6 text-center">{{ availableXP }}</div>
            </div>
          </div>
        </q-card-section>
      </q-card>

    </div>

    <q-dialog v-model="showInfoModal">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Character Information</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input v-model="editingInfo.name" label="Name" outlined />
            </div>
            <div class="col-12">
              <q-input v-model="editingInfo.species" label="Species" outlined />
            </div>
            <div class="col-12">
              <q-input v-model="editingInfo.progenitor" label="Progenitor" outlined />
            </div>
            <div class="col-12">
              <q-input v-model="editingInfo.characteristics" label="Characteristics" outlined type="textarea" />
            </div>
            <div class="col-12">
              <q-input v-model="editingInfo.background" label="Background" outlined type="textarea" />
            </div>
            <div class="col-12">
              <q-input v-model="editingInfo.embrace" label="Embrace" outlined type="textarea" />
            </div>
            <div class="col-12">
              <q-input v-model="editingInfo.status" label="Status" outlined />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Save" color="primary" @click="saveInfo" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style lang="sass">
.character-sheet
  max-width: 1200px
  margin: 0 auto

.character-name
  font-family: 'Mason Serif OT', Serif  
  font-weight: bold
  color: #8b0000
  font-size: 2.5rem

.character-species
  font-family: 'Mason Serif OT', Serif
  font-size: 1.2rem
  color: #8b0000

</style>