<template>
  <BCard class="h-100">
    <BCardBody class="d-flex flex-column">
      <img :src="imageUrl" alt="Image" class="objectImages"/>
      <BCardTitle class="d-flex justify-content-between align-items-baseline">
        <span class="fs-2">{{ name }}</span>
          <span class="ms-2 text-muted">{{ formatCurrency(price) }}</span>
      </BCardTitle>
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column mb-4">
          <span class="fs-3">{{ category }}</span>
          <span class="fs-6">{{ producer }}</span>
        </div>
        <div class="d-flex mb-4 align-items-center gap-2">
          <IBiStarFill style="color: #ffc300"/>
          <span class="fs-3">{{ rating }}</span>
        </div>
      </div>


      <div class="mt-auto">
        <BButton
            v-if="quantity === 0"
            class="btn-info w-100"
            @click="increaseCartQuantity(id)"
        >
          + Add To Cart
        </BButton>
        <div
            v-else
            class="d-flex align-items-center flex-column"
            style="gap: .5rem"
        >
          <div
              class="d-flex align-items-center justify-content-center"
              style="gap: .5rem"
          >
            <BButton
                v-if="quantity > 0"
                class="btn-info"
                @click="decreaseCartQuantity(id)"
            >
              -
            </BButton>
            <div>
              <span class="fs-3">{{ quantity }}</span> in cart
            </div>
            <BButton
                v-if="quantity < objectsInStock"
                class="btn-info"
                @click="increaseCartQuantity(id)"
            >
              +
            </BButton>
            <div>
              /{{ objectsInStock }}
            </div>
          </div>
          <BButton
              class="btn-danger btn-sm"
              @click="removeFromCart(id)"
          >
            Remove
          </BButton>
        </div>
      </div>
    </BCardBody>
  </BCard>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useShoppingCartStore } from '@/context/ShoppingCartContext'
import { formatCurrency } from '@/utilities/formatCurrency'

const props = defineProps({
  id: Number,
  name: String,
  price: Number,
  category: String,
  description: String,
  rating: Number,
  producer: String,
  objectsInStock: Number,
  image: String
})
const imageUrl = new URL(`../images/${props.id}.jpg`, import.meta.url).href
const store = useShoppingCartStore()
const quantity = computed(() => store.getItemQuantity(props.id))

function increaseCartQuantity() {
  store.increaseCartQuantity(props.id)
}

function decreaseCartQuantity() {
  store.decreaseCartQuantity(props.id)
}

function removeFromCart() {
  store.removeFromCart(props.id)
}

</script>

<style>
.objectImages {
  width: 100%;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
}
</style>