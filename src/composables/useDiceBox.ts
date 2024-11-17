import DiceBox from '@3d-dice/dice-box'
import { onMounted, onUnmounted } from 'vue'

let diceBox: any = null

export function useDiceBox(id: string, container: string) {
  const initDiceBox = async () => {
    diceBox = new DiceBox({
      id: id,
      assetPath: '/assets/dice-box/',
      container: container,
      theme: 'default',
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

  return {
    initDiceBox,
    cleanup,
    rollDice
  }
} 