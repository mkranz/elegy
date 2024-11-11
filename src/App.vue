<template>
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
      <PayThePrice />

      <q-page-container>
        <CharacterSheet />
      </q-page-container>
    </q-layout>

    <DiceFab />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CharacterSheet from './components/CharacterSheet.vue'
import DiceRoller from './components/DiceRoller.vue'
import Moves from './components/Moves.vue'
import DiceFab from './components/DiceFab.vue'
import PayThePrice from './components/PayThePrice.vue'

const moves = ref<InstanceType<typeof Moves> | null>(null)
</script>

<style>
body {
  margin: 0;
}
</style> 