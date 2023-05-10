<template>
  <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
  <footer class="py-5 footer">
    <div class="container">
      <div class="row">
        <div class="mx-auto mb-4 text-center col-lg-8">
          <a
            href="https://www.creative-tim.com/?_ga=2.34562209.1248869815.1676371796-488167801.1673440336"
            target="_blank"
            class="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
          >
            Creative Tim
          </a>
          <a
            href="https://updivision.com/"
            target="_blank"
            class="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
          >
            UPDIVISION
          </a>
          <a
            href="https://www.creative-tim.com/presentation?_ga=2.34562209.1248869815.1676371796-488167801.1673440336"
            target="_blank"
            class="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
          >
            About us
          </a>
          <a
            href="https://www.creative-tim.com/blog/?_ga=2.34562209.1248869815.1676371796-488167801.1673440336"
            target="_blank"
            class="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
          >
            Blog
          </a>
          <a
            href="https://www.creative-tim.com/license?_ga=2.34562209.1248869815.1676371796-488167801.1673440336"
            target="_blank"
            class="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
          >
            Licenses
          </a>
        </div>
        <div class="mx-auto mt-2 mb-4 text-center col-lg-8">
          <a
            href="https://www.facebook.com/CreativeTim/"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-facebook"></span>
          </a>
          <a
            href="https://twitter.com/creativetim"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-twitter"></span>
          </a>
          <a
            href="https://www.instagram.com/creativetimofficial/"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-instagram"></span>
          </a>
          <a
            href="https://github.com/creativetimofficial"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-github"></span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="mx-auto mt-1 text-center col-8">
          <p class="mb-0 text-secondary">
            Copyright © {{ new Date().getFullYear() }} Soft by
            <a
              href="https://www.creative-tim.com"
              class="font-weight-bold"
              target="_blank"
              >Creative Tim</a
            >
            and
            <a
              href="https://updivision.com/"
              class="font-weight-bold"
              target="_blank"
              >UPDIVISION</a
            >.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
