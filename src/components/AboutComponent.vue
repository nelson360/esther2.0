<template>
<HeaderComponent/>
  <div class="about-container">
    <div class="mission">
      <p class="heading">Mission</p>
      <div class="content">To inspire hope and contribute to health and well-being by providing the best care to every patient through integrated clinical practice, education, and research.</div>
    </div>
    <div class="vision">
      <p class="heading">Vision</p>
      <div class="content">To be a regional, national, and international leader in nursing care and services.</div>
    </div>
  </div>
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
  name: 'AboutComponent',
  metaInfo: {
    title: 'Nursing Home Care and Health Care',
    meta: [
      { name: 'description', content: 'Find the best nurses in Kenya here.' }
    ]
  },components: {
    HeaderComponent,
  }
  
};
</script>

<style>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.mission,
.vision {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 1.5rem;
  padding: 2rem;
  max-width: 800px;
  text-align: center;
}

.heading {
  font-size: 2.5rem;
  text-transform: capitalize;
  margin-bottom: 1rem;
}

.content {
  font-size: 1.8rem;
  line-height: 1.5;
}

/* Background Image Styles */
body {
  margin: 0;
  background-image: url('https://www.pexels.com/photo/gray-and-white-wallpaper-1103970/');
  background-repeat: no-repeat;
  background-color: grey;
  background-image: cover;
  font-family: Arial, sans-serif;
}
</style>
