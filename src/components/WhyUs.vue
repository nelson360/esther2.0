<template>
  <HeaderComponent/>
  <section class="body d-flex flex-column min-vh-100">
    <div class="container">
      <h2 class="vtitle mt-5 mb-4">Our Values</h2>
      <ul class="list-group mb-5">
        <li class="list-group-item bg-light border-0">
          <b>Dedication</b>: We are dedicated to offering patients and their families efficient service and great value for their money.
        </li>
        <li class="list-group-item bg-light border-0">
          <b>Empathy</b>: We are devoted to providing a warm, friendly, and caring environment in which patients can recover.
        </li>
        <li class="list-group-item bg-light border-0">
          <b>Inspiration</b>: We inspire our staff to achieve the extraordinary and develop the best careers.
        </li>
        <li class="list-group-item bg-light border-0">
          <b>Quality</b>: We pursue superior performance and quality to build and preserve our clinical, organizational, and financial strength.
        </li>
        <li class="list-group-item bg-light border-0">
          <b>Partnerships</b>: We value strong internal and external partnerships to accomplish our goals.
        </li>
      </ul>
    </div>

    <div class="container">
      <h2 class="vtitle mt-4 mb-4">Our Staff</h2>
      <p class="butita text-center">
        We constantly strive to provide a consistent and high-quality service. We do this through our staff. We recruit motivated and compassionate people, then develop, manage, and invest heavily in their training so that they not only do an excellent job but love their jobs, too. This makes for happier services for the people we support. We're here to help in any way we can, so please don't hesitate to get in touch.
      </p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="page-footer font-small special-color-dark mt-auto">
    <!-- Footer Elements -->
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-4">
          <!-- Form -->
          <form class="form-inline">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
            <i class="fas fa-search" aria-hidden="true"></i>
          </form>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-6 mb-4">
          <form class="input-group">
            <input type="text" class="form-control form-control-sm" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2" />
            <div class="input-group-append">
              <button class="btn btn-sm btn-outline-light my-0" type="button">Sign up</button>
            </div>
          </form>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Footer Elements -->

    <!-- Copyright -->
    <div class="footer bg-dark text-white py-3">
      <div class="container text-center">
        © 2023 Copyright: <a href="/"> maishacare.com</a>
      </div>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
import HeaderComponent from '/src/components/HeaderComponent.vue';
export default {
  name: 'WhyUs',
  metaInfo: {
    title: 'Our Values',
    meta: [
      { name: 'Our Values', content: 'Find the best things in Kenya here. Dedication We are dedicated to offering patients and their families efficient service and great value for their money' },
    ],
  },
  components: {
    HeaderComponent,
  }
};
</script>

<style scoped>
.vtitle {
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  color: #333;
  text-shadow: 1px 1px #fff;
  letter-spacing: 2cap;
}

.butita {
  font-size: larger;
}

.list-group {
  font-size: larger;
}

.page-footer {
  background-color: #343a40;
  color: #fff;
}

.footer-container {
  max-width: 960px;
  margin: 0 auto;
}

.footer-text {
  margin: 0;
}
</style>
