import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: null,
  },
  getters: {
    PROFILE: (state) => state.profile,
  },
  mutations: {
    SET_PROFILE: (state, payload) => {
      state.profile = payload;
    },
  },
  actions: {
    GET_PROFILE: async (context) => {
      try {
        const res = await axios.get('https://randomuser.me/api');
        context.commit('SET_PROFILE', res.data.results[0]);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {
  },
});
