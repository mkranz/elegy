<template>
  <q-layout view="hHh lpR fFf">
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
  </q-layout>
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