<template>
<q-drawer
v-model="isOpen"
side="left"
bordered
:width="400"
  >
  Coming Soon
</q-drawer>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false)
defineExpose({
  open: () => isOpen.value = true,
  close: () => isOpen.value = false
})
</script>
