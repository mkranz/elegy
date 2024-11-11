import { ref } from 'vue'

export function usePayThePrice() {
  const isPayingPrice = ref(false)

  const payThePrice = () => {
    isPayingPrice.value = true
    // TODO: Implement the actual roll and result display
    console.log('Paying the price...')
  }

  return {
    isPayingPrice,
    payThePrice
  }
} 