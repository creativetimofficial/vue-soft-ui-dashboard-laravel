<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div
              class="px-5 col-xl-5 col-lg-6 col-md-8 col-12 d-flex flex-column"
            >
              <div class="mt-8 card card-plain">
                <div class="pb-0 text-left card-header">
                  <h3 class="text-info text-gradient">Reset Password</h3>
                  <p class="mb-0">Please input your new password</p>
                </div>
                <div class="pb-3 card-body">
                  <Form
                    role="form"
                    class="text-start"
                    :validation-schema="schema"
                    @submit="handleResetPassword"
                  >
                    <label>Password</label>
                    <soft-field
                      id="password"
                      v-model="user.password"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <label>Re-type Password</label>
                    <soft-field
                      id="password_confirmation"
                      v-model="user.password_confirmation"
                      type="password"
                      placeholder="Re-type Password"
                      name="password_confirmation"
                    />
                    <div class="text-center">
                      <soft-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="info"
                        full-width
                        :is-disabled="loading ? true : false"
                      >
                        <span
                          v-if="loading"
                          class="spinner-border spinner-border-sm"
                        ></span>
                        <span v-else>Change</span>
                      </soft-button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8"
              >
                <div
                  class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/curved-images/curved6.jpg') +
                      ')',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import SoftField from "@/components/SoftField.vue";
import SoftButton from "@/components/SoftButton.vue";
const body = document.getElementsByTagName("body")[0];
import { Form } from "vee-validate";
import * as yup from "yup";
import showSwal from "/src/mixins/showSwal.js";

import { mapMutations } from "vuex";
export default {
  name: "ResetPassword",
  components: {
    Navbar,
    AppFooter,
    SoftField,
    SoftButton,
    Form,
  },

  data() {
    const schema = yup.object().shape({
      password: yup
        .string()
        .required("Password is required!")
        .min(8, "Password must be atleast 8 characters long!"),
      password_confirmation: yup
        .string()
        .test("passwords-match", "Passwords must match", function (value) {
          return this.parent.password === value;
        }),
    });
    const user = {
      email: this.$route.query.email,
      token: this.$route.query.token,
      password: "",
      password_confirmation: "",
    };
    return {
      loading: false,
      user,
      schema,
    };
  },
  created() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),

    async handleResetPassword() {
      this.loading = true;

      try {
        await this.$store.dispatch("reset/resetPassword", this.user);
        delete this.user.token;
        delete this.user.password_confirmation;
        await this.$store.dispatch("auth/login", this.user);
        this.loading = false;
        showSwal.methods.showSwal({
          type: "success",
          message:
            "Password changed successfully! You have been automatically logged in.",
          width: 850,
        });
        this.$router.push("/profile");
      } catch (error) {
        showSwal.methods.showSwal({
          type: "error",
          message: "Oops, something went wrong!",
          width: 350,
        });
        this.loading = false;
      }
    },
  },
};
</script>
