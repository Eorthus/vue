import MyCalc from "../components/MyCalc.vue"
import {mount} from "@vue/test-utils"
import { expect } from "@jest/globals"

describe('Test Calc',()=>{
    it('Test first operand',()=>{
        const wrapper=mount(MyCalc)
        const operand1=wrapper.find('input[name=operand1]')
        operand1.setValue('1')
        expect(wrapper.vm.operand1).toBe(1)
    })
    it('Test second operand',()=>{
        const wrapper=mount(MyCalc)
        const operand2=wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        expect(wrapper.vm.operand2).toBe(2)
    })
    it("test method sum",()=>{
        const wrapper=mount(MyCalc)
        const operand1=wrapper.find('input[name=operand1]')
operand1.element.value="1"
operand1.trigger('input')
        const operand2=wrapper.find('input[name=operand2]')
      operand2.setValue("4")

      const btn=wrapper.find('button[name="+"]')
      btn.trigger('click')
      expect(wrapper.vm.result).toBe(5)
    })
    it("test method sum",()=>{
        const wrapper=mount(MyCalc)
        const operand1=wrapper.find('input[name=operand1]')
operand1.element.value="5"
operand1.trigger('input')
        const operand2=wrapper.find('input[name=operand2]')
      operand2.setValue("4")

      const btn=wrapper.find('button[name="-"]')
      btn.trigger('click')
      expect(wrapper.vm.result).toBe(1)
    })
})

