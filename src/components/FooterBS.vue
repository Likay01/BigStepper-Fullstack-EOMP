<template>
   <div class="contained">
    <div class="row">
   <div class="col-6">
    <ul class="navbar-nav mb-2">
        <router-link class="linked" to="/">Home</router-link> 
        <router-link class="linked" to="/about">About Us</router-link> 
        <router-link class="linked" to="/products">Products</router-link> 
        <router-link class="linked" to="/login&signup">LogIn</router-link>
          </ul>
   </div>
   <div class="col-6">
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn" type="submit">Search</button>
      </form>
    </div>
   </div>
    </div>
  <div class="last">
    &copy; Big Stepper
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
form{
    width: 20rem;
}
.linked{
    text-decoration: none;
    width: 80px;
    color: #000000;
}
ul{
    width: 80px;
}

input{
    border: 1px solid #101010;
}
button{
    border: 2px solid #121212;
    color: #0a0a0a;
  }
  .contained{
    display: flex;
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: #a98732;

  }
.contained > *{
flex-basis: 100%;

}
  .last{
    background-color: #a89a3b;
    color: white;
  }

</style>