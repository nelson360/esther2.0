<template>
<div id="nav">
    <v-app>
        <RouterView />
    </v-app>

</div>
</template>
<script>

export default {
    name: 'App',
    metaInfo: {
    title: 'Best in Kenya',
    meta: [
      { name: 'description', content: 'Find the best things in Kenya here.' }
    ]
  },
  
     mounted() {
    this.$router.push({ name: 'HomeComponent' })
  },
}
</script>

<style>
nav {
    position: relative;
    height: top;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
body{
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
</style>
