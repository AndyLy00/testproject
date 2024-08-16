<template>
  <BNavbar sticky="top" type="light" variant="light" class="bg-white shadow-sm mb-3">
    <BContainer class="d-flex align-items-center justify-content-between">
      <div>
        <img src="../assets/logo.png" alt="Logo" style="width: 70px;"/>
      </div>
      <BNav>
        <RouterLink to="/" custom>
          <BNavItem active>Store</BNavItem>
        </RouterLink>
      </BNav>
      <BButton
          @click="openCartFunction"
          style="width: 3rem; height: 3rem; position: relative"
          variant="outline-info"
          class="rounded-circle"
      >
        <IBiCart icon="cart" style="color: #33b5e5"/>
        <div
            v-if="cartQuantity > 0"
            class="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style="
            color: white;
            width: 1.5rem;
            height: 1.5rem;
            position: absolute;
            bottom: 0;
            right: 0;
            transform: translate(25%, 25%);
          "
        >
          {{ cartQuantity }}
        </div>
      </BButton>
    </BContainer>
  </BNavbar>
</template>

<script setup lang="ts">
import {useShoppingCartStore} from '@/context/ShoppingCartContext'
import {computed} from "vue";
const store = useShoppingCartStore()
const cartQuantity = computed(() => store.cartQuantity)

function openCartFunction() {
  store.openCart();
}

</script>
