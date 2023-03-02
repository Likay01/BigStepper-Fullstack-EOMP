import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    users : null,
    products : null,
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setProducts(state, values) {
      state.users = values
    },
    login(state, values) {
      state.users = values
    },
    signup(state, values) {
      state.users = values
    }
  },
  actions: {
    async login(context, payload) {
      const url = `https://big-stepper.onrender.com/login`;
      const res = await axios.post(`${url}`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('login', result)
      } else {
        context.commit(err)
      }
    },
    async signup(context, payload) {
      const url = `https://big-stepper.onrender.com/signup`;
      const res = await axios.post(`${url}`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('signup', result)
      } else {
        context.commit(err)
      }
    },

    async getProducts(context, payload) {
      const url = `https://big-stepper.onrender.com/products`;
      const res = await axios.post(`${url}`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUser', result)
      } else {
        context.commit(err)
      }
    },
    async getUsers(context, payload) {
      const url = `https://big-stepper.onrender.com/users`;
      const res = await axios.post(`${url}`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUser', result)
      } else {
        context.commit(err)
      }
    },
  },
  modules: {
  }
})
