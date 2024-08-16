<template>
    <Navbar/>
    <BContainer class="mb-4">
      <RouterView/>
    </BContainer>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import {BContainer} from "bootstrap-vue-next";
</script>