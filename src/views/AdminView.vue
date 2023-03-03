<template>
  <div class="add">
    <div class="col-10 slide-bar">
      <div class="row-4 heading">
        <h4 class="col-10 text-white">Admin Page </h4>
</div>
<div class="row-4 image">
       <img class="col-10" src="../assets/MyProject-3.png" alt="">
</div>
<div class="links">
 <a href="#Products" class="col"><h6>Products Table</h6></a>
</div>
<div class="links">
 <a href="#users" class="col"><h6>Users Table</h6></a>
 </div>
    </div>
    <div class="col-10 all">
      <div class="Prod" id="Products"> 
    <h5>Products</h5>
    <table class="Products table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Product</th>
          <th scope="col">price</th>
          <th scope="col">size</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody class="Table">
        <tr v-for="product in products" :key="product.productId">
          <td>{{product.productId}}</td>
          <td>{{product.productName}}</td>
          <td>{{product.price}}</td>
          <td>{{product.size}}</td>
          <td>{{product.quantity}}</td>
        </tr>
      </tbody>
    </table>
  </div>
    <div class="Use" id="users">
      <h5 class="Users">Users</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Cellphone</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Address</th>
            <th scope="col">Gender</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody class="userTable">
          <tr v-for="user in users" :key="user.username">
           <td>{{user.userId}}</td>
           <td>{{user.firstName}}</td>
           <td>{{user.lastName}}</td>
           <td>{{user.cellphone}}</td>
           <td>{{user.email_Add}}</td>
           <td>{{user.userPass}}</td>
           <td>{{user.address}}</td>
           <td>{{user.gender}}</td>
           <td>{{user.userRole}}</td>
          </tr>
        </tbody>
      </table>
  
    </div>
  </div>
  </div>
  </template>
  <script>
  import {useStore} from 'vuex';
  import {computed} from '@vue/runtime-core';
  export default {
    setup() {
      const st = useStore();
      st.dispatch('getProducts');
      st.dispatch('getUsers');
      let products = computed(() => st.state.products);
      let users = computed(() => st.state.users);
      return {
       products,
        users
      }
    }
  }
  </script>
  <style scoped>
  .add{
  display: flex;
  width: 100vw;
  }
  img{
    width:10rem;
    height: 11rem;
    margin: auto;
    transition: all 2s;
    transform: scale(0.4) rotate();
    animation: awesomeAnimation 7s infinite;
  }
  h5{
  margin: auto;
  padding-bottom: 1rem;
  }
  .all{
    padding-top: 2rem;
  }
 .Prod{
  min-height: 100vh;
 }
 a{
text-decoration: none;
color: white;
padding: 5rem;
 }
 a:hover{
  color: rgb(164, 148, 58);
 }
 .heading{
  position: relative;
  left: 5rem;
 }
 .image{
margin-top: 7rem;
position: relative;
right: 2rem;
 }
.links{
  margin-top: 20rem;
  position: relative;
  right: 12rem;
}
 .Use{
  min-height: 100vh;
 }
  .slide-bar{
    display: flex;
    background-color: rgba(0, 0, 0, 0.679);
    min-height: 100vh;
    width: 15rem;
  }
  h4{
margin: auto;
  }

  td {
    word-break: break-all;
  }
  @keyframes awesomeAnimation{
    0%{
    
       
    }
    30%{
 
    }
    50% {
        transform: rotate(360deg);
    }
    100%{
       
    }
  }
  </style>