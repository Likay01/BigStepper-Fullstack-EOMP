<template>
    <div class="Use" id="users">
        <h5 class="Users">Users</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Profile</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Cellphone</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Role</th>
              <th scope="col">Del</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody class="userTable">
            <tr v-for="user in users" :key="user.username">
             <td>{{user.userId}}</td>
             <td>{{user.userImage}}</td>
             <td>{{user.firstName}}</td>
             <td>{{user.lastName}}</td>
             <td>{{user.cellphone}}</td>
             <td>{{user.email_Add}}</td>
             <td>{{user.userPass}}</td>
             <td>{{user.address}}</td>
             <td>{{user.gender}}</td>
             <td>{{user.userRole}}</td>
             <td><button>bin</button></td>
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
      st.dispatch('getUsers');
      let users = computed(() => st.state.users);
      return {
        users
      }
    }
  }
</script>

<style scoped>
.Use{
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