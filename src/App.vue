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
    components: {
        HomeComponent,
    }
}
</script>

<style>
nav {
    position: relative;
    height: top;
}
</style>
