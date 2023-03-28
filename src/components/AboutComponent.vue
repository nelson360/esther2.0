<template>
    <div>
      <p class="pmission">Mission</p>
      <div class="component">To inspire hope and contribute to health and well-being by providing the best care to every patient through integrated clinical practice, education, and research.</div>
      <p class="pvision">Vision</p>
      <div class="component">To be a regional, national, and international leader in nursing care and services.</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutComponent',
  }
  </script>
  
  <style>
  body {
    background-image: url(/src/assets/pictures/pexels-johannes-plenio-1103970.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .pmission {
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;
    padding: 2rem;
    color: #fff;
  }
  
  .pvision {
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;
    padding: 2rem;
    color: #fff;
  }
  .component{
    text-emphasis:initial;
    font-size: 3ch;
    text-align: center;
    text-overflow: clip;
    
  }
  </style>
  