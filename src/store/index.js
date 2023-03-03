import { createStore } from 'vuex'
import axios from 'axios';
const url = "https://bigstepper.onrender.com/";

export default createStore({
  state: {
    users : null,
    products : null,
    showSpinner : true,
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setProducts(state, values) {
      state.products = values
    },
    login(state, values) {
      state.users = values
    },
    signup(state, values) {
      state.users = values
    },
    setMessage(state, value) {
      state.message = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
    }

  },
  actions: {
    async login(context, info) {
      const res = await axios.post(`${url}login`, info);
      const {result, err} = await res.data;
      if(result) {
        context.commit('login', result);
      } else {
        context.commit('setMessage', err);
      }
    },
    async signup(context, info) {
      const res = await axios.post(`${url}signup`, info);
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setUsers', msg);
      } else {
        context.commit('setMessage',err)
      }
    },

    async getProducts(context) {
      const res = await axios.get(`${url}products`);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setProducts', result);
      } else {
        context.commit(err);
      }
    },
    async getUsers(context, info) {
      const res = await axios.get(`${url}users`, info);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUsers', result);
      } else {
        context.commit(err);
      }
    }
  },
  modules: {
  }
})
