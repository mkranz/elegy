import DiceBox from '@3d-dice/dice-box'
import { onMounted, onUnmounted } from 'vue'

let diceBox: any = null

export function useDiceBox() {
  const initDiceBox = async () => {
    if (diceBox) return
    diceBox = new DiceBox({
      assetPath: '/assets/dice-box/',
      theme: 'theme-smooth',
      themeColor: '#8b0000',
      scale: 6,
      gravity: 1,
      mass: 1,
      friction: 0.8,
      linearDamping: 0.4,
      angularDamping: 0.4,
      spinForce: 4,
      throwForce: 5,
      startingHeight: 8,
      enableShadows: true,
      lightIntensity: 1,
      shadowTransparency: 0.8,
      settleTimeout: 3000
    })

    await diceBox.init()
  }

  const rollDice = async (notation: string): Promise<number[]> => {
    if (!diceBox) return []
    
    const results = await diceBox.roll(notation)
    return results.map((die: any) => die.value)
  }

  const cleanup = () => {
    if (diceBox) {
      diceBox = null
    }
  }

  const hide = (className?: string) => {
    if (diceBox) {
      diceBox.hide(className)
    }
  }

  const show = () => {
    if (diceBox) {
      diceBox.show()
    }
  } 

  const clear = () => {
    if (diceBox) {
      diceBox.clear()
    }
  }

  onMounted(() => {
    initDiceBox()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    rollDice,
    hide,
    show,
    clear
  }
} 