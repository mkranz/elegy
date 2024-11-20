declare module '@3d-dice/dice-box' {
    export default class DiceBox {
      constructor(config: any)
      init(): Promise<void>
      roll(notation: string): Promise<Array<{value: number}>>
      hide(className?: string): void
      show(): void
      clear(): void
    }
  }