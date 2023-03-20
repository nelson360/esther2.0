<template>
<BodyBody />
<FooterComponent />
</template>

<script>
import BodyBody from './BodyBody.vue';
import FooterComponent from '/src/components/FooterComponent.vue'

export default {
    name: 'HomeComponent',
    components: {
        BodyBody,
        FooterComponent
    }
}
</script>
