import profileService from "../services/profile.service";

const initialState = { profile: null };

export const profile = {
  namespaced: true,
  state: initialState,
  actions: {
    async getProfile({ commit }) {
      const response = await profileService.getProfile();
      commit("SET_PROFILE", response);
    },

    async uploadPic(_, object) {
      return await profileService.uploadPic(object);
    },

    async updateProfile({ commit }, profile) {
      const response = await profileService.updateProfile(profile);
      commit("SET_PROFILE", response);
    },
  },

  mutations: {
    SET_PROFILE(state, profile) {
      state.profile = profile;
    },
  },

  getters: {
    profile(state) {
      return state.profile;
    },
  },
};
