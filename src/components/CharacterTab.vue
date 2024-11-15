<template>
    <div class="q-gutter-sm">
          <CharacterHeader />
          <q-separator />
          <CharacterMeters />
          <q-separator />
          <Stats />          
          <q-separator />
        <Conditions />
    </div>    
</template>

<script setup lang="ts">
import CharacterHeader from './CharacterHeader.vue'
import CharacterMeters from './CharacterMeters.vue'
import Stats from './Stats.vue'
import Conditions from './Conditions.vue'
</script>
    
