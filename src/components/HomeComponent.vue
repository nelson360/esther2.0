<template>
<HeaderComponent/>
<BodyBody />
<FooterComponent />
</template>

<script>
import HeaderComponent from '/src/components/HeaderComponent.vue';
import BodyBody from './BodyBody.vue';
import FooterComponent from '/src/components/FooterComponent.vue'

export default {
    name: 'HomeComponent',
    metaInfo: {
    title: 'Best in Kenya nursing home health care and nursing',
    meta: [
      { name: 'description', content: 'Find the best nursing home care and nursing in Kenya here.' }
    ]
  },
  components: {
        BodyBody,
        HeaderComponent,
        FooterComponent
    }
}
</script>
