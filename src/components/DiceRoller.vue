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
  executeAction: originalExecuteAction
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

const promptValue = ref('')
const showPrompt = ref(false)
const currentAction = ref<any>(null)

const handleActionClick = async (action: any) => {
  if (action.prompt) {
    currentAction.value = action
    promptValue.value = ''
    showPrompt.value = true
    return
  }

  originalExecuteAction(action)
}

const handlePromptConfirm = () => {
  if (!currentAction.value) return
  
  originalExecuteAction(currentAction.value, promptValue.value)
  showPrompt.value = false
  currentAction.value = null
}

const handlePromptCancel = () => {
  showPrompt.value = false
  currentAction.value = null
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
          <div class="text-subtitle2">Action Score:</div>
          <Counter
            v-model="currentActionScore"
            :min="0"
            :max="10"
          />
        </div>
        <div v-else>
          <span class="text-subtitle2">{{ currentStatName }} Score:</span>
          <span class="text-h5 q-ml-md">{{ currentActionScore }}</span>
        </div>
        
        <div class="row items-center q-mt-md">
          <div class="col-12">
            <div class="text-subtitle2">Bonus</div>
            <Counter
              v-model="bonus"
              :min="0"
              :max="10"
            />
          </div>
          <div class="col-12 q-mt-md">
            <span class="text-subtitle1">Total:</span>
            <span class="text-h5 q-ml-md">{{ totalActionScore }}</span>
          </div>
        </div>
        
        
        <div class="row q-col-gutter-md q-mt-md">
          <div class="col-12">
            <div class="text-subtitle1">Challenge</div>
          </div>
          <div class="col-6">
            <div class="text-subtitle2">Die 1</div>
            <div class="text-h4">{{ challengeDie1 ?? '-' }}</div>
          </div>
          <div class="col-6">
            <div class="text-subtitle2">Die 2</div>
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
                  @click="() => handleActionClick(action)"
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
  
  <q-dialog v-model="showPrompt">
    <q-card style="min-width: 300px">
      <q-card-section>
        <div class="text-h6">{{ currentAction?.promptLabel }}</div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="promptValue"
          :type="currentAction?.promptType"
          outlined
          dense
          @keyup.enter="handlePromptConfirm"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" @click="handlePromptCancel" />
        <q-btn flat label="Confirm" color="primary" @click="handlePromptConfirm" />
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