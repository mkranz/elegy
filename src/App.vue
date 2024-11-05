<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Elegy Character Sheet
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <CharacterSheet />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import CharacterSheet from './components/CharacterSheet.vue'
</script>

<style>
body {
  margin: 0;
}
</style> 