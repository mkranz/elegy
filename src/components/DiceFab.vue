<script setup lang="ts">
import { useDiceRoller } from '../composables/useDiceRoller'

const { show, open, close } = useDiceRoller()

const toggleDiceRoller = () => {
  if (!show.value) {
    open()
  }
  else {
    close()
  }
}
</script>

<template>
  <div class="dice-fab" @click="toggleDiceRoller">
    <img src="../assets/die.svg" alt="Dice roller" />
  </div>
</template>

<style lang="sass" scoped>
.dice-fab
  position: fixed
  bottom: 16px
  right: 16px
  width: 56px
  height: 56px
  cursor: pointer
  z-index: 2000
  transition: transform 0.2s ease

  &:hover
    transform: scale(1.1)

  img
    width: 100%
    height: 100%
</style>