<template>
  <q-dialog
    v-model="isPayingPrice"
    persistent
  >
    <q-card style="min-width: 350px">
      <q-card-section class="row items-center">
        <div class="text-h6">Pay The Price</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h5 q-mb-md">Roll: {{ currentRoll }}</div>
        <div class="text-body1">{{ currentResult }}</div>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn 
          flat 
          label="Reroll" 
          @click="roll" 
        />
        <q-btn 
          flat 
          label="Close" 
          v-close-popup 
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { usePayThePrice } from '@/composables/usePayThePrice'

const { isPayingPrice } = usePayThePrice()

const currentRoll = ref<number>(0)

const priceTable = {
  '1-2': 'A trusted individual or community acts against you',
  '3-4': 'An individual or community you care about is exposed to danger',
  '5-7': 'You encounter signs of a looming threat',
  '8-10': 'You create an opportunity for an enemy',
  '11-14': 'You face a tough choice',
  '15-18': 'You face the consequences of an earlier choice',
  '19-22': 'A surprising development complicates your quest',
  '23-26': 'You are separated from something or someone',
  '27-32': 'Your action causes collateral damage or has an unintended effect',
  '33-38': 'Something of value is lost or destroyed',
  '39-44': 'The ambient introduces a new hazard',
  '45-50': 'A new enemy is revealed',
  '51-56': 'A friend or ally is in harm\'s way (or you are, if alone)',
  '57-62': 'Your supernatural abilities malfunction',
  '63-68': 'An asset is compromised',
  '69-74': 'You waste blood',
  '75-81': 'You are harmed',
  '82-88': 'You are stressed',
  '89-95': 'You are delayed or put at a disadvantage',
  '96-100': 'Roll twice'
} as const

const currentResult = computed(() => {
  if (!currentRoll.value) return null
  
  // Find the matching range
  const entry = Object.entries(priceTable).find(([range]) => {
    const [min, max] = range.split('-').map(Number)
    return currentRoll.value >= min && currentRoll.value <= max
  })

  if (!entry) return null

  if (currentRoll.value >= 96) {
    return 'Roll twice on the table'
  }

  return entry[1]
})

const roll = () => {
  currentRoll.value = Math.floor(Math.random() * 100) + 1
}

// Watch for dialog opening and roll automatically
watch(isPayingPrice, (newValue) => {
  if (newValue) {
    roll()
  }
})
</script> 