import axios from "axios";

const API_URL = process.env.VUE_APP_API_BASE_URL + '/';

export default {
  async sendEmail(email) {
    await axios.post(API_URL + "password-forgot", {
      email: email,
      redirect_url: process.env.VUE_APP_BASE_URL + "resetpassword/",
    });
  },

  async resetPassword(newUser) {
    await axios.post(API_URL + "password-reset", newUser);
  },
};
