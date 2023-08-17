<template>
    <div class="body">
<div class="main">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active ">
                <img alt="..." src="https://images.pexels.com/photos/12491908/pexels-photo-12491908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block text-center carouselitem2">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="difre">EQUIPMENT, PERSONAL CARE ITEMS AND TOOLS</h5>
                    <p class="fredi"> Access most care items and our provision of healthcare equipment and tools.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img alt="..." src="https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block text-center carouselitem2">

                <div class="carousel-caption d-none d-md-block">
                    <h5 class="difre">NUTRITION AND PHARMACEUTICAL CARE</h5>
                    <p class="fredi">Management of client medication plans and maintenance of healthy diet habits.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img alt="..." src="https://images.pexels.com/photos/6098057/pexels-photo-6098057.jpeg?auto=compress&cs=tinysrgb&w=600" class="text-center carouselitem2">
                <h5 class="difre">TRAINED NURSES, THERAPISTS AND CAREGIVERS</h5>
                <p class="fredi">Professional attendants who provide best healthcare services.</p>
            </div>

        </div>

    </div>

</div>
<section class="">
    <div class="paragraph1">
        Through trained nurses, caregivers and therapists we offer a wide range of home healthcare services that enable our patients to live in their home, enjoy greater independence,and receive adequate support and care to enhance their comfort and dignity every day.
    </div>
</section>
<aside class="aside"><img src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="mh-75 d-block firstimage3" alt="..."></aside>
<div class="paragraphcare">
    we care for you </div>
<div class="justify-content-lg-end col text-center">
    <router-link to="/Contact">
        <div class="button-container">
        <button class=" btn btn-primary btn-lg ">REQUEST CALL</button>
        </div>
    </router-link>
    
</div>
<section class="">

</section>
</div>
<!-- Footer -->
<footer class="page-footer font-small blue pt-4">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

        <!-- Grid row -->
        <div class="row">

            <!-- Grid column -->
            <div class="col-md-6 mt-md-0 mt-3">

                <!-- Content -->
                <h5 class="text-uppercase">MAISHA HOME CARE</h5>
                <p>Here at Maisha Home Care your health is our number 1 priority.</p>

            </div>
            <!-- Grid column -->

            <hr class="clearfix w-100 d-md-none pb-3">

            <!-- Grid column -->
            <div class="col-md-3 mb-md-0 mb-3">
                Nairobi City Ave, City Centre
                <hr>
                Nairobi
                <hr>
                +254741192882
                <hr>
                P.O BOX 456-00100
                <hr>
                Kenya

            </div>
        </div>

    </div>

    <div class="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="/">MaishaCare.com</a>
    </div>

</footer>
</template>

<script>
export default {
    name: 'BodyBody',
    metaInfo: {
    title: 'Best in Kenya',
    meta: [
      { name: 'description', content: 'Find the best nursing home care and health care in Kenya here.' }
    ]
  },
};
</script>

<style>
.main{
    justify-content: center;
}
.body{ 
    padding-left: 10px;
    padding-right: 16px;
    margin-right: 20%;
}
.firstimage3 {
    border: 12.5 %;
    border-radius: 15%;
    height: 40%;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    pointer-events: none;
    pointer-events: none;
}
.carouselitem1{
    border: 12.5 %;
    height: 20%;
    width: 80%;
    border-radius: 10%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    pointer-events: none;

}
.carouselitem2{
    border: 12.5 %;
    height: 40%;
    border-radius: 10%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    pointer-events: none;

}
.carouselitem3{
    border: 12.5 %;
    height: 20%;
    width: 35%;
    border-radius: 10%;
    align-self: center;
    pointer-events: none;
}
.firstimage3doc {
    border: 12.5 %;
    border-radius: 15%;
    height: 35%;
    width: 25%;
    align-items: center;
}

.carouselitem {
    border: 12.5 %;
    border-radius: 10%;
    justify-content: center;
    align-items: center;
    align-items: center;
    height: 70%;
    width: 60%;

}.carouselitem2 {
    border: 12.5%;
    border-radius: 10%;
    max-height: 40%; /* Set a maximum height to prevent images from becoming too large */
    display: block;
    margin-left: auto;
    margin-right: auto;
    pointer-events: none;
    max-width: 100%; /* Make the image responsive */
}

.firstimage3 {
    border: 12.5%;
    border-radius: 15%;
    max-height: 40%; /* Set a maximum height to prevent images from becoming too large */
    max-width: 50%; /* Make the image responsive */
    display: block;
    margin-left: auto;
    margin-right: auto;
    pointer-events: none;
}.imagesize{
    width:200px ;
    height: 200px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-items: center;
    text-align: center;
}
.button-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
}
.paragraphcare{
    padding-top: 5%;
    padding-bottom: 5%;
    text-align: center;
    color: rgb(211, 203, 203);
    font-size: 3em;
    font-weight: bolder;
    text-transform: capitalize;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.paragraph1{
    padding-top: 5%;
    padding-bottom: 5%;
    margin-left: 10%;
    font-size: 2em;
    text-align: center;
}.difre{
    color: blue;
}.fredi{
    color: yellow;
}
</style>
