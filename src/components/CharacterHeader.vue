<script setup lang="ts">
import CharacterPortrait from './CharacterPortrait.vue'
import { useCharacter } from '../composables/useCharacter'
import { ref } from 'vue'

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
  <div>
    <div class="row items-center">
      <div class="col-auto">
        <CharacterPortrait />
      </div>
      <div class="col">
        <div class="text-h4 text-bold">{{ character.info.name }}</div>
        <div class="text-subtitle2">{{ character.info.species }}</div>
      </div>
      <div class="col-auto">
        <q-btn flat color="primary" icon="edit" @click="openInfoModal" />
      </div>
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
  </div>
</template>