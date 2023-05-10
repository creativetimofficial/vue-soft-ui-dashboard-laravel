import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import ProfileTemplate from "../views/ProfileTemplate.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import SendEmail from "../views/SendEmail.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Profile from "@/views/Profile.vue";
import Users from "../views/Users.vue";
import store from "/src/store";
import guest from "../middlewares/guest.js";
import auth from "../middlewares/auth.js";

function middlewarePipeline(context, middleware, index) {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) {
    return context.next;
  }

  return () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1);

    nextMiddleware({ ...context, next: nextPipeline });
  };
}


const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profileTemplate",
    name: "ProfileTemplate",
    component: ProfileTemplate,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      middleware: [guest],
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      middleware: [guest],
    },
  },
  {
    path: "/password/email",
    name: "SendEmail",
    component: SendEmail,
    meta: {
      middleware: [guest],
    },
  },
  {
    path: "/password/reset",
    name: "ResetPassword",
    component: ResetPassword,
    meta: {
      middleware: [guest],
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  const context = {
    to,
    from,
    next,
    store,
  };

  if (!to.meta.middleware) {
    auth({ ...context, next: next });
  }
  const middleware = to.meta.middleware;

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
