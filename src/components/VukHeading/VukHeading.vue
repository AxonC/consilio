<template>
    <component
      :is="headingType"
      class="text-white subpixel-antialiased leading-loose"
      :class="[fontWeight, size]"
    >
      <!--
        @slot - Defines the text of the heading.
      -->
      <slot />
    </component>
</template>

<script>
import { HeadingTypes, HeadingSizes } from './headingTypes'
export default {
  name: 'VukHeading',

  props: {
    type: {
      type: String,
      required: true
    },
    weight: {
      type: String,
      required: false,
      default: 'bold',
      validator (value) {
        return ['bold', 'light', 'regular'].includes(value)
      }
    }
  },

  computed: {
    /**
     * Computes the correct class for font-weight based upon the prop.
     * @returns {string}
     */
    fontWeight () {
        return `font-${this.weight}`
    },
    /**
     * Looks up the correct heading type based upon enumerated value.
     * @returns {*|HeadingTypes}
     */
    headingType () {
      return HeadingTypes[this.type] || HeadingTypes['heading-4']
    },
    /**
     * Looks up the font size for the selected heading type.
     * @returns {string | string}
     */
    size() {
      return HeadingSizes[HeadingTypes[this.type]] || HeadingSizes[HeadingTypes['heading-4']]
    }
  }
}
</script>