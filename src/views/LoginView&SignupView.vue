<template>
    <div class="base-layer card-front">
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
          <button type="button" class="btn sign col-6" data-bs-toggle="modal" data-bs-target="#Modal">
            <p> Sign up ?</p>
          </button>
          <a href=""><p class="pass col-6">forgot password?</p></a>
</div>
</div>
  <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content bg-black">
        <div class="modal-header">
    <h2 class="text-white">Sign Up</h2>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="col-6 sec">
                        <div class="confidential">
                          <div class="mb-3">
                            <label for="Username1" class="form-label text-white">Username</label>
                            <input type="username" class="form-control inP" id="UserName" aria-describedby="username" required>
                          </div>
                         </div>
                          <div class="confidentials">
                         <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-white">UserProfile</label>
                            <input type="text" class="form-control inP text-danger" id="userProfile" placeholder="eg. URL">
                          </div>
                          </div>
                        </div>
            <div class="col-6 sec">
                          <div class="confidential">
                          <div class="mb-3">
                            <label for="firstName" class="form-label text-white">FirstName</label>
                            <input type="firstName" class="form-control inP" id="firstName" aria-describedby="firstName" required>
                          </div>
                        </div>
                          <div class="confidentials">
                          <div class="mb-3">
                            <label for="lastName" class="form-label text-white">LastName</label>
                            <input type="lastName" class="form-control inP" id="lastName" aria-describedby="lastName" required>
                          </div>
                          </div>           
                        </div>
             <div class="col-6 sec">            
                          <div class="confidential">
                          <div class="mb-3">
                            <label for="cellPhone" class="form-label text-white">Cellphone</label>
                            <input type="number" class="form-control inP" id="cellPhone" aria-describedby="cellPhone" placeholder="eg.(000)000-0000" required>
                          </div>
                          </div>   
                          <div class="confidentials">
                          <div class="mb-3">
                            <label for="InputEmail1" class="form-label text-white">Email</label>
                            <input type="email" class="form-control inP" id="InputEmail1" aria-describedby="emailHelp" placeholder="example@bigstepper.com" required>
                          </div>
                        </div>
                      </div>
            <div class="col-6 sec">
                       <div class="confidential">
                          <div class="mb-3">
                            <label for="userPass" class="form-label text-white" >Password</label>
                            <input type="password" class="form-control inP" id="userPass" placeholder="eg.********" required>
                          </div>
                          </div>           
                          <div class="confidentials">
                          <div class="mb-3">
                            <label for="address" class="form-label text-white" >Address</label>
                            <input type="address" class="form-control inP" id="address" required>
                          </div>
                          </div>
                          </div>
             <div class="col-6 sec">             
                          <div class="col-6 ">
                          <div class="mb-3">
                            <label for="gender" class="form-label text-white Gen" >Gender</label>
                            <input type="text" class="form-control G-in" id="gender" placeholder="Male/Female/Other" required>
                          </div>
                         </div>
                         </div>
            
                          <div class="mb-3">
                            <label class="form-check-label text-white pe-3" for="Check1">I'm not a robot</label>
                            <input type="checkbox" class="form-check-input" id="Check1" required>
                          </div>
                          <div class="form-text text-white mb-3">Information provided is confidential information.</div>
            
                          <button type="submit" class="btn btn-success text-white">Submit</button>
                      </form>            
  </div>
        </div>
        <div class="modal-footer bg-black">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Login</button>
        </div>
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

.base-holder {
  min-height: 100vh;
  position: absolute;
}
.base-layer{
    background-color: rgba(0, 0, 0, 0.729);
    height: 100%;
    width: 40rem;
    margin: auto;
    justify-content: center;
}
.base-layer2{
  height: 100%;
  width: 40rem;
  margin: auto;
  justify-content: center;
}
.confidential{
 margin: 0;

}
.confidentials{
  margin: 0;
   padding-left: 20px;

}
.sec{
  display: flex;
position: relative;
right: 15px;
}
.Gen{
margin-left: 13rem;
}
.G-in{
  width: 26rem;
margin-left: 2rem;
}
.inP{
  width: 15rem;
 
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
.pass:hover{
  color:white
}
img{
    width: 20rem;
    border-radius: 10px;
}

</style>