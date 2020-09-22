import VukButton from '@/components/VukButton/VukButton.vue'
import { Colors } from '@/components/VukButton/constants'
import { shallowMount } from '@vue/test-utils'

describe('VukButton', () => {
  let cmp: any

  const propsData = {
    color: 'blue',
    variant: 'primary'
  }
  beforeEach(() => {
    cmp = shallowMount(VukButton, {
      propsData
    })
  })

  describe('snapshot', () => {
    it('should match the snapshot', () => {
      expect(cmp.vm.$el).toMatchSnapshot()
    })
  })
  describe('props', () => {
    describe('type', () => {
      it('should pass the validator when it is a valid type', () => {
        expect(cmp.vm.$options.props.color.validator(Colors.BLUE)).toEqual(true)
      })
      it('should not pass the validator when it is not a valid type', () => {
        expect(cmp.vm.$options.props.color.validator('not-valid')).toEqual(
          false
        )
      })
    })
  })

  describe('computed', () => {
    describe('background', () => {
      it('should resolve a value based upon a valid type', () => {
        expect(cmp.vm.$options.computed.background.call(cmp.vm)).toEqual(
          'bg-primary'
        )
      })
      it('should resolve a transparent background value when the variant is secondary', () => {
        cmp.setProps({ variant: 'secondary' })
        expect(cmp.vm.$options.computed.background.call(cmp.vm)).toEqual(
          'bg-transparent'
        )
      })
    })
    describe('borderColor', () => {
      it('should resolve a value based upon a valid type', () => {
        cmp.setProps({ type: 'blue' })
        expect(cmp.vm.$options.computed.borderColor.call(cmp.vm)).toEqual(
          'border-primary'
        )
      })
    })
    describe('textColor', () => {
      it('should resolve a text value based upon a valid type', () => {
        cmp.setProps({ type: 'blue' })
        expect(cmp.vm.$options.computed.textColor.call(cmp.vm)).toEqual(
          'text-white'
        )
      })
    })
    describe('hoverStyles', () => {
      it('should resolve a hover value based upon a valid type', () => {
        cmp.setProps({ variant: 'primary' })
        expect(cmp.vm.$options.computed.hoverStyles.call(cmp.vm)).toEqual(
          'hover:bg-opacity-25'
        )
      })
    })
  })
})
