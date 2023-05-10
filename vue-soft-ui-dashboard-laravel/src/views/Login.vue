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
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-success text-gradient text-center">
                    Welcome back
                  </h3>
                  <br />
                  <div class="text-center">
                    <p class="mb-1">You can log in with 1 user types:</p>
                    <p class="mb-1" style="font-size: 14px">
                      Username <b>admin@jsonapi.com</b> Password <b>secret</b>
                    </p>
                  </div>
                </div>
                <div class="card-body pb-3">
                  <Form
                    role="form"
                    class="text-start"
                    :validation-schema="schema"
                    @submit="handleLogin"
                  >
                    <label for="email">Email</label>
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

                    <soft-switch id="rememberMe" name="rememberMe" checked>
                      Remember me
                    </soft-switch>

                    <div class="text-center">
                      <soft-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="success"
                        full-width
                        :is-disabled="loading ? true : false"
                      >
                        <span
                          v-if="loading"
                          class="spinner-border spinner-border-sm"
                        ></span>
                        <span v-else>Sign in</span>
                      </soft-button>
                    </div>
                  </Form>
                </div>
                <div class="px-1 pt-0 pb-3 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-0 text-sm">
                    Don't have an account?
                    <router-link
                      :to="{ name: 'Register' }"
                      class="text-success text-gradient font-weight-bold"
                      >Sign up</router-link
                    >
                  </p>
                </div>
                <div class="px-1 pt-0 pb-3 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Forgot your password?
                    <router-link
                      :to="{ name: 'SendEmail' }"
                      class="text-success text-gradient font-weight-bold"
                      >Recover</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8">
                <div
                  class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  :style="{
                    backgroundImage:
                      'url(' + require('@/assets/img/curved-images/curved9.jpg') + ')',
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
import SoftSwitch from "@/components/SoftSwitch.vue";
import SoftButton from "@/components/SoftButton.vue";
import showSwal from "/src/mixins/showSwal.js";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";
import { Form } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Navbar,
    AppFooter,
    SoftField,
    SoftSwitch,
    SoftButton,
    Form,
  },

  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email is required!")
        .email("Must be a valid email! ex.: name@company.domain"),
      password: yup.string().required("Password is required!"),
    });
    const user = {
      email: "admin@jsonapi.com",
      password: "secret",
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

    async handleLogin() {
      this.loading = true;
      try {
        await this.$store.dispatch("auth/login", this.user);
        this.$router.push("/dashboard");
      } catch (error) {
        showSwal.methods.showSwal({
          type: "error",
          message: "Invalid credentials!",
        });
        this.loading = false;
      }
    },
  },
};
</script>
