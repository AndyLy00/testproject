<template>
  <BRow direction="horizontal" class="d-flex align-items-center gap-3 w-auto m-0">
    <BCol class="w-auto p-0">
      <div class="lh-1">
        {{ item.name }}
        <span v-if="quantity > 1" class="text-muted" style="font-size: .65rem">
          x{{ quantity }}
        </span>
        <div class="text-muted" style="font-size: .75rem">
          {{ formatCurrency(item.price) }}
        </div>
      </div>
    </BCol>

    <div class="d-flex align-items-center flex-column w-auto" style="gap: .5rem">
      <div class="d-flex align-items-center justify-content-center" style="gap: .5rem">
        <BButton class="btn-info btn-sm" @click="decreaseCartQuantity">-</BButton>
        <div>
          <span>{{ quantity }}</span>
        </div>
        <BButton class="btn-info btn-sm" @click="increaseCartQuantity">+</BButton>
      </div>
    </div>

    <div class="w-auto">{{ formatCurrency(item.price * quantity) }}</div>

    <BButton variant="outline-danger" size="sm" class="w-auto" @click="removeFromCart">
      &times;
    </BButton>
  </BRow>
</template>

<script setup>
import { computed } from 'vue'
import { useShoppingCartStore } from '@/context/ShoppingCartContext'
import storeItems from '@/data/data.json'
import { formatCurrency as formatCurrencyUtil } from '@/utilities/formatCurrency'

const props = defineProps({
  id: Number,
  quantity: Number
})

const store = useShoppingCartStore()

const item = computed(() => storeItems.find(i => i.id === props.id))
const quantity = computed(() => props.quantity)

const increaseCartQuantity = () => {
  store.increaseCartQuantity(props.id)
}

const decreaseCartQuantity = () => {
  store.decreaseCartQuantity(props.id)
}

const removeFromCart = () => {
  store.removeFromCart(props.id)
}

const formatCurrency = (amount) => {
  return formatCurrencyUtil(amount)
}
</script>
