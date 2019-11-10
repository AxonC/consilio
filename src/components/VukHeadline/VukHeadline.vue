<template>
    <component
      :is="headingType"
      class="vuk-headline"
    >

      <slot />
    </component>
</template>

<script>
export default {
  name: 'VukHeadline',

  props: {
    headingType: {
      type: String,
      required: true,
      validator (value) {
        return [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6'
        ].includes(value)
      }
    }
  }
}
</script>