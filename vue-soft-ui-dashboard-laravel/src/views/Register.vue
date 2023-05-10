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
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-5 card card-plain">
                <div class="card-header pb-0 text-left">
                  <h3 class="font-weight-bolder text-success text-gradient pt-5">
                    Join us today
                  </h3>
                  <p class="mb-0">Enter your email and password to register</p>
                </div>
                <div class="card-body pb-3">
                  <Form
                    role="form"
                    class="text-start"
                    :validation-schema="schema"
                    @submit="handleRegister"
                  >
                    <div>
                      <label>Username</label>
                      <soft-field
                        id="name"
                        v-model="user.name"
                        type="text"
                        placeholder="Name"
                        name="name"
                      />
                      <label>Email</label>
                      <soft-field
                        id="email"
                        v-model="user.email"
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
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
                      <soft-check-model
                        id="agreed"
                        v-model="agreed"
                        name="agreed"
                        class="font-weight-light terms"
                      >
                        I agree with the
                        <a href="#" class="text-dark font-weight-bolder"
                          >Terms and Conditions</a
                        >
                      </soft-check-model>
                      <div>
                        <span
                          v-if="showError"
                          role="alert"
                          class="error-feedback text-xs text-danger"
                          >Please accept the Terms and Conditions!</span
                        >
                        <sp v-else> &nbsp;</sp>
                      </div>
                      <div class="text-center">
                        <soft-button
                          color="success"
                          variant="gradient"
                          full-width
                          class="mt-2 mb-2"
                          :is-disabled="loading ? true : false"
                          ><span
                            v-if="loading"
                            class="spinner-border spinner-border-sm"
                          ></span>
                          <span v-else>Sign up</span></soft-button
                        >
                      </div>
                    </div>
                  </Form>
                </div>

                <div class="card-footer text-center pt-0 px-sm-4 px-1">
                  <p class="mb-4 mx-auto">
                    <span>Already have an account?</span>
                    <router-link
                      :to="{ name: 'Login' }"
                      class="text-success text-gradient font-weight-bold"
                    >
                      Sign in
                    </router-link>
                  </p>
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
                      require('@/assets/img/curved-images/curved11.jpg') +
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
import SoftCheckModel from "@/components/SoftCheckModel.vue";
import SoftButton from "@/components/SoftButton.vue";
import showSwal from "/src/mixins/showSwal.js";
const body = document.getElementsByTagName("body")[0];
import { Form } from "vee-validate";
import * as yup from "yup";

import { mapMutations } from "vuex";
export default {
  name: "Register",
  components: {
    Navbar,
    AppFooter,
    SoftField,
    SoftCheckModel,
    SoftButton,
    Form,
  },
  data() {
    const schema = yup.object().shape({
      name: yup.string().required("Please input a username!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Must be a valid email! ex.: name@company.domain"),
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
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
    return {
      agreed: false,
      loading: false,
      user,
      schema,
      showError: false,
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

    async handleRegister() {
      this.loading = true;

      if (!this.agreed) {
        this.showError = true;
      } else {
        this.showError = false;
        try {
          await this.$store.dispatch("auth/register", this.user);
          this.loading = false;
          showSwal.methods.showSwal({
            type: "success",
            message:
              "Successfully registered! You have been automatically logged in.",
            width: 600,
          });
          this.$router.push("/profile");
        } catch (error) {
          showSwal.methods.showSwal({
            type: "error",
            message: "This email has already been registered.",
            width: 500,
          });
        }
      }
      this.loading = false;
    },
  },
};
</script>
<style>
.terms {
  font-size: 14px;
}
</style>
