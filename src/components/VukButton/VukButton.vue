<script>
  import { Variants, Colors } from './constants'
  export default {
    name: 'VukButton',

    props: {
      color: {
        type: String,
        required: true,
        validator: value => {
          return Object.values(Colors).includes(value.toLowerCase())
        }
      },
      variant: {
        type: String,
        required: true,
        validator: value => {
          return Object.values(Variants).includes(value.toLowerCase())
        }
      }
    },

    computed: {
      background() {
        return this.variant === Variants.SECONDARY
          ? 'bg-transparent'
          : this.resolveBackgroundColorClass()
      },
      borderColor() {
        return {
          blue: 'border-primary',
          yellow: 'border-secondary',
          purple: 'border-tertiary',
          success: 'border-green',
          error: 'border-red'
        }[this.color]
      },
      textColor() {
        const textColors = {
          blue: 'text-primary',
          yellow: 'text-secondary',
          purple: 'text-tertiary',
          success: 'text-green',
          error: 'text-red'
        }
        return {
          primary: 'text-white',
          secondary: textColors[this.color]
        }[this.variant]
      },
      hoverStyles() {
        return {
          primary: 'hover:bg-opacity-25',
          secondary: `hover:${this.resolveBackgroundColorClass()} hover:text-white` // still remains purgable because parent style is defined in background
        }[this.variant]
      }
    },

    methods: {
      resolveBackgroundColorClass(color = this.color) {
        return {
          blue: 'bg-primary',
          yellow: 'bg-secondary',
          purple: 'bg-tertiary',
          success: 'bg-green',
          error: 'bg-red'
        }[color]
      }
    },

    render(h) {
      return h(
        'button',
        {
          class: [
            'flex',
            'py-4',
            'px-8',
            'rounded',
            'font-display',
            'border-2',
            'items-center',
            'disabled:bg-grey-300',
            'disabled:cursor-not-allowed',
            'disabled:text-grey-low',
            'disabled:border-2',
            'disabled:border-grey-300',
            'transition',
            'duration-300',
            'ease-in-out',
            this.hoverStyles,
            this.textColor,
            this.background,
            this.borderColor
          ]
        },
        this.$slots.default
      )
    }
  }
</script>
