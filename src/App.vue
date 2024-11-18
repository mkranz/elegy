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
            @click="menu?.open()"
          />
          <q-toolbar-title class="text-h5 text-bold">
            <div>{{ character?.info?.name }}</div>

          </q-toolbar-title>
          <q-btn
            flat
            round
            dense
            :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
            @click="toggleDarkMode"
          />
        </q-toolbar>
      </q-header>

      <Menu ref="menu" />
      <DiceRoller />
      <PayThePrice />

      <q-page-container>
        <MobileCharacterSheet v-if="$q.screen.lt.md" />
        <TabletCharacterSheet v-else-if="$q.screen.md" />
        <DesktopCharacterSheet v-else />
      </q-page-container>
    </q-layout>

    <DiceFab />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import MobileCharacterSheet from './layouts/MobileCharacterSheet.vue'
import DesktopCharacterSheet from './layouts/DesktopCharacterSheet.vue'
import TabletCharacterSheet from './layouts/TabletCharacterSheet.vue'
import DiceRoller from './components/DiceRoller.vue'
import Menu from './components/Menu.vue'
import DiceFab from './components/DiceFab.vue'
import PayThePrice from './components/PayThePrice.vue'
import { useCharacter } from './composables/useCharacter'

const menu = ref<InstanceType<typeof Menu> | null>(null)
const $q = useQuasar()
const { character } = useCharacter()

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

.q-layout-container > div {
    transform: none !important;
}

</style> 