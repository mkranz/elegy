<script setup lang="ts">
import { ref } from 'vue'
import { usePortrait } from '../composables/usePortrait'

const { portrait, setPortrait } = usePortrait()

const showUploadModal = ref(false)
const previewImage = ref('')
const dragOver = ref(false)

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    handleFile(file)
  }
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  dragOver.value = false
  
  if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
    const file = event.dataTransfer.files[0]
    handleFile(file)
  }
}

const handleFile = (file: File) => {
  if (!file.type.startsWith('image/')) {
    alert('Please upload an image file')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    previewImage.value = e.target?.result as string
  }
  reader.readAsDataURL(file)
}

const applyPortrait = () => {
  setPortrait(previewImage.value)
  showUploadModal.value = false
}

const cancelUpload = () => {
  previewImage.value = ''
  showUploadModal.value = false
}
</script>

<template>
  <div class="character-portrait">
    <div class="portrait-frame" @click="showUploadModal = true">
      <img v-if="portrait" :src="portrait" alt="Character Portrait" />
      <div v-else class="no-portrait">
        <q-icon name="person" size="3em" />
      </div>
    </div>

    <q-dialog v-model="showUploadModal">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Update Portrait</div>
        </q-card-section>

        <q-card-section>
          <div
            class="upload-area"
            :class="{ 'drag-over': dragOver }"
            @dragover.prevent="dragOver = true"
            @dragleave.prevent="dragOver = false"
            @drop="handleDrop"
          >
            <div v-if="previewImage" class="preview-container">
              <img :src="previewImage" alt="Preview" class="preview-image" />
            </div>
            <div v-else class="upload-prompt">
              <q-icon name="upload" size="2em" />
              <div>Drag and drop an image here or</div>
              <q-btn flat color="primary" label="Choose File">
                <input
                  type="file"
                  class="file-input"
                  accept="image/*"
                  @change="handleFileSelect"
                />
              </q-btn>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" @click="cancelUpload" />
          <q-btn
            flat
            label="Apply"
            color="primary"
            @click="applyPortrait"
            :disabled="!previewImage"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="sass" scoped>
.character-portrait
  .portrait-frame
    width: 100px
    height: 100px
    border-radius: 50%
    border: 3px solid #666
    overflow: hidden
    cursor: pointer
    transition: all 0.2s ease
    
    &:hover
      border-color: #000
      transform: scale(1.05)

    img
      width: 100%
      height: 100%
      object-fit: cover

    .no-portrait
      width: 100%
      height: 100%
      display: flex
      align-items: center
      justify-content: center
      background: #eee

.upload-area
  border: 2px dashed #ccc
  border-radius: 8px
  padding: 20px
  text-align: center
  min-height: 200px
  display: flex
  align-items: center
  justify-content: center
  
  &.drag-over
    border-color: #000
    background: rgba(0,0,0,0.05)

.preview-container
  width: 100%
  height: 200px
  
  .preview-image
    max-width: 100%
    max-height: 100%
    object-fit: contain

.upload-prompt
  display: flex
  flex-direction: column
  align-items: center
  gap: 10px

.file-input
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  opacity: 0
  cursor: pointer
</style> 