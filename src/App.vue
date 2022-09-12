<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HeaderComponent/>
  <BodyComponent/>
  <FooterComponent/>
</template>

<script>

import HeaderComponent from'./components/HeaderComponent'
import BodyComponent from './components/BodyComponent'
import FooterComponent from './components/FooterComponent'
export default {
  name: 'App',
  components: {
    HeaderComponent, BodyComponent, FooterComponent
  }
}
</script>

<style>

</style>
