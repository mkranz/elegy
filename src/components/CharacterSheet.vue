<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCharacter } from '../composables/useCharacter'
import Stats from './Stats.vue'
import Assets from './Assets.vue'
import CharacterHeader from './CharacterHeader.vue'
import CharacterMeters from './CharacterMeters.vue'
import ProgressSection from './ProgressSection.vue'

// Use the character composable
const { character } = useCharacter()

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
      <CharacterHeader @edit="openInfoModal" />
      <CharacterMeters />
      <Stats />
      <Assets />
      <ProgressSection type="elegies" />
      <ProgressSection type="connections" />
      <ProgressSection type="combat" />
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
</style>