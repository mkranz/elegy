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

const sortedTracks = computed(() => {
  return [...tracks.value].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });
});

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
    <div v-for="track in sortedTracks" :key="track.id" class="col-12">
      <ProgressTrack :title="track.title" :type="type" :progress-track="track" @remove="removeProgressTrack(track.id)" />
    </div>
  </div>
</template>