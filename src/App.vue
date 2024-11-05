<template>
  <!-- <q-layout view="hHh lpR fFf" style="height: 100vh;">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="moves?.open()"
        />
        <q-toolbar-title>
          Elegy Character Sheet
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <Moves ref="moves" />

    <q-page-container>
      <CharacterSheet />
    </q-page-container>

    <DiceRoller />
  </q-layout> -->

  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container style="height: calc(100vh - 50px)" class="shadow-2 rounded-borders">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>
          <q-btn
          flat
          round
          dense
          icon="menu"
          @click="moves?.open()"
        />
          <q-toolbar-title>Elegy Character Sheet</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <Moves ref="moves" />      

      <DiceRoller />

      <q-page-container>
        <CharacterSheet />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CharacterSheet from './components/CharacterSheet.vue'
import DiceRoller from './components/DiceRoller.vue'
import Moves from './components/Moves.vue'

const moves = ref<InstanceType<typeof Moves> | null>(null)
</script>

<style>
body {
  margin: 0;
}
</style> 