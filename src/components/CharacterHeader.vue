<script setup lang="ts">
import CharacterPortrait from './CharacterPortrait.vue'
import { useCharacter } from '../composables/useCharacter'

const { character } = useCharacter()

const emit = defineEmits(['edit'])
</script>

<template>
  <q-card class="header">
    <q-card-section>
      <div class="row items-center q-col-gutter-md">
        <div class="col-auto">
          <CharacterPortrait v-model="character.info.portrait" />
        </div>
        <div class="col">
          <div class="text-h4 text-bold">{{ character.info.name }}</div>
          <div class="text-h5">{{ character.info.species }}</div>
        </div>
        <div class="col-auto">
          <q-btn flat color="primary" label="Character Info" @click="emit('edit')" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template> 