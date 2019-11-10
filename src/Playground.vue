<template>
  <div id="app" class="font-display bg-grey-base">
    <vuk-headline type="super">Super Heading</vuk-headline>
    <vuk-headline type="heading-1">Super Heading</vuk-headline>
    <vuk-headline type="heading-2">Super Heading</vuk-headline>
    <vuk-headline type="heading-3">Super Heading</vuk-headline>
    <vuk-headline type="heading-4">Super Heading</vuk-headline>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VukHeadline from '@/components/VukHeading/VukHeading.vue';
export default Vue.extend({
  name: 'playground',

  components: {
    VukHeadline
  }
});
</script>