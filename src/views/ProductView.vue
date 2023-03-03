<template>
  <select class="form-select w-25 m-auto mt-3" aria-label="Default select example">
    <option selected >filter</option>
    <option value="1">Nike</option>
    <option value="2">Puma</option>
    <option value="3">Diesel</option>
  </select>
<div class="container row p-5 ">
  <div class="container prod-view col-4 d-flex align-content-center" v-for="product in products" :key="product.productId" >
    <div class="card mt-4" style="max-width: 350px; height: 200px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="product.productImage" class="img-fluid rounded-start" style="width: 50%; height: 100%;">
        </div>
        <div class="col-md-6">
          <div class="card-body bg-transparent">
            <h5 class="card-title">{{product.productName}}</h5>
            <p class="card-text">R{{product.price}}</p>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
</template>
<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
export default {
setup() {
  const store = useStore();
  store.dispatch('getProducts');
  let products = computed(() => store.state.products);
  return {
    products
  }
}
}
</script>
<style scoped>
.prod-view {
gap: 1rem;
}
select{
  background-color: rgb(195, 154, 77);
}
option{
  background-color: black;
  color: white;
}

</style>