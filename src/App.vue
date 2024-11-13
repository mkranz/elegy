<template>
  <div>
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
          <q-btn
            flat
            round
            dense
            :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
            @click="toggleDarkMode"
          />
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
import { ref, onMounted, watch } from 'vue'
import { useQuasar } from 'quasar'
import CharacterSheet from './components/CharacterSheet.vue'
import DiceRoller from './components/DiceRoller.vue'
import Moves from './components/Moves.vue'
import DiceFab from './components/DiceFab.vue'
import PayThePrice from './components/PayThePrice.vue'

const moves = ref<InstanceType<typeof Moves> | null>(null)
const $q = useQuasar()

onMounted(() => {
  // Set dark mode as default
  if (localStorage.getItem('darkMode') !== 'false') {
    $q.dark.set(true)
  }
})

const toggleDarkMode = () => {
  $q.dark.toggle()
  localStorage.setItem('darkMode', $q.dark.isActive.toString())
}
</script>

<style>
body {
  margin: 0;
}
</style> 