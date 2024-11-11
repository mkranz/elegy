import { ref } from 'vue'

const isPayingPrice = ref(false)

export function usePayThePrice() {
  const payThePrice = () => {
    isPayingPrice.value = true
  }

  return {
    isPayingPrice,
    payThePrice
  }
} 