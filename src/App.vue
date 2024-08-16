<template>
<!--  <ShoppingCartProvider>-->
      <Navbar />
      <BContainer class="mb-4">
        <router-view />
      </BContainer>
<!--  </ShoppingCartProvider>-->
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import {BContainer} from "bootstrap-vue-next";
import Store from './pages/Store.vue'
// import { useShoppingCart } from './context/ShoppingCartContext'
</script>