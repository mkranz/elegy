<script setup lang="ts">
import { ref } from 'vue'
import { ASSETS_LIST, type Asset } from '../data/assets'
import { useCharacter } from '../composables/useCharacter'
const { character, addAsset, removeAsset, updateAsset } = useCharacter()

const showAssetSelectorDialog = ref(false)
const tab = ref('power')

// Organize assets by type
const assetsByType = {
  Power: ASSETS_LIST.filter(a => a.group === 'Power'),
  Nature: ASSETS_LIST.filter(a => a.group === 'Nature'),
  Ritual: ASSETS_LIST.filter(a => a.group === 'Ritual'),
  General: ASSETS_LIST.filter(a => a.group === 'General')
}

const assetColor = (group: string) => {
  return group === 'Power' ? 'purple' : group === 'Nature' ? 'green' : group === 'Ritual' ? 'red' : 'blue'
}

const showAssetSelector = () => {
  showAssetSelectorDialog.value = true
}
const handleAddAsset = (asset: Asset) => {
  addAsset(asset)
  showAssetSelectorDialog.value = false
}

</script>

<template>
  <q-card>
    <q-card-section>
      <div class="row items-center justify-between q-mb-md">
      <div class="text-h6">Assets</div>
          <q-btn
            color="primary"
            @click="showAssetSelector"
            label="Add Asset"
            icon="add"
          />
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
              <div class="row items-center justify-between q-mb-sm">
                <div class="row items-center">
                  <q-icon :name="asset.icon" size="2em" class="q-mr-sm" />
                  <div class="text-h6">{{ asset.name }}</div>
                </div>
                <!-- Group badge -->
                <q-badge 
                  :color="assetColor(asset.group)"
                >
                  {{ asset.group }}
                </q-badge>
              </div>
              
              <!-- Description on its own line -->
              <div class="text-caption q-mb-md">{{ asset.description }}</div>

              <!-- Abilities -->
              <div>
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

  <q-dialog v-model="showAssetSelectorDialog" full-width full-height>
    <q-card class="q-dialog-card">
      <q-card-section>
        <div class="text-h6">Select an Asset</div>
      </q-card-section>

      <q-card-section class="q-pa-none">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="power" label="Power" />
          <q-tab name="nature" label="Nature" />
          <q-tab name="ritual" label="Ritual" />
          <q-tab name="general" label="General" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel
            v-for="(assets, group) in assetsByType"
            :key="group"
            :name="group.toLowerCase()"
          >
            <div class="row q-col-gutter-md">
              <div
                v-for="asset in assets"
                :key="asset.name"
                class="col-12 col-lg-3 col-md-4 col-sm-6"
              >
                <q-card
                  class="cursor-pointer"
                  @click="handleAddAsset(asset)"
                  v-ripple
                >
                  <q-card-section>
                    <div class="row items-center">
                      <q-icon :name="asset.icon" size="2em" class="q-mr-sm" />
                      <div class="column">
                        <div class="text-subtitle1">{{ asset.name }}</div>
                        <div class="text-caption">{{ asset.description }}</div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<style scoped>
.ability-border {
  border-bottom: 1px solid rgba(0,0,0,0.12);
  padding-bottom: 8px;
}
.q-dialog-card {
  width: 700px;
  max-width: 80vw;
}
</style> 