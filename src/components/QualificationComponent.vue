<template>
    <HeaderComponent/>
    <section class="qualification">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center">Vacancies</h2>
            <div class="vacancy">
              <h4>RE:TNV/012/JUNE/15 - TRAINED NURSES VACANCY(5)</h4>
              <hr>
              <p>
                Diploma in any of the following Disciplines:<br>
                Kenya Registered Community Health Nursing, Kenya Registered Nursing; Kenya Registered Midwifery, Kenya Registered Nursing/Midwifery or Kenya Registered Nursing/Mental Health and Psychiatry from a recognized institution;<br>
                Registration Certificate issued by the Nursing Council of Kenya;<br>
                Valid practicing license from the Nursing Council of Kenya;<br>
                Certificate in computer application skills from a recognized institution
              </p>
            </div>
            <div class="vacancy">
              <h4>RE:TNV/013/JUNE/15 - TRAINED THERAPISTS(2)</h4>
              <hr>
              <p>
                Desired Skills & Qualifications<br>
                High School or secondary diploma required.<br>
                Massage certificate.<br>
                Beauty therapy certificate.<br>
                Aromatherapy certificate.<br>
                First Aid and CPR certificate (an advantage).<br>
                Knowledge of herbal therapy, body treatments and facials.<br>
                Knowledge in operating Spa machines and equipments.
              </p>
            </div>
            <div class="vacancy">
              <h4>RE:TNV/013/JUNE/15 - CAREGIVERS(3)</h4>
              <hr>
              <p>
                Personal attributes<br>
                Excellent interpersonal and communication skills both written and spoken.<br>
                Good organizational skills and keen to details.<br>
                Public relations and problem-solving skills.<br>
                Mature and confident with a sense of urgency in the execution of tasks.
              </p>
              <p class="mb-0">
                <b>Interested applicants should send their updated CVs and application letters to jobs@maishahomecare.com by 5.00 pm on 30th July 2022 with the email subject being the job title reference.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="footer">
      <!-- Footer -->
      <footer class="page-footer font-small special-color-dark pt-4 mt-auto">
        <div class="container text-center">
          <p>&copy; 2023 maishahomecare.com</p>
        </div>
      </footer>
      <!-- Footer -->
    </div>
    </section>
  </template>
  
  <script>
  import HeaderComponent from '/src/components/HeaderComponent.vue';
  export default {
      name: 'QualificationComponent',
      metaInfo: {
      title: 'Jobs in Kenya Nursing',
      meta: [
        { name: 'description', content: 'Find the best things in Kenya here.' }
      ]
    },
    components:{
        HeaderComponent,
    }
  }
  </script>
  
  <style>
  .qualification {
    padding: 3rem 0;
  }
  
  .vacancy {
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .vacancy h4 {
    color: #333;
  }
  
  .vacancy hr {
    margin: 1rem 0;
  }
  
  .vacancy p {
    color: #666;
  }
  
  .vacancy b {
    display: block;
    margin-top: 1rem;
    color: #333;
  }
  
  /* Footer Styles */
  .page-footer {
    padding-top: 2rem;
    background-color: #333;
    color: #fff;
  }
  
  .page-footer a {
    color: #fff;
  }
  
  .page-footer .form-control {
    width: 75%;
  }
  
  .page-footer .btn-outline-white {
    color: #fff;
    border-color: #fff;
  }
  
  .page-footer .btn-outline-white:hover {
    background-color: #fff;
    color: #333;
  }
  </style>
  