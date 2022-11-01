<template>
    <p>
        template contact form
    </p>

<section class="contact">
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">FULL NAME</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="FULL NAME">
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">CONTACT NUMBER</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="CONTACT NUMBER">
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">COUNTY</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>MOMBASA</option>
        <option>KISUMU</option>
        <option>NAIROBI</option>
        <option>NAKURU</option>
        <option>NAIVASHA</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="exampleFormControlTextarea1">DETAILS</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button class="btn btn-primary" type="submit">Submit form</button>
  </form>
  </section>

<!-- Footer -->
<footer class="page-footer font-small special-color-dark pt-4 mt-auto">

<!-- Footer Elements -->
<div class="container">

<!--Grid row-->
<div class="row">

<!--Grid column-->
<div class="col-md-6 mb-4">

<!-- Form -->
<form class="form-inline">
  <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
    aria-label="Search">
  <i class="fas fa-search" aria-hidden="true"></i>
</form>
<!-- Form -->

</div>
<!--Grid column-->

<!--Grid column-->
<div class="col-md-6 mb-4">

<form class="input-group">
  <input type="text" class="form-control form-control-sm" placeholder="Your email"
    aria-label="Your email" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-sm btn-outline-white my-0" type="button">Sign up</button>
  </div>
</form>

</div>
<!--Grid column-->

</div>
<!--Grid row-->

</div>
<!-- Footer Elements -->

<!-- Copyright -->
<div class="footer-copyright text-center py-3">© 2022 Copyright:
<a href="/"> esthercare.com</a>
</div>
<!-- Copyright -->

</footer>
</template>
<script>
    export default{
        name:'ContactComponent',
    }
</script>