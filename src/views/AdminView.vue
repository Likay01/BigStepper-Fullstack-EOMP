<template>
<div class="add">
  <div class="col-9 slide-bar">
   <h4 class="text-white">Admin Page </h4>
  </div>
  <div class="col-9 all">
    <h5>Products</h5>
  <table class="Products table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">img</th>
        <th scope="col">price</th>
        <th scope="col">size</th>
        <th scope="col">Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
     
      </tr>
    </tbody>
  </table>

  <h5 class="Users">Users</h5>
  <table class="Users table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Profile</th>
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
    <tbody class="ProdTable">
    </tbody>
  </table>
</div>
</div>

</template>

<script>

</script>

<style scoped>
.add{
  display: flex;
width: 100%;
margin: auto;
}
h5{
margin: auto;
padding-bottom: 1rem;
}
.all{
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
}
.Users{
  padding-top: 3rem;
}
.slide-bar{
  display: flex;
  background-color: rgba(0, 0, 0, 0.679);
  min-height: 100vh;
  width: 20rem;
}
h4{
margin-left:5rem;
margin-top: 1rem;
}
</style>