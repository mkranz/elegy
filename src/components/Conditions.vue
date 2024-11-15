<script setup lang="ts">
import { type Impact } from '../types/character'
import { useCharacter } from '../composables/useCharacter'

const { character } = useCharacter()

const conditionsList = [
    'wounded',
    'permanently harmed',
    'starving',
    'sinner',
    'shaken',
    'traumatized'
]
</script>

<template>
    <div class="text-h6">Conditions</div>
    <div class="row q-col-gutter-sm">
        <div v-for="condition in conditionsList" :key="condition" class="col-4">
            <q-checkbox v-model="character.impacts[condition as Impact]" :label="condition" />
        </div>
    </div>
</template>