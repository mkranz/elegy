<script setup lang="ts">
import { useDiceRoller } from '../composables/useDiceRoller'
import Counter from './Counter.vue'

const {
  show,
  bonus,
  challengeDie1,
  challengeDie2,
  currentTitle,
  currentActionScore,  
  canSelectActionScore,
  totalActionScore,
  rollResult,
  roll,
  close,
} = useDiceRoller()
</script>

<template>
  <q-drawer
    side="right"
    overlay
    v-model="show"
    bordered
    :width="300"
    :breakpoint="500"
  >
    <q-card class="full-height">
      <q-card-section>
        <div class="text-h6">{{ currentTitle }}</div>
      </q-card-section>

      <q-card-section>
        <div v-if="canSelectActionScore">
          <div class="text-subtitle2">Action Score</div>
            <Counter
              v-model="currentActionScore"
              :min="0"
              :max="10"
            />
        </div>
        <div v-else class="text-subtitle1">Action Score: {{ totalActionScore }}</div>
        
        <div class="row items-center q-mt-sm">
          <div class="col">
            <div class="text-subtitle2">Bonus</div>
            <Counter
              v-model="bonus"
              :min="0"
              :max="10"
            />
          </div>
          <div class="col-auto q-ml-md">
            <div class="text-subtitle1">Total: {{ totalActionScore }}</div>
          </div>
        </div>
        
        <div class="row q-col-gutter-md q-mt-md">
          <div class="col-6">
            <div class="text-subtitle2">Challenge Die 1</div>
            <div class="text-h4">{{ challengeDie1 ?? '-' }}</div>
          </div>
          <div class="col-6">
            <div class="text-subtitle2">Challenge Die 2</div>
            <div class="text-h4">{{ challengeDie2 ?? '-' }}</div>
          </div>
        </div>

        <div v-if="rollResult" class="text-h5 text-center q-mt-lg" :class="{
          'text-positive': rollResult === 'Strong Hit',
          'text-warning': rollResult === 'Weak Hit',
          'text-negative': rollResult === 'Miss'
        }">
          {{ rollResult }}
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          color="primary"
          label="Roll"
          @click="roll"
        />
        <q-btn
          flat
          label="Close"
          @click="close"
        />
      </q-card-actions>
    </q-card>
  </q-drawer>
</template> 