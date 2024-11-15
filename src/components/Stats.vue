<script setup lang="ts">
import { type Stat } from '../types/character'
import { useCharacter } from '../composables/useCharacter'
import { useDiceRoller } from '../composables/useDiceRoller'
import { ref, computed } from 'vue'

const { character } = useCharacter()
const { open } = useDiceRoller()
const isEditing = ref(false)
const showXPDialog = ref(false)

const availableXP = computed(() =>
  character.value.experience.total - character.value.experience.spent
)

const incrementSpent = () => {
  if (character.value.experience.spent < character.value.experience.total) {
    character.value.experience.spent++
  }
}

const decrementSpent = () => {
  if (character.value.experience.spent > 0) {
    character.value.experience.spent--
  }
}

const handleStatRoll = (stat: string) => {
  if (!isEditing.value) {
    open({
      actionScore: character.value.stats[stat as Stat],
      title: `${stat.charAt(0).toUpperCase() + stat.slice(1)} Roll`
    })
  }
}
</script>

<template>
  <div class="row items-center justify-between q-mb-md">
    <div class="text-h6">Stats</div>
    <q-btn flat round :icon="isEditing ? 'done' : 'edit'" @click="isEditing = !isEditing" />
  </div>
  <div class="row q-col-gutter-sm q-px-xl">
    <div v-for="stat in ['force', 'dexterity', 'intellect', 'glamour', 'heart']" :key="stat" class="col-4 col-sm-4">
      <div class="stat-box cursor-pointer" @click="handleStatRoll(stat)">
        <div class="stat-name">{{ stat }}</div>
        <div class="stat-value-container">
          <q-btn v-if="isEditing" flat dense size="sm" :disable="character.stats[stat as Stat] <= 5"
            @click.stop="character.stats[stat as Stat]--" icon="remove" />
          <div class="stat-value">{{ character.stats[stat as Stat] }}</div>
          <q-btn v-if="isEditing" flat dense size="sm" :disable="character.stats[stat as Stat] >= 10"
            @click.stop="character.stats[stat as Stat]++" icon="add" />
        </div>
      </div>
    </div>

    <div class="col-4 col-sm-4">
      <div class="stat-box cursor-pointer" @click="showXPDialog = true">
        <div class="stat-name">Experience</div>
        <div class="stat-value-container">
          <div class="stat-value">{{ availableXP }}</div>
        </div>
      </div>
    </div>
  </div>

  <q-dialog v-model="showXPDialog">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Experience</div>
      </q-card-section>

      <q-card-section>
        <div class="row items-center q-gutter-md">
          <div>
            <div class="text-caption">Total</div>
            <div class="row items-center q-gutter-sm">
              <q-btn-group flat>
                <q-btn flat dense icon="remove" @click="character.experience.total--" />
                <div class="text-h6 text-center">{{ character.experience.total }}</div>
                <q-btn flat dense icon="add" @click="character.experience.total++" />
              </q-btn-group>
            </div>
          </div>

          <div>
            <div class="text-caption">Spent</div>
            <div class="row items-center q-gutter-sm">
              <q-btn-group flat>
                <q-btn flat dense icon="remove" @click="decrementSpent" />
                <div class="text-h6 text-center">{{ character.experience.spent }}</div>
                <q-btn flat dense icon="add" @click="incrementSpent" />
              </q-btn-group>
            </div>
          </div>

          <div>
            <div class="text-caption">Available</div>
            <div class="text-h6 text-center">{{ availableXP }}</div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.stat-box {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem;
  text-align: center;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.2s;
}

.stat-box:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.stat-name {
  font-family: 'Mason Serif OT', Serif;
  text-transform: capitalize;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.stat-value-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-grow: 1;
}

.stat-value {
  font-family: 'Mason Serif OT', Serif;
  font-size: 2rem;
  font-weight: bold;
  color: #8b0000;
}

@media (max-width: 599px) {
  .stat-name {
    font-size: 0.8rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }
}
</style>