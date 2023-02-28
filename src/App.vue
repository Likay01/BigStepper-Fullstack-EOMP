<template>
  <header>
<NavbarBS></NavbarBS>
  </header>
  <body>
    
  <router-view/>
  </body>
  <footer>
<footerBS></footerBS>
  </footer>
</template>

<script> 
   import NavbarBS from "./components/HeaderBS.vue";
import footerBS from "./components/FooterBS.vue";


  export default {
components:{
NavbarBS,
footerBS
}
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Barlow+Semi+Condensed:ital,wght@1,200&family=Poppins:ital,wght@0,200;0,300;1,300&family=Roboto:ital,wght@0,300;0,400;0,500;1,100;1,500&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #414345;
  font-family: 'Archivo Narrow', sans-serif;
}
html{
  background-color: #679289;
}
nav a {
  display: flex;
  font-weight: bold;
  text-decoration: none;
 text-align: left;
 margin: 0;
}

body{
  min-height: 100vh; 
   overflow-x: hidden;
       background-image: url(./assets/texture.jpg);

}

footer{
  margin-top: auto;
}

ul{
margin-left: 10px;

}

nav a.router-link-exact-active {
  color: #e9db71;
}
</style>
