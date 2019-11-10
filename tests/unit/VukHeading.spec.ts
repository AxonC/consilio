import VukHeading from "@/components/VukHeading/VukHeading.vue";
import { HeadingTypes, HeadingSizes } from "@/components/VukHeading/headingTypes";
import {shallowMount} from "@vue/test-utils";

describe('VukHeading', () => {
  let cmp: any

  beforeEach(() => {
    cmp = shallowMount(VukHeading, {
      propsData: {
        type: 'super'
      }
    })
  })

  describe('instance', () => {
    it('should match the snapshot', () => {
      expect(cmp.isVueInstance()).toBeTruthy()
    })
  })

  describe('snapshot', () => {
    it('should match the snapshot', () => {
      expect(cmp.vm.$el).toMatchSnapshot()
    })
  })

  describe('computed', () => {
    describe('fontWeight', () => {
      it('should default to a bold font-weight class', () => {
        expect(cmp.vm.fontWeight).toEqual('font-bold')
      })
      it('should correctly evaluate the fontWeight based upon supported values', () => {
        cmp.setProps({ type: 'super', weight: 'light' })
        expect(cmp.vm.fontWeight).toEqual('font-light')
      })
    })

    describe('headingType', () => {
      it('should return an enumerated value for a supported type', () => {
        cmp.setProps({ type: 'super' })
        expect(cmp.vm.headingType).toEqual(HeadingTypes.super)
      })

      it('should default to heading-4 if an invalid or unsupported value is provided', () => {
        cmp.setProps({ type: 'garbage' })
        expect(cmp.vm.headingType).toEqual(HeadingTypes["heading-4"])
      })
    })

    describe('size', () => {
      it('should return an enumerated value for a supported type', () => {
        cmp.setProps({ type: 'super' })
        expect(cmp.vm.size).toEqual(HeadingSizes[HeadingTypes.super])
      })

      it('should default to the size of heading-4 if invalid input provided', () => {
        cmp.setProps({ type: 'garbage '})
        expect(cmp.vm.size).toEqual(HeadingSizes[HeadingTypes['heading-4']])
      })
    })
  })
})