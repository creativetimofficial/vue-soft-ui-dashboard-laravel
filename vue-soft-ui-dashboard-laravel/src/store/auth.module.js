import authService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("userF"));
const initialState = user ? { loggedIn: true } : { loggedIn: false };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    async login({ commit }, userData) {
      await authService.login(userData);
      commit("logMeIn");
    },

    async logout({ commit }) {
      await authService.logout();
      commit("logMeOut");
    },

    async register({ commit }, userData) {
      await authService.register(userData);
      commit("logMeIn");
    },
  },
  mutations: {
    logMeIn(state) {
      state.loggedIn = true;
    },
    logMeOut(state) {
      state.loggedIn = false;
    },
  },

  getters: {
    loggedIn(state) {
      return state.loggedIn;
    },
  },
};
