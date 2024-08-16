<template>
  <BRow cols-lg="1" cols-md="1" cols-sm="1" class="gap-3">
    <BCol v-for="item in myItems" :key="item.id">
      <StoreItem v-bind="item" />
    </BCol>
  </BRow>
  <ShoppingCart/>
</template>

<script>
import { ref, onMounted } from 'vue';
import storeItems from '../data/data.json';

export default {
  setup() {
    const myItems = ref([]);

    onMounted(() => {
      const storedData = localStorage.getItem('MyStore');
      const getItems = storedData ? JSON.parse(storedData) : [];
      if (getItems.length === 0) {
        myItems.value = storeItems;
        localStorage.setItem('MyStore', JSON.stringify(storeItems));
      } else {
        myItems.value = getItems;
      }
      console.log(getItems);
    });

    return {
      myItems
    };
  }
};

</script>