<template>
    <Navbar/>
    <BContainer class="mb-4">
      <RouterView/>
    </BContainer>
  <Footer/>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import {BContainer} from "bootstrap-vue-next";
</script>