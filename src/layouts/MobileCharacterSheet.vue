<script setup lang="ts">
import { ref } from 'vue'

import CharacterTab from '../components/CharacterTab.vue'
import Moves from '../components/Moves.vue'
import Assets from '../components/Assets.vue'
import ProgressSection from '../components/ProgressSection.vue'

const tab = ref('character')
</script>

<template>
  <q-page class="character-sheet">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="character" icon="person" />
      <q-tab name="assets" icon="inventory_2" />
      <q-tab name="moves" icon="sports_martial_arts" />      
      <q-tab name="combat" icon="sports_kabaddi" />
      <q-tab name="bonds" icon="favorite" />
      <q-tab name="quests" icon="auto_stories" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="q-pa-sm">
      <q-tab-panel name="character">
        <CharacterTab />
      </q-tab-panel>

      <q-tab-panel name="assets">
        <Assets />
      </q-tab-panel>

      <q-tab-panel name="moves">
        <Moves />
      </q-tab-panel>

      <q-tab-panel name="combat">
        <ProgressSection type="combat" />
      </q-tab-panel>

      <q-tab-panel name="bonds">
        <ProgressSection type="connections" />
      </q-tab-panel>

      <q-tab-panel name="quests">
        <ProgressSection type="elegies" />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style lang="sass">
.character-sheet
  .q-tab-panels
    background: transparent
  

</style>