<template>
<HomeComponent />

<div id="nav">
    <v-app>
        <RouterView />
    </v-app>

</div>
</template>

<script>
import HomeComponent from './components/HeaderComponent.vue'
export default {
    name: 'App',
    metaInfo: {
    title: 'Best in Kenya',
    meta: [
      { name: 'description', content: 'Find the best things in Kenya here.' }
    ]
  },
    components: {
        HomeComponent,
    },
     mounted() {
    this.$router.push({ name: 'ServicesComponent' })
  },
}
</script>

<style>
nav {
    position: relative;
    height: top;
}
</style>
