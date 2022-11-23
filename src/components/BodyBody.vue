<template>
<div class="main">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img alt="..." src="/pic/pexels-denis-ngai-7303292.jpg" class="d-block text-center carouselitem">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="difre">EQUIPMENT, PERSONAL CARE ITEMS AND TOOLS</h5>
                    <p class="fredi"> Access most care items and our provision of healthcare equipment and tools.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img alt="..." src="/pic/pexels-towfiqu-barbhuiya-8395812.jpg" class="d-block text-center carouselitem">

                <div class="carousel-caption d-none d-md-block">
                    <h5 class="difre">NUTRITION AND PHARMACITICAL CARE</h5>
                    <p class="fredi">Management of client medication plans and maintenance of healthy diet habits.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img alt="..." src="/pic/pexels-cottonbro-5722164.jpg" class="text-center firstimage3doc">
                <h5 class="difre">TRAINED NURSES, THERAPISTS AND CAREGIVERS</h5>
                <p class="fredi">Professional attendants who provide best healthcare services.</p>
            </div>

        </div>

    </div>

</div>
<section class="">
    <p class="paragraph1">
        Through trained nurses, caregivers and therapists we offer a wide range of home healthcare services that enable our patients to live in their home, enjoy greater independence,and receive adequate support and care to enhance their comfort and dignity every day.
    </p>
</section>
<aside class="aside"><img src="/pic/pexels-karolina-grabowska-4386466.jpg" class="mh-75 d-block firstimage3" alt="..."></aside>
<p class="paragraphcare">
    we care for <span id="spancare">you and your loved ones</span>
</p>
<div class="justify-content-lg-end col text-center">
    <router-link to="/ContactComponent"><button class=" btn btn-primary btn-lg ">REQUEST CALL</button></router-link>
    
</div>
<section class="">

</section>

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

            </div>
        </div>

    </div>

    <div class="footer-copyright text-center py-3">© 2022 Copyright:estercare.com
        <a href="/">esthercare.com</a>
    </div>

</footer>
</template>

<script>
export default {
    name: 'BodyBody'

};
</script>

<style>
.main{
    justify-content: center;
}
.firstimage3 {
    border: 2px;
    border-radius: 15%;
    height: 40%;
    width: 55%;
    align-self: center;
}

.firstimage3doc {
    border: 2px;
    border-radius: 15%;
    height: 35%;
    width: 25%;
    align-items: center;
}

.carouselitem {
    border: 2px;
    border-radius: 15%;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    height: 70%;
    width: 60%;

}
</style>
