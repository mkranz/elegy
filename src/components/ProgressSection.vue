<script setup lang="ts">
import { computed } from 'vue'
import { useCharacter } from '../composables/useCharacter'
import ProgressTrack from './ProgressTrack.vue'

const props = defineProps<{
  type: 'elegies' | 'connections' | 'combat'
}>()

const { character, addProgressTrack, removeProgressTrack } = useCharacter()

const tracks = computed(() =>
  character.value.progressTracks.filter(t => t.type === props.type)
)

const titles = {
  elegies: 'Elegies',
  connections: 'Connections',
  combat: 'Combat'
}
</script>

<template>
  <div class="row items-center justify-between q-mb-md">
    <div class="text-h6">{{ titles[type] }}</div>
    <q-btn color="primary" icon="add" :label="`Add ${titles[type]}`" @click="addProgressTrack(type)" />
  </div>
  <div class="row q-col-gutter-md">
    <div v-for="track in tracks" :key="track.id" class="col-12">
      <ProgressTrack :title="track.title" :type="type" v-model:difficulty="track.difficulty"
        v-model:progress="track.progress" @remove="removeProgressTrack(track.id)" />
    </div>
  </div>
</template>