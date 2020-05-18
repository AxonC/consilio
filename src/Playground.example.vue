<template>
  <div id="app" class="font-display w-100">
    <vuk-logo width="400px" variant="black-blue" />
    <vuk-logo width="400px" variant="black" />
    <vuk-logo width="400px" class="bg-grey-base" variant="white-blue" />
    <vuk-logo width="500px" class="bg-grey-base" variant="white" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import VukLogo from '@/components/VukLogo/VukLogo.vue'
  export default Vue.extend({
    name: 'Playground',

    components: {
      VukLogo: VukLogo
    }
  })
</script>
