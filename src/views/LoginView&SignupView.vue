<template>
    <div class="base-layer">
<div class="title">
  <h2 class="text-white">Login</h2>
</div>
<div class="pic">
    <img src="../assets/MyProject-1.png" alt="">
</div>
        <form>
            <div class="mb-3">
              <label for="InputEmail1" class="form-label text-white">Email</label>
              <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="example@bigstepper.com" required>
              <div id="email" class="form-text text-white">Confidential information</div>
            </div>
            <div class="mb-3">
              <label for="InputPassword1" class="form-label text-white" >Password</label>
              <input type="password" class="form-control ou " id="InputPassword1" placeholder="eg.********" required>
            </div>
            <div class="mb-3">
              <label class="form-check-label text-white pe-3" for="Check1">I'm not a robot</label>
              <input type="checkbox" class="form-check-input" id="Check1" required>
            </div>
            <button type="submit" class="btn btn-success text-white">Submit</button>
          </form>
          <div class="opt">
          <a href=""><p class="sign col-6">Sign up ?</p></a>
          <a href=""><p class="pass col-6">forgot password?</p></a>
</div>

<div class="title">
    <h2 class="text-white">Sign Up</h2>
  </div>
          <form>
              <div class="mb-3">
                <label for="Username1" class="form-label text-white">Username</label>
                <input type="username" class="form-control" id="UserName" aria-describedby="username" required>
              </div>
             <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-white">UserProfile</label>
                <input type="text" class="form-control text-danger" id="userProfile" placeholder="eg. URL">
              </div>
              <div class="mb-3">
                <label for="firstName" class="form-label text-white">FirstName</label>
                <input type="firstName" class="form-control" id="firstName" aria-describedby="firstName" required>
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label text-white">LastName</label>
                <input type="lastName" class="form-control" id="lastName" aria-describedby="lastName" required>
              </div>
              <div class="mb-3">
                <label for="cellPhone" class="form-label text-white">Cellphone</label>
                <input type="number" class="form-control" id="cellPhone" aria-describedby="cellPhone" placeholder="eg.(000)000-0000" required>
              </div>
              <div class="mb-3">
                <label for="InputEmail1" class="form-label text-white">Email</label>
                <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="example@bigstepper.com" required>
              </div>
              <div class="mb-3">
                <label for="userPass" class="form-label text-white" >Password</label>
                <input type="password" class="form-control" id="userPass" placeholder="eg.********" required>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label text-white" >Address</label>
                <input type="address" class="form-control" id="address" required>
              </div>
              <div class="mb-3">
                <label for="gender" class="form-label text-white" >Gender</label>
                <input type="text" class="form-control" id="gender" placeholder="Male/Female/Other" required>
              </div>
              <div class="mb-3">
                <label class="form-check-label text-white pe-3" for="Check1">I'm not a robot</label>
                <input type="checkbox" class="form-check-input" id="Check1" required>
              </div>
              <div class="form-text text-white mb-3">Information provided is confidential information.</div>

              <button type="submit" class="btn btn-success text-white">Submit</button>
            </form>
            <div class="opt">
            <a href=""><p class="sign col-6">Login ?</p></a>
  </div>
  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
template{
    width: 100%;
}
.base-layer{
    background-color: rgba(0, 0, 0, 0.729);
    min-height: 100vh;
    width: 40rem;
    margin: auto;
    justify-content: center;
    border-radius: 10px;
    opacity: 0;
    animation: fade 1s;
    animation-delay: 0,1s;
    animation-fill-mode: forwards;
}
form{
    width: 30rem;
    margin: auto;
    text-align: center;
}

.sign{
    color: white;
    font-size: small;
    text-align: end;
    width: fit-content;
    align-items: end;
}
p:hover{
color: rgb(169, 147, 48);
}
a{
text-decoration: none;
}
.opt{
    display: flex;
    justify-content: space-between ;
    padding: 3rem;
}
.pass{
    color: rgb(219, 191, 64);
    font-size: small;
    text-align: start;
    width: fit-content;

}
img{
    width: 20rem;
    border-radius: 10px;
}
@keyframes fade {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
  }
</style>