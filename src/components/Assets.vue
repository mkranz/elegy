<script setup lang="ts">
import { ref } from 'vue'
import { ASSETS_LIST, type Asset } from '../data/assets'
import { useCharacter } from '../composables/useCharacter'

const { character, addAsset, removeAsset, updateAsset } = useCharacter()

// Asset management
const selectedAsset = ref<Asset>()
const assetsOptions = ref(ASSETS_LIST)

// Organize assets by type
const assetsByType = {
  Power: ASSETS_LIST.filter(a => a.group === 'Power'),
  Nature: ASSETS_LIST.filter(a => a.group === 'Nature'),
  Ritual: ASSETS_LIST.filter(a => a.group === 'Ritual'),
  General: ASSETS_LIST.filter(a => a.group === 'General')
}

const handleAddAsset = () => {
  if (!selectedAsset.value) return
  addAsset(selectedAsset.value)
}
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Assets</div>
      <div class="row q-col-gutter-md items-center">
        <div class="col-12 col-sm-8">
          <q-select
            v-model="selectedAsset"
            :options="assetsOptions"
            option-label="name"
            option-group="group"
            label="Add Asset"
            outlined
            emit-value
            map-options
          >
            <!-- Custom option slot to show icon and description -->
            <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
              <q-item v-bind="itemProps" @click="toggleOption(opt)">
                <q-item-section avatar>
                  <q-icon :name="opt.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ opt.name }}</q-item-label>
                  <q-item-label caption>{{ opt.description }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="check" v-if="selected" />
                </q-item-section>
              </q-item>
            </template>

            <!-- Selected item display -->
            <template v-slot:selected>
              <template v-if="selectedAsset">
                <q-icon :name="selectedAsset.icon" class="q-mr-sm" />
                <div>
                  <div class="text-body2">{{ selectedAsset.name }}</div>
                  <div class="text-caption">{{ selectedAsset.description }}</div>
                </div>
              </template>
            </template>
          </q-select>
        </div>
        <div class="col-12 col-sm-4">
          <q-btn
            color="primary"
            :disable="!selectedAsset"
            @click="handleAddAsset"
            label="Add Asset"
            class="full-width"
          />
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row q-col-gutter-md">
        <div 
          v-for="(asset, index) in character.assets"
          :key="index"
          class="col-12 col-sm-6 col-md-4"
        >
          <q-card>
            <q-card-section>
              <!-- Asset header with icon and name -->
              <div class="row items-center q-mb-sm">
                <q-icon :name="asset.icon" size="2em" class="q-mr-sm" />
                <div class="column">
                  <div class="text-h6">{{ asset.name }}</div>
                  <div class="text-caption">{{ asset.description }}</div>
                </div>
              </div>             

              <!-- Group badge -->
              <q-badge 
                :color="asset.group === 'Power' ? 'purple' : 
                       asset.group === 'Nature' ? 'green' : 
                       asset.group === 'Ritual' ? 'red' : 'blue'"
                class="q-mb-sm"
              >
                {{ asset.group }}
              </q-badge>

              <!-- Abilities -->
              <div class="q-gutter-y-sm">
                <div 
                  v-for="(ability, level) in asset.abilities"
                  :key="level"
                  class="row items-center"
                >
                  <div class="col-auto">
                    <q-checkbox
                      v-model="asset.unlockedLevels[level]"
                      :disable="level > 1 && !asset.unlockedLevels[1]"
                      @update:model-value="updateAsset(asset, level)"
                    />
                  </div>
                  <div 
                    class="col" 
                    :class="{ 'ability-border': level.toString() !== '3' }"
                  >
                    {{ ability }}
                  </div>
                </div>
              </div>
            </q-card-section>
            
            <q-card-actions align="right">
              <q-btn
                flat
                color="negative"
                @click="removeAsset(index)"
                icon="delete"
                label="Remove"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.ability-border {
  border-bottom: 1px solid rgba(0,0,0,0.12);
  padding-bottom: 8px;
}
</style> 