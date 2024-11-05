<script setup lang="ts">
import { ref, computed } from 'vue'
import Counter from './Counter.vue'

const props = defineProps<{
  actionScore?: number,
  title?: string
}>()

const show = defineModel<boolean>('show', { required: true })
const bonus = ref(0)

const challengeDie1 = ref<number | null>(null)
const challengeDie2 = ref<number | null>(null)

const totalActionScore = computed(() => 
  (props.actionScore || 0) + bonus.value
)

const rollResult = computed(() => {
  if (!props.actionScore || challengeDie1.value === null || challengeDie2.value === null) {
    return null
  }

  if (totalActionScore.value > challengeDie1.value && totalActionScore.value > challengeDie2.value) {
    return 'Strong Hit'
  } else if (totalActionScore.value > challengeDie1.value || totalActionScore.value > challengeDie2.value) {
    return 'Weak Hit'
  } else {
    return 'Miss'
  }
})

const roll = () => {
  challengeDie1.value = Math.floor(Math.random() * 10) + 1
  challengeDie2.value = Math.floor(Math.random() * 10) + 1
}

const close = () => {
  show.value = false
  bonus.value = 0 // Reset bonus when closing
}
</script>

<template>
  <q-drawer
    side="right"
    v-model="show"
    bordered
    :width="300"
    :breakpoint="500"
  >
    <q-card class="full-height">
      <q-card-section>
        <div class="text-h6">{{ title || 'Dice Roller' }}</div>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle1">Action Score: {{ actionScore }}</div>
        
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
          :disable="!actionScore"
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