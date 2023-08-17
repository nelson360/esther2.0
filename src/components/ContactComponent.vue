<template>
    <div>
      <HeaderComponent/>
      <section class="contact">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCFKPjip-W-wbi7JmOcpmMIWFnWC1tHOAq7cYREpOAX7K2Ug/viewform?embedded=true" frameborder="0" style="width: 100%; height: 100vh; border: none;">Loading…</iframe>
      </section>
  
      <!-- Footer -->
      <footer class="page-footer font-small special-color-dark pt-4 mt-auto">
        <div class="container text-center">
          <p>&copy; 2023 maishacare.com</p>
        </div>
      </footer>
      <!-- Footer -->
    </div>
  </template>
  
  <script>
  import HeaderComponent from '/src/components/HeaderComponent.vue';
  
  export default {
    name: 'ContactComponent',
    metaInfo: {
      title: 'maisha home care',
      meta: [
        { name: 'description', content: 'contact maisha salem here ' }
      ]
    },
    components:{
      HeaderComponent
    }
  }
  </script>
  
  <style>
  .contact {
    padding: 0 16px;
    margin: 0 auto;
  }
  
  .page-footer {
    background-color: #333;
    color: white;
    padding: 10px 0;
  }
  </style>
  