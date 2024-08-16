<template>
  <BNavbar sticky="top" type="light" variant="light" class="bg-white shadow-sm mb-3">
    <BContainer class="d-flex align-items-center justify-content-between">
      <div>
        <img src="../assets/logo.png" alt="Logo" style="width: 70px;"/>
      </div>
      <BNav>
        <router-link to="/" custom>
          <BNavItem>Store</BNavItem>
        </router-link>
      </BNav>
      <BButton
          style="width: 3rem; height: 3rem; position: relative"
          variant="outline-info"
          class="rounded-circle"
      >
        <IBiCart icon="cart" style="color: #33b5e5" />
        <div
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
          1
<!--          {{ cartQuantity }}-->
        </div>
      </BButton>
    </BContainer>
  </BNavbar>
</template>

<script setup lang="ts">
// import { useShoppingCartStore } from '../stores/useShoppingCart'
import logo from "../assets/logo.png";
// const { openCart, cartQuantity } = useShoppingCartStore()

</script>
