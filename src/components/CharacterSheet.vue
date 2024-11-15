<script setup lang="ts">
import { ref } from 'vue'
import Stats from './Stats.vue'
import Assets from './Assets.vue'
import CharacterHeader from './CharacterHeader.vue'
import CharacterMeters from './CharacterMeters.vue'
import ProgressSection from './ProgressSection.vue'
import Conditions from './Conditions.vue'

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
      <q-tab name="moves" icon="sports_martial_arts" />
      <q-tab name="assets" icon="inventory_2" />
      <q-tab name="combat" icon="sports_kabaddi" />
      <q-tab name="bonds" icon="favorite" />
      <q-tab name="quests" icon="auto_stories" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="q-pa-sm">
      <q-tab-panel name="character">
        <div class="q-gutter-md">
          <CharacterHeader />
          <CharacterMeters />
          <Stats />          
          <Conditions />
          
        </div>
      </q-tab-panel>

      <q-tab-panel name="moves">
        <!-- Moves component will go here -->
        <div class="text-center text-grey-6">
          Moves coming soon
        </div>
      </q-tab-panel>

      <q-tab-panel name="assets">
        <Assets />
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
  
  .q-tab-panel
    padding: 16px 0

  // Hide labels on very small screens
  @media (max-width: 350px)
    .q-tabs .q-tab__label
      display: none
</style>