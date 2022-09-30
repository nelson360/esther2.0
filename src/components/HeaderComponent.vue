<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/AboutComponent">About</router-link><br>
    <router-link to="/QualificationComponent">qualification</router-link><br>
    <router-link to="/ContactComponent">Contact</router-link><br>
</nav>
<RouterView />
</template>
<script>

export default {
  name: 'HeaderComponent',
  
}
</script>


<style></style>