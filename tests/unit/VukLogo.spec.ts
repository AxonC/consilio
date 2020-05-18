import { shallowMount } from '@vue/test-utils'
import VukLogo from '@/components/VukLogo'

describe('VukLogo Component', () => {
  let wrapper: any
  beforeAll(() => {
    wrapper = shallowMount(VukLogo, {
      propsData: {
        variant: 'white'
      }
    })
  })

  describe('instance', () => {
    it('should be a valid vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })

  describe('props', () => {
    describe('variant', () => {
      describe('validator', () => {
        it('should return true when a valid variant is passed to the component', () => {
          expect(
            wrapper.vm.$options.props.variant.validator('white-blue')
          ).toBeTruthy()
        })

        it('should return false when an invalid type is passed to the component', () => {
          expect(
            wrapper.vm.$options.props.variant.validator('bad-variant')
          ).toBeFalsy()
        })
      })
    })
  })
})
