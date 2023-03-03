<template>
<div>
  <select class="form-select w-25 m-auto mt-3" aria-label="Default select example">
    <option selected >filter</option>
    <option value="1">Nike</option>
    <option value="2">Puma</option>
    <option value="3">Diesel</option>
  </select>
  <div class="container d-flex products-view " v-for="product in products" :key="product.productId">
    <div class="card mt-4" style="max-width: 350px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="product.productImg" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{product.productName}}</h5>
            <p class="card-text">{{product.size}}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
.products-view {
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 3rem;
}
select{
  background-color: rgb(195, 154, 77);
}
option{
  background-color: black;
  color: white;
}

</style>