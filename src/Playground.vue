<template>
  <div id="app" class="font-display bg-grey-base">
    <vuk-headline type="super">Super Heading</vuk-headline>
    <vuk-headline type="heading-1">Heading 1</vuk-headline>
    <vuk-headline type="heading-2">Heading 2</vuk-headline>
    <vuk-headline type="heading-3">Heading 3</vuk-headline>
    <vuk-headline type="heading-4">Heading 4</vuk-headline>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VukHeading from '@/components/VukHeading/VukHeading.vue';
export default Vue.extend({
  name: 'playground',

  components: {
    VukHeadline: VukHeading
  }
});
</script>