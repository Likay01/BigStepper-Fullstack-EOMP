<template>
    <div class="Prod" id="Products"> 
        <h5>Products</h5>
        <table class="Products table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product</th>
              <th scope="col">Img</th>
              <th scope="col">price</th>
              <th scope="col">size</th>
              <th scope="col">Quantity</th>
              <th scope="col">Del</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody class="Table">
            <tr v-for="product in products" :key="product.productId">
              <td>{{product.productId}}</td>
              <td>{{product.productName}}</td>
              <td>{{product.productImg}}</td>
              <td>{{product.price}}</td>
              <td>{{product.size}}</td>
              <td>{{product.quantity}}</td>
              <td>del</td>
              <td>mod</td>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
  import {useStore} from 'vuex';
  import {computed} from '@vue/runtime-core';
  export default {
    setup() {
      const st = useStore();
      st.dispatch('getProducts');
      let products = computed(() => st.state.products);
      return {
       products, 
      }
    }
  }
</script>

<style scoped>
.Prod{
    min-height: 100vh;
   }
   td {
    word-break: break-all;
  }
  h5{
    margin: auto;
    padding-bottom: 1rem;
    }
</style>