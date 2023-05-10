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
                  <p class="mb-0">
                    You will receive an e-mail in maximum 60 seconds
                  </p>
                </div>
                <div class="pb-3 card-body">
                  <Form
                    role="form"
                    class="text-start"
                    :validation-schema="schema"
                    @submit="handleSendEmail"
                  >
                    <label for="email">Email</label>

                    <soft-field
                      id="email"
                      v-model="email"
                      type="email"
                      placeholder="Email"
                      name="email"
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
                        <span v-else>Send</span>
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
import showSwal from "/src/mixins/showSwal.js";
const body = document.getElementsByTagName("body")[0];
import { Form } from "vee-validate";
import * as yup from "yup";

import { mapMutations } from "vuex";
export default {
  name: "SendEmail",
  components: {
    Navbar,
    AppFooter,
    SoftField,
    SoftButton,
    Form,
  },

  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email is required!")
        .email("Must be a valid email! ex.: name@company.domain"),
    });
    return {
      loading: false,
      email: "",
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

    async handleSendEmail() {
      this.loading = true;

      if ((process.env.VUE_APP_IS_DEMO ?? 1) == 1) {
        showSwal.methods.showSwal({
          type: "error",
          message: "Password reset is disabled in the demo",
          width: 450,
        });
      } else {
        try {
          await this.$store.dispatch("reset/sendEmail", this.email);
          this.loading = false;
          showSwal.methods.showSwal({
            type: "success",
            message: "Email sent! Please check your inbox.",
            width: 450,
          });
        } catch (error) {
          showSwal.methods.showSwal({
            type: "error",
            message: "This email is not registered!",
            width: 350,
          });
        }
      }

      this.loading = false;
    },
  },
};
</script>
