<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="back container-fluid">
        <div class="container-fluid">
        <a class="logo navbar-brand" href="#">
          <img src="https://i.postimg.cc/s1dx3stM/My-project-1-5.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-2">
          Big Stepper
        </a>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="Switch-right collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav  mb-0">
          <router-link class="me-3" to="/">Home</router-link> 
          <a href="#about" class="myAbout">About</a> 
          <router-link class="me-3" to="/products">Products</router-link> 
          <router-link class="me-3" to="/login&signup">LogIn </router-link>
            </ul>
        <form class="d-flex mb-2 m-1" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn" type="submit">Search</button>
        </form>
      </div>
      </div>
  </nav>
</template>

<script>
  export default {
    

  }
</script>

<style scoped>
a{
color: #5c5d5c;
font-size: 13px;
}

.back{
  background-color: #cca854;
}
nav{
    padding: 0; 
}
button{
  border: 2px solid #5c5d5c;
  color: #5c5d5c;
}
input{
  border: 1px solid #5c5d5c;
  width: 18rem;
}
.myAbout{
  margin-right: 20px;
}
</style>