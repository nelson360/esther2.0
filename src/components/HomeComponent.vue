<template>
<BodyBody />
<FooterComponent />
</template>

<script>
import BodyBody from './BodyBody.vue';
import FooterComponent from '/src/components/FooterComponent.vue'

export default {
    name: 'HomeComponent',
    metaInfo: {
    title: 'Best in Kenya',
    meta: [
      { name: 'description', content: 'Find the best things in Kenya here.' }
    ]
  },
  components: {
        BodyBody,
        FooterComponent
    }
}
</script>
