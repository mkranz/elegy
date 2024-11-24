<script setup lang="ts">
import { useDiceRoller } from '../composables/useDiceRoller'
import { useDiceBox } from '../composables/useDiceBox'
import Counter from './Counter.vue' 
import { ref, watch } from 'vue'

const {
  show: showRoller,
  bonus,
  challengeDie1,
  challengeDie2,
  currentTitle,
  currentActionScore,  
  canSelectActionScore,
  totalActionScore,
  rollResult,
  close: closeRoller,
  currentStatName,
  currentOutcome,
  appliedActions,
  executeAction
} = useDiceRoller()

const { rollDice, show: showDiceBox, hide: hideDiceBox, clear } = useDiceBox()

watch(showRoller, (newVal) => {
  if (newVal) {
    clear()
    showDiceBox()
  } else {
    hideDiceBox()
  }
})

const roll = async () => {
  challengeDie1.value = null
  challengeDie2.value = null
  showDiceBox()
  const results = await rollDice('2d10')
  challengeDie1.value = results[0]
  challengeDie2.value = results[1]
}

const close = () => {
  closeRoller()
}

const handleDialogClick = () => {
  if (challengeDie1.value !== null && challengeDie2.value !== null) {
    hideDiceBox('hide')
  }
}

</script>

<template>
  <q-dialog
    v-model="showRoller"
    position="right"
  >
    <q-card style="min-width: 300px" @click="handleDialogClick">
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
        <div v-else>
          <div class="text-subtitle2">{{ currentStatName }} Score</div>
          <div class="text-subtitle1">{{ totalActionScore }}</div>
        </div>
        
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

        <template v-if="rollResult">
          <div class="text-h5 text-center q-mt-lg" :class="{
            'text-positive': rollResult === 'Strong Hit',
            'text-warning': rollResult === 'Weak Hit',
            'text-negative': rollResult === 'Miss'
          }">
            {{ rollResult }}
          </div>
          
          <div v-if="currentOutcome" class="text-body1 q-mt-md">
            {{ currentOutcome.text }}
            
            <div v-if="currentOutcome.actions?.length" class="q-gutter-sm q-mt-md">
              <div 
                v-for="action in currentOutcome.actions"
                :key="action.label"
                class="row items-center q-gutter-x-sm"
              >
                <q-btn
                  :label="action.label"
                  color="secondary"
                  size="sm"
                  @click="() => executeAction(action)"
                />
                <span v-if="appliedActions.has(action.label)" class="text-positive text-caption">
                  APPLIED
                </span>
              </div>
            </div>
          </div>
        </template>
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
  </q-dialog>
  
</template>
<style>
.hide {
  visibility: hidden;
}

.dice-box-canvas {
  background: transparent;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
</style>