<template>
  <transition name="fade" mode="out-in">
    <div v-if="showComponent">
      <HomeComponent />
    </div>
  </transition>
</template>

<script>
import HomeComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent,
  },
  data() {
    return {
      showComponent: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showComponent = true
      this.$router.push({ name: 'Home' })
    }, 1000)
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
 <base href="http://maishahomecare.com/">