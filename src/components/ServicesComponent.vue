<template>

    <div class="container">
  
      <h1 class="page-title">Our Services</h1>
  
      <section class="services-section">
  
        <div class="service-item">
          <h2 class="service-title">HOME NURSING CARE SERVICES</h2>
          <hr class="service-divider">
          <p class="service-description">
            We provide critical patient care, post-surgery care, post-natal care, hospice care, maintaining patient and environment safety, palliative care, dementia/Alzheimer’s patient care, colostomy bag care, skin care, decubitus ulcers (pressure/bed sores) care, infant baby care, wound dressing and care.
          </p>
        </div>
  
        <div class="service-item">
          <h2 class="service-title">THERAPY SERVICES</h2>
          <hr class="service-divider">
          <p class="service-description">
            We provide therapy services to patients at the comfort of their homes. Our professional and licensed therapist plan and attend to patients on agreed scheduled times at their homes. This flexible plan is convenient, less costly and reduces time consumed on the part of our client.
          </p>
        </div>
  
        <div class="service-item">
          <h2 class="service-title">DIET PLANNING AND EDUCATION</h2>
          <hr class="service-divider">
          <p class="service-description">
            We provide results-oriented professional counseling services to individual patients and/or their families and group.
          </p>
        </div>
  
        <div class="service-item">
          <h2 class="service-title">COUNSELLING SERVICES</h2>
          <hr class="service-divider">
          <p class="service-description">
            We provide results-oriented professional counseling services to individual patients and/or their families and group.
          </p>
        </div>
  
      </section>
  
      <footer class="page-footer">
        <div class="footer-container">
          <p class="footer-text">© 2023 maishahomecare.com</p>
        </div>
      </footer>
  
    </div>
  
  </template>
  
  <script>
  export default {
    name: 'ServicesComponent',
    metaInfo: {
    title: 'Best in Kenya HOME NURSING CARE SERVICES,DIET PLANNING AND EDUCATION,THERAPY SERVICES,COUNSELLING SERVICES',
    meta: [
      { name: 'description', content: 'We provide results-oriented professional counseling services to individual patients and/or their families and group' }
    ]
  },
  }
  </script>
  
  <style>
  /* General Styles */
  
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .page-title {
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 36px;
    text-align: center;
  }
  
  /* Services Styles */
  
  .services-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
  }
  
  .service-item {
    flex-basis: 300px;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .service-title {
    font-size: 24px;
    margin-top: 0;
  }
  
  .service-divider {
    border-top: 1px solid #ccc;
  }
  
  .service-description {
    margin-top: 20px;
    font-size: 120%;
  }
  
  /* Footer Styles */
  
  .page-footer {
    background-color: #3f51b5;
    color: #fff;
    padding: 20px;
    text-align: center;
  }
  
  .footer-container {
    max-width: 960px;
    margin: 0 auto;
  }
  
  .footer-text {
    margin: 0;
  }
  </style>
  