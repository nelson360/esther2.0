<template>
/* eslint-disable */
<p>.<img alt="Vue logo" src="/pictures/logo.png" class="firstimage2">
</p>

<body class="body d-flex flex-column min-vh-100">
    <main class="main">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img alt="..." src="/pictures/pexels-denis-ngai-7303292.jpg" class="d-block w-100 h-51">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="difre">EQUIPMENT, PERSONAL CARE ITEMS AND TOOLS</h5>
                        <p class="fredi"> Access most care items and our provision of healthcare equipment and tools.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img alt="..." src="/pictures/pexels-towfiqu-barbhuiya-8395812.jpg" class="d-block w-100 h-51">
                    <img alt="Vue logo" src="/pictures/pexels-towfiqu-barbhuiya-8395812.jpg" class="firstimage7">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="difre">NUTRITION AND PHARMACITICAL CARE</h5>
                        <p class="fredi">Management of client medication plans and maintenance of healthy diet habits.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img alt="..." src="/pictures/pexels-cottonbro-5722164.jpg" class="d-block w-100 h-25%">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="difre">TRAINED NURSES, THERAPISTS AND CAREGIVERS</h5>
                        <p class="fredi">Professional attendants who provide best healthcare services.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </main>
    <section class="">
        <p class="paragraph1">
            Through trained nurses, caregivers and therapists we offer a wide range of home healthcare services that enable our patients to live in their home, enjoy greater independence,and receive adequate support and care to enhance their comfort and dignity every day.
        </p>
    </section>
    <aside class="aside"><img src="/pictures/pexels-karolina-grabowska-4386466.jpg" class="mh-75 d-block w-100" alt="..."></aside>
    <p class="paragraphcare">we care for <span id="spancare">you and your loved ones</span></p>
    <div class="justify-content-lg-end"> <button onclick="location.href='/ContactComponent.vue'" class=" btn btn-primary btn-lg">REQUEST CALL</button></div>
    <section class="">

    </section>
    <ar class="">
        <marquee class="">index</marquee>
    </ar>
</body>

<!-- Footer -->
<footer class="page-footer font-small blue pt-4">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

        <!-- Grid row -->
        <div class="row">

            <!-- Grid column -->
            <div class="col-md-6 mt-md-0 mt-3">

                <!-- Content -->
                <h5 class="text-uppercase">ESTHER HOME CARE</h5>
                <p>Here at Esther Home Care your health is our number 1 priority.</p>

            </div>
            <!-- Grid column -->

            <hr class="clearfix w-100 d-md-none pb-3">

            <!-- Grid column -->
            <div class="col-md-3 mb-md-0 mb-3">
                Nairobi Serena Hoteltta Ave, City Centre
                <hr>
                Nairobi
                <hr>
                +254716300580
                <hr>
                P.O BOX 4565-00100
                <hr>
                Kenya

                <!-- 
    <h5 class="text-uppercase">contact us</h5>
    <div class="col-md-3 mb-md-0 mb-3 h2">
    <ul class="list-unstyled">
      <li>
        <a href="#!">Facebook</a>
      </li>
      <li>
        <a href="#!">Twitter</a>
      </li>
      <li>
        <a href="#!">LinkedIn</a>
      </li>
      <li>
        <a href="#!">GMail</a>
      </li>
    </ul>Links -->
            </div>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->

        <!-- Grid column -->

    </div>
    <!-- Grid row -->

    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2022 Copyright:estercare.com
        <a href="/">esthercare.com</a>
    </div>

</footer>
</template>

<script>
export default {
    name: 'BodyComponent',

}
</script>

<style></style>
