import resetService from "../services/reset.service";

export const reset = {
  namespaced: true,
  state: null,
  actions: {
    async sendEmail(_, email) {
      await resetService.sendEmail(email);
    },

    async resetPassword(_, newUser) {
      await resetService.resetPassword(newUser);
    },
  },
};
