<script setup lang="ts">
import { ref } from 'vue'
import Assets from '../components/Assets.vue'
import ProgressSection from '../components/ProgressSection.vue'
import Moves from '../components/Moves.vue'
import CharacterTab from '../components/CharacterTab.vue'
const tab = ref('character')
</script>

<template>
  <q-page class="character-sheet">
    <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify"
      narrow-indicator>
      <q-tab name="character" icon="person" />
      <q-tab name="quests" icon="auto_stories" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="q-pa-sm">
      <q-tab-panel name="character">
        <div class="row q-col-gutter-lg">
          <div class="col-4">
            <CharacterTab />
          </div>          
          <div class="col-4">
            <Assets />
          </div>
          <div class="col-4">
            <Moves />
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="quests">
        <div class="row q-col-gutter-lg">
          <div class="col-4">
            <ProgressSection type="combat" />
          </div>
          <div class="col-4">
            <ProgressSection type="connections" />
          </div>
          <div class="col-4">
            <ProgressSection type="elegies" />
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style lang="sass">
.character-sheet
  max-width: 1200px
  margin: 0 auto

  .q-tab-panels
    background: transparent
  
  .q-tab-panel
    padding: 16px 0

</style>