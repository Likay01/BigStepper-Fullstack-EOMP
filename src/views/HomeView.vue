<template> 
<video autoplay loop muted playsinline class="MyVid">
  <source src="../assets/BigStepper.mp4" type="video/mp4">
</video>
  <h1>NIKE</h1>
<div class="headline">
<div class="slideshow">
  <div class="block">
<img src="../assets/blue.jpg" alt="nike">
  </div>
  <div class="block">
<img src="../assets/red.jpg" alt="nike">
  </div>
  <div class="block">
<img src="../assets/Panda.jpg" alt="">
  </div>
  <div class="block">
<img src="../assets/travis.jpg" alt="">
  </div>
  <div class="block">
<img src="../assets/Waffle.jpg" alt="">
   </div>
   <div class="block">
    <img src="../assets/blue.jpg" alt="nike">
      </div>
      <div class="block">
    <img src="../assets/red.jpg" alt="nike">
      </div>
      <div class="block">
    <img src="../assets/Panda.jpg" alt="">
      </div>
      <div class="block">
    <img src="../assets/travis.jpg" alt="">
      </div>
      <div class="block">
    <img src="../assets/Waffle.jpg" alt="">
       </div>
  </div>
</div>
<div class="in-depth" id="about">
<div class="col-6 descript">
 <h5>Welcome to Big Stepper, the ultimate destination for sneaker enthusiasts. At Big Stepper, we understand the importance of having the best pair of sneakers to complete your look. That's why we offer a range of authentic, high-quality sneakers from the world's most coveted brands</h5>
 <button type="button" class="btn btn-outline-dark">Products</button>
</div>
<div class="col-6 NB"></div>
</div>
</template>

<script>
  export default {
    
    
  }
</script>

<style scoped>
body{
  display: grid;
  place-items: center;
}
h1{
  background-color: black;
  margin-top:-6px;
  color: white;
  text-align: start;
}
.headline{
  background-color: rgb(0, 0, 0);
  min-height: 30vh;
 margin-top:-8px;
 display:flex;
position: relative;
place-items: center;
overflow: hidden;
}
.slideshow{
  display: flex;
width: calc(250px * 18);
animation: scroll 40s linear infinite;
}
.slideshow:hover{
animation-play-state: paused;
}
img{
width: 100%;
transition: transform 2s;
object-fit: contain;
}
img:hover{
  transform: translateZ(3rem);
}
.block{
 position: relative;
 height:30rem;
 margin: auto;
 width: 30rem;
 display: grid;
 place-items: center;
padding: 10px;
perspective: 700px;
}
.in-depth{
min-height: 70vh;
  display: flex;
  width: 100vw;
 background-image: url(../assets/texture.jpg); 
 justify-content: center;
}
.NB{
background-image:url(../assets/NB550.jpg);
background-size: cover;
position: relative;
width: 40rem;
height: 30rem;
justify-content: center;
margin: 5rem;
opacity: 0;
animation: fade 1s;
animation-delay: 1s;
animation-fill-mode: forwards;
}

h5{
  margin-top:7rem;
  text-align: start;
  font-size: xx-large;
  margin-left: 5rem;
  opacity: 0;
animation: fade 1s;
animation-delay: 0,1s;
animation-fill-mode: forwards;

}
button{
border: solid 2px;
font-size: xx-large;
margin-right: 50rem;
margin-top: 2rem;
width: 12rem;
height: 4rem;
margin-left: 5rem;
opacity: 0;
animation: fade 1s;
animation-delay: 3s;
animation-fill-mode: forwards;

}
@keyframes fade {
  from{
      opacity: 0;
  }
  to{
      opacity: 1;
  }
}
@keyframes scroll {
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-250px * 9));
  }
}
@media (min-aspect-ratio: 16/9){
  .MyVid{
    width: 100%;
    height: auto;
    justify-content: center;
  }
}
@media (max-aspect-ratio: 16/9){
  .MyVid{
    width: 100%;
    height: auto;
  }
}
</style>