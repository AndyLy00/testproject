import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useShoppingCartStore = defineStore('shoppingCart', () => {
    const isOpen = ref(false)
    const cartItems = ref([])

    const cartQuantity = computed(() =>
        cartItems.value.reduce((quantity, item) => item.quantity + quantity, 0)
    )

    function openCart() {
        isOpen.value = true
    }

    function closeCart() {
        isOpen.value = false
    }

    function getItemQuantity(id) {
        const item = cartItems.value.find(item => item.id === id)
        return item ? item.quantity : 0
    }

    function increaseCartQuantity(id) {
        const item = cartItems.value.find(item => item.id === id)
        if (!item) {
            cartItems.value.push({ id, quantity: 1 })
        } else {
            item.quantity += 1
        }
    }

    function decreaseCartQuantity(id) {
        const item = cartItems.value.find(item => item.id === id)
        if (item) {
            if (item.quantity === 1) {
                cartItems.value = cartItems.value.filter(item => item.id !== id)
            } else {
                item.quantity -= 1
            }
        }
    }

    function removeFromCart(id) {
        cartItems.value = cartItems.value.filter(item => item.id !== id)
    }

    return {
        isOpen,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    }
})
