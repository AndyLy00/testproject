<template>
  <BOffcanvas v-model="isOpen" @hide="closeCart" placement="end">
    <div>
      <BCol class="gap-3 d-grid">
        <BCol v-for="item in cartItems" :key="item.id">
          <CartItem :id="item.id" :quantity="item.quantity" />
        </BCol>
        <BCol class="text-end fw-bold fs-5">
          Total
          {{ formatCurrency(totalPrice) }}
        </BCol>
      </BCol>
    </div>
  </BOffcanvas>
</template>

<script setup>
import { computed } from 'vue'
import { useShoppingCartStore } from '@/context/ShoppingCartContext'
import { formatCurrency as formatCurrencyUtil } from '@/utilities/formatCurrency'
import CartItem from './CartItem.vue'
import storeItems from '@/data/data.json'

const store = useShoppingCartStore()

const closeCart = () => {
  store.closeCart()
}

const isOpen = computed(() => store.isOpen)

const cartItems = computed(() => store.cartItems)

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, cartItem) => {
    const item = storeItems.find(i => i.id === cartItem.id)
    return total + (item ? item.price : 0) * cartItem.quantity
  }, 0)
})

const formatCurrency = (amount) => {
  return formatCurrencyUtil(amount)
}
</script>
