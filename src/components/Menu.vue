<template>
  <q-drawer
    v-model="isOpen"
    side="left"
    bordered
    :width="400"
  >
    <div class="q-pa-md">
      <div class="text-h6 q-mb-md">Character Management</div>
      
      <q-btn
        color="primary"
        icon="download"
        label="Export Character"
        class="full-width q-mb-sm"
        @click="exportCharacter"
      />
      
      <q-btn
        color="secondary"
        icon="upload"
        label="Import Character"
        class="full-width"
        @click="triggerFileInput"
      />
      
      <!-- Hidden file input for import -->
      <input
        type="file"
        ref="fileInput"
        accept=".json"
        style="display: none"
        @change="importCharacter"
      />
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCharacter } from '../composables/useCharacter';
import { usePortrait } from '../composables/usePortrait';

const isOpen = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);
const { character, importCharacterData } = useCharacter();
const { portrait, setPortrait } = usePortrait();

defineExpose({
  open: () => isOpen.value = true,
  close: () => isOpen.value = false,
  toggle: () => isOpen.value = !isOpen.value
});

const exportCharacter = () => {
  const exportData = {
    character: character.value,
    portrait: portrait.value
  };
  
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `character-${character.value.info.name || 'export'}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

const importCharacter = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  try {
    const text = await file.text();
    const importData = JSON.parse(text);
    
    if (importData.character && importData.portrait !== undefined) {
      importCharacterData(importData.character);
      setPortrait(importData.portrait);
    } else {
      throw new Error('Invalid import file format');
    }
  } catch (error) {
    console.error('Import failed:', error);
    // You might want to add proper error handling/user notification here
  }
  
  // Reset the file input
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};
</script>
