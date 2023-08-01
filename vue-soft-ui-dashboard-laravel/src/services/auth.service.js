import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.VUE_APP_API_BASE_URL + '/';

export default {
  async login(user) {
    const response = await axios.post(API_URL + "login", user);
    if (response.data.access_token) {
      localStorage.setItem("userF", JSON.stringify(response.data.access_token));
    }
  },

  async logout() {
    try {
      await axios.post(API_URL + "logout", {}, { headers: authHeader() });
    } finally {
      localStorage.removeItem("userF");
    }
  },

  async register(user) {
    const response = await axios.post(API_URL + "register", user);
    if (response.data.access_token) {
      localStorage.setItem("userF", JSON.stringify(response.data.access_token));
    }
  },
};
