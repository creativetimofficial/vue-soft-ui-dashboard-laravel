# [Vue Soft UI Dashboard Laravel](https://vue-soft-ui-dashboard-laravel.creative-tim.com?ref=readme-vsudp) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?url=https://www.creative-tim.com/product/vue-soft-ui-dashboard-laravel&text=Check%20Vue%20Soft%20UI%20Dashboard%20Pro%20made%20by%20@CreativeTim%20#webdesign%20#dashboard%20#softdesign%20#vue%20https://www.creative-tim.com/product/vue-soft-ui-dashboard-laravel)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/vue-soft-ui-dashboard-laravel.svg)](https://github.com/creativetimofficial/vue-soft-ui-dashboard-laravel/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/vue-soft-ui-dashboard-laravel.svg)](https://github.com/creativetimofficial/vue-soft-ui-dashboard-laravel/issues?q=is%3Aissue+is%3Aclosed)

![Image](https://s3.amazonaws.com/creativetim_bucket/products/733/original/vue-soft-ui-dashboard-laravel.jpg?1683201400)

What if your frontend came not only with reusable components, but also with a reusable backend? API-driven development is more than just a buzzword and we partnered with [UPDIVISION](https://updivision.com) to prove it. Build awesome-looking apps with a flexible architecture across a variety of devices and operating systems with Vue Soft UI Dashboard Laravel.

If you want to get more features, go PRO with [Vue Soft UI Dashboard PRO Laravel](http://demos.creative-tim.com/vue-soft-ui-dashboard-pro/?ref=readme-vsudp).

# Download

For the free version of the project you can either

- download the .zip file from the Creative Tim site and extract it or
- make a clone from the Github repository
You will get two project folders: one for the Laravel API project and one for the Vue frontend.

# Laravel API Setup

## Introduction

JSON:API is a specification for how a client should request that resources be fetched or modified, and how a server should respond to those requests. It is designed to minimize both the number of requests and the amount of data transmitted between clients and servers. This efficiency is achieved without compromising readability, flexibility, or discoverability.

[Click here to go to the JSON:API docs](https://explore.postman.com/api/6357/laravel-jsonapi)

## Prerequisites

### JSON:API backend
The Laravel JSON:API backend project requires a proper multi-threaded web server such as Apache/Nginx environment with PHP, Composer and MySQL.

**Do not use `php artisan serve` as it will result in stalled requests due to the single-threaded nature of the built-in PHP web server.**

We strongly recommend using [Laradock](https://laradock.io/) for Linux and Mac or [Laragon](https://laragon.org/download/) for Windows if possible.

Other options for your local environment:
- Windows: [How to install WAMP on Windows](https://updivision.com/blog/post/beginner-s-guide-to-setting-up-your-local-development-environment-on-windows)
- Linux & Mac: [How to install LAMP on Linux & Mac](https://updivision.com/blog/post/guide-what-is-lamp-and-how-to-install-it-on-ubuntu-and-macos)

You will also need to install Composer 2: [https://getcomposer.org/doc/00-intro.md](https://getcomposer.org/doc/00-intro.md)

### Vue Soft UI frontend
The Vue frontend project requires a working local environment with NodeJS version 16.15.0 or above (16.15.0 recommended), npm, VueCLI.

Install Node: https://nodejs.org/ (version 16.15.0 recommended)

Install NPM: https://www.npmjs.com/get-npm

Install VueCLI: https://cli.vuejs.org/guide/installation.html

## Laravel API Project Installation

1. Navigate in your Laravel API project folder: `cd your-laravel-json-api-project`
2. Install project dependencies: `composer install`
3. Create a new .env file: `cp .env.example .env`
4. Add your own database credentials in the .env file in DB_DATABASE, DB_USERNAME, DB_PASSWORD
5. Create users table: `php artisan migrate --seed`
6. Generate application key: `php artisan key:generate`
7. Install Laravel Passport: `php artisan passport:install` and set in the .env file the CLIENT_ID and CLIENT_SECRET that you receive
8. Add your own mailtrap.io credentials in MAIL_USERNAME and MAIL_PASSWORD in the .env file

## Vue Soft UI Dashboard Project Installation

1. Navigate to your Vue Soft UI Dashboard project folder: `cd your-vue-soft-ui-dashbord-project`
2. Install project dependencies: `npm install`
3. Create a new .env file: `cp .env.example .env`
4. `VUE_APP_BASE_URL` should contain the URL of your Vue Soft UI Dashboard Project (eg. http://localhost:8080/)
5. `VUE_APP_API_BASE_URL` should contain the URL of your Laravel JSON:API Project. (eg. http://localhost:3000/api/v1)
6. Run `npm run dev` to start the application in a local development environment or `npm run build`  to build release distributables.

## Usage

Register a user or login using admin@jsonapi.com and secret and start testing the theme.

Besides the dashboard and the auth pages this theme also has an edit profile page. All the necessary files are installed out of the box and all the needed routes are added to src\router\index.js. Keep in mind that all the features can be viewed once you log in using the credentials provided above or by registering your own user.

### Dashboard

You can access the dashboard either by using the "**Dashboards/Default**" link in the left sidebar or by adding **dashboards/dashboard-default** in the URL.

### Login

The login functionality is fully implemented in our theme helping you to start your project in no time. To login into dashboard you just have to add **/login** in the URL and fill the login form with one of the credentials (user: **admin@jsonapi.com** and password: **secret**).

The `src\views\auth\signin\Login.vue` is the Vue component which handles the login functinality. You can easily adapt it to your needs.

It uses the auth store located in `src\store\auth.module.js`.

#### Login Component

```
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
                  <h3 class="font-weight-bolder text-success text-gradient">
                    Welcome back
                  </h3>
                  <br />
                  <div class="text-center">
                    <p>You can log in with 3 user types:</p>
                    <p style="font-size: 14px">
                      Username <b>admin@jsonapi.com</b> Password <b>secret</b>
                    </p>
                  </div>
                </div>
                <div class="card-body">
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
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-0 text-sm">
                    Don't have an account?
                    <router-link
                      :to="{ name: 'Register' }"
                      class="text-success text-gradient font-weight-bold"
                      >Sign up</router-link
                    >
                  </p>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
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
```

### Register

The register functionality is fully implemented in our theme helping you to start your project in no time. To register a new user you just have to add **/register** in the URL or click on register link from login page and fill the register form with user details.

The `src\views\auth\signup\Register.vue` is the Vue component which handles the login functinality. You can easily extend it to your needs.

It uses the auth store located in `src\store\auth.module.js`.

#### Register component

```
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
                <h3 class="font-weight-bolder text-success text-gradient">
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
                        class="mt-4 mb-2"
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
```

### Profile edit

You have the option to edit the current logged in user's profile information (name, email, profile picture) and password. To access this page, just click the "**Examples/Profile**" link in the left sidebar or add **/examples/profile** in the URL.

The `src\views\examples\Profile.vue` is the folder with Vue components that handle the update of the user information and password.

#### Profile component

```
  <div class="container-fluid mt-4">
    <div id="profile" class="card card-body mt-4">
      <div v-if="profile" class="row justify-content-center align-items-center">
        <div class="col-sm-auto col-4">
          <soft-avatar
            :img="pic"
            alt="profile"
            size="xl"
            shadow="sm"
            border-radius="lg"
          />
        </div>
        <div class="col-sm-auto col-8 my-auto">
          <div class="h-100">
            <h5 class="mb-1 font-weight-bolder">{{ profile.name }}</h5>
            <p class="mb-0 font-weight-bold text-sm">{{ profile.email }}</p>
          </div>
        </div>

        <div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex">
          <label class="form-check-label mb-0 me-2">
            <small id="profileVisibility">Switch to invisible</small>
          </label>
          <soft-switch id="profile" name="profileVisibility" checked />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div id="basic-info" class="card mt-4">
          <div class="card-header">
            <h5>Basic Info</h5>
          </div>

          <div class="card-body pt-0">
            <label class="form-label">Profile picture</label><br />
            <img
              :src="preview"
              alt="placeholder"
              width="200"
              height="200"
              style="border-radius: 10px; border: 1px solid black"
            />

            <soft-image-input id="pfp" ref="pfp" @added-image="addedImage" />

            <soft-button
              v-if="!file"
              size="sm"
              color="info"
              @click="$refs.pfp.click()"
              >Select</soft-button
            >
            <soft-button
              v-if="file"
              size="sm"
              style="margin-right: 10px"
              color="info"
              @click="$refs.pfp.click()"
              >Change</soft-button
            >
            <soft-button
              v-if="file"
              size="sm"
              color="danger"
              @click="file = null"
              >Remove</soft-button
            >
            <validation-error :errors="apiValidationErrors.profile_image" />

            <div class="row mb-3 mt-4">
              <label class="form-label">Name</label>
              <soft-model-input
                id="name"
                v-model="profileChange.name"
                type="text"
                placeholder="Alec"
              />
              <validation-error :errors="apiValidationErrors.name" />
            </div>

            <div class="row mb-3">
              <label class="form-label mt-2">Email</label>
              <soft-model-input
                id="email"
                v-model="profileChange.email"
                type="email"
                placeholder="example@email.com"
              />
              <validation-error :errors="apiValidationErrors.email" />
            </div>

            <soft-button
              class="float-end mt-6 mb-0"
              color="dark"
              variant="gradient"
              size="sm"
              :is-disabled="loading2 ? true : false"
              @click="handleProfileChange"
              ><span
                v-if="loading2"
                class="spinner-border spinner-border-sm"
              ></span
              ><span v-else>Update profile</span></soft-button
            >
          </div>
        </div>
      </div>

      <div class="col-6">
        <div id="password" class="card mt-4">
          <div class="card-header">
            <h5>Change Password</h5>
          </div>

          <div class="card-body pt-0">
            <div class="row mb-3">
              <label class="form-label">New password</label>
              <soft-model-input
                id="newPassword"
                v-model="passChange.password"
                type="password"
                placeholder="New Password"
              />
              <validation-error :errors="apiValidationErrors.password" />
            </div>

            <div class="row mb-3">
              <label class="form-label">Confirm new password</label>
              <soft-model-input
                id="confirmPassword"
                v-model="passChange.password_confirmation"
                type="password"
                placeholder="Confirm password"
              />
            </div>

            <soft-button
              color="dark"
              variant="gradient"
              class="float-end mt-6 mb-0"
              size="sm"
              :is-disabled="loading ? true : false"
              @click="handlePassChange"
              ><span
                v-if="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span v-else>Update password</span></soft-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
```

## Table of Contents

- [Versions](#versions)
- [Demo](#demo)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Change Log](#change-log)
- [Reporting Issues](#reporting-issues)
- [Licensing](#licensing)
- [Useful Links](#useful-links)
- [Social Media](#social-media)
- [Credits](#credits)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/laravel_logo.png" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/vue.jpg" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/json-api.png" height="75" />](#)

## Demo

- [Dashboard](http://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/dashboards/dashboard-default?ref=readme-vsudp)
- [Automotive](http://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/dashboards/automotive?ref=readme-vsudp)
- [Virtual Reality](http://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/dashboards/vr/vr-default?ref=readme-vsudp)
- [Profile](https://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/pages/profile/overview?ref=readme-vsudp)
- [Account](https://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/pages/account/settings?ref=readme-vsudp)
- [RTL](https://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/pages/rtl-page?ref=readme-vsudp)
- [Applications](https://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/applications/kanban?ref=readme-vsudp)
- [Ecommerce](https://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/ecommerce/overview?ref=readme-vsudp)
- [Sign In](https://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/authentication/signin/basic?ref=readme-vsudp)
- [Sign Up](https://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/authentication/signup/basic?ref=readme-vsudp)

[View More](https://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/dashboards/dashboard-default?ref=readme-vsudp).

## Documentation

The documentation for the Soft UI Dashboard is hosted at our [website](https://www.creative-tim.com/learning-lab/vue/overview/soft-ui-dashboard/?ref=readme-vsudp).

## File Structure

Within the download you'll find the following directories and files:

```
vue-soft-ui-dashboard-pro
    ├── public
    │   ├── favicon.png
    │   └── index.html
    ├── src
    │   ├── assets
    │   │   ├── css
    │   │   ├── fonts
    │   │   ├── img
    │   │   ├── js
    │   │   └── scss
    │   ├── middlewares
    │   │   ├── auth.js
    │   │   └── guest.js
    │   ├── components
    │   │   ├─ Icon
    │   │   ├─ SoftAlert.vue
    │   │   ├─ SoftAvatar.vue
    │   │   ├─ SoftBadge.vue
    │   │   ├─ SoftButton.vue
    │   │   ├─ SoftCheckbox.vue
    │   │   ├─ SoftCheckModel.vue
    │   │   ├─ SoftField.vue
    │   │   ├─ SoftImageInput.vue
    │   │   ├─ SoftInput.vue
    │   │   ├─ SoftModelInput.vue
    │   │   ├─ SoftPagination.vue
    │   │   ├─ SoftPaginationItem.vue
    │   │   ├─ SoftProgress.vue
    │   │   ├─ SoftRadio.vue
    │   │   ├─ SoftSwitch.vue
    │   │   ├─ SoftTextarea.vue
    │   │   └─ ValidationError.vue
    │   ├── examples
    │   │   ├── Cards
    │   │   ├── Charts
    │   │   ├── Navbars
    │   │   ├── PageLayout
    │   │   ├── Sidenav
    │   │   ├── Breadcrumbs.vue
    │   │   ├── Configurator.vue
    │   │   └── Footer.vue
    |   ├─ mixins
    │   │  ├─ form-mixin.js
    │   │  └─ showSwal.js
    │   ├─ router
    │   │  └─ index.js
    │   ├─ services
    │   │  ├─ auth-header.js
    │   │  ├─ auth.service.js
    │   │  ├─ profile.service.js
    │   │  └─ reset.service.js
    │   ├─ store
    │   │  ├─ auth.module.js
    │   │  ├─ index.js
    │   │  ├─ profile.module.js
    │   │  └─ reset.module.js
    │   ├── views
    │   │   ├── components
    │   │   ├── Billing.vue
    │   │   ├── Dashboard.vue
    │   │   ├── Home.vue
    │   │   ├── Login.vue
    │   │   ├── Profile.vue
    │   │   ├── ProfileCT.vue
    │   │   ├── ProfileExample.vue
    │   │   ├── Register.vue
    │   │   ├── ResetPassword.vue
    │   │   ├── Rtl.vue
    │   │   ├── SendEmail.vue
    │   │   ├── SignIn.vue
    │   │   ├── SignUp.vue
    │   │   ├── Tables.vue
    │   │   ├── Users.vue
    │   │   └── VirtualReality.vue
    │   ├── App.vue
    │   ├── main.js
    │   └── soft-ui-dashboard.js
    ├── .browserslistrc
    ├── .eslintrc.js
    ├── .gitignore
    ├── babel.config.js
    ├── CHANGELOG.md
    ├── ISSUE_TEMPLATE.md
    ├── LICENSE.md
    ├── package.json
    └── README.md
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Resources

- [Live Preview](https://demos.creative-tim.com/vue-soft-ui-dashboard-pro/#/dashboards/dashboard-default?ref=readme-vsudp)
- [Buy Page](https://www.creative-tim.com/product/vue-soft-ui-dashboard-pro?ref=readme-vsudp)
- Documentation is [here](https://www.creative-tim.com/learning-lab/vue/overview/soft-ui-dashboard/?ref=readme-vsudp)
- [License Agreement](https://www.creative-tim.com/license?ref=readme-vsudp)
- [Support](https://www.creative-tim.com/contact-us?ref=readme-vsudp)
- Issues: [Github Issues Page](https://github.com/creativetimofficial/ct-soft-ui-dashboard-pro-react/issues)

## Change log

Please see the [changelog](CHANGELOG.md) for more information on what has changed recently.

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Soft UI Dashboard Laravel. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Soft UI Dashboard Laravel. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/product/vue-soft-ui-dashboard-pro?ref=readme-vsudp).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.


## Licensing

- Copyright 2021 [Creative Tim](https://www.creative-tim.com?ref=readme-vsudp)
- Creative Tim [license](https://www.creative-tim.com/license?ref=readme-vsudp)

## Useful Links

- [More products](https://www.creative-tim.com/templates?ref=readme-vsudp) from Creative Tim

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)

- [Freebies](https://www.creative-tim.com/bootstrap-themes/free?ref=readme-vsudp) from Creative Tim

- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=readme-vsudp) (earn money)

## Social Media

### Creative Tim:

Twitter: <https://twitter.com/CreativeTim?ref=vadpl-readme>

Facebook: <https://www.facebook.com/CreativeTim?ref=vadpl-readme>

Dribbble: <https://dribbble.com/creativetim?ref=vadpl-readme>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=vadpl-readme>

### Updivision:

Twitter: <https://twitter.com/updivision?ref=vadpl-readme>

Facebook: <https://www.facebook.com/updivision?ref=vadpl-readme>

Linkedin: <https://www.linkedin.com/company/updivision?ref=vadpl-readme>

Updivision Blog: <https://updivision.com/blog/?ref=vadpl-readme>

## Credits

- [Creative Tim](https://creative-tim.com/?ref=vadpl-readme)
- [UPDIVISION](https://updivision.com)
