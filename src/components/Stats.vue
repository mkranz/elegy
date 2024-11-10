<script setup lang="ts">
import { type Stat } from '../types/character'
import { useCharacter } from '../composables/useCharacter'
import { useDiceRoller } from '../composables/useDiceRoller'
import { ref } from 'vue'

const { character } = useCharacter()
const { open } = useDiceRoller()
const isEditing = ref(false)

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
  <q-card>
    <q-card-section>
      <div class="row items-center justify-between q-mb-md">
        <div class="text-h6">Stats</div>
        <q-btn
          flat
          round
          :icon="isEditing ? 'done' : 'edit'"
          @click="isEditing = !isEditing"
        />
      </div>
      <div class="row q-col-gutter-md ">
        <div 
          v-for="stat in ['force', 'dexterity', 'intellect', 'glamour', 'heart']" 
          :key="stat"
          class="col-12 col-sm-2"
        >
          <div 
            class="stat-box cursor-pointer"
            @click="handleStatRoll(stat)"
          >
            <div class="stat-name">{{ stat }}</div>
            <div class="stat-value">{{ character.stats[stat as Stat] }}</div>
            <div v-if="isEditing" class="stat-controls">
              <q-btn
                flat
                dense
                size="sm"
                :disable="character.stats[stat as Stat] <= 5"
                @click.stop="character.stats[stat as Stat]--"
                icon="remove"
              />
              <q-btn
                flat
                dense
                size="sm"
                :disable="character.stats[stat as Stat] >= 10"
                @click.stop="character.stats[stat as Stat]++"
                icon="add"
              />
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.stat-box {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background-color 0.2s;
}

.stat-box:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.stat-name {
  text-transform: capitalize;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
}

.stat-controls {
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
</style> 