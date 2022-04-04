import AddPayment from "../components/AddPayment.vue"
import MyModal from "../components/MyModal"
import Vuex from 'vuex'
//import {store} from '../store'
import {shallowMount, createLocalVue} from "@vue/test-utils"
//import {mount} from "@vue/test-utils"
import { expect } from "@jest/globals"

const localVue=createLocalVue()
localVue.use(Vuex)

describe('Test AddPayment',()=>{
    let store
    let getters
    beforeEach(()=>{
        getters={
            getCategoryList:jest.fn()
        }
        store=new Vuex.Store({
            getters,
            state:{
                data:""
            }
        })
    })
    it('Test value input',()=>{
        const wrapper=shallowMount(AddPayment,{store,localVue})
        const value=wrapper.find('input[name=value]')
        value.setValue("600")
        expect(wrapper.vm.value).toBe("600")
    })
    it('Test date input',()=>{
        const wrapper=shallowMount(AddPayment,{store,localVue})
        const date=wrapper.find('input[name=date]')
        date.setValue('16.12.1998')
        expect(wrapper.vm.date).toBe('16.12.1998')
    })
    it('Test add-btn input',()=>{
        const wrapper=shallowMount(AddPayment,{store,localVue})
        const btn1=wrapper.find('button[name=add-btn]')
        btn1.trigger('click')
        expect(wrapper.vm.checked).toBe(true)
    })
})
describe('Test MyModal',()=>{
    let store
    let getters
    let mutations
    beforeEach(()=>{
        getters={
            getCategoryList:jest.fn()
        }
        mutations={
deleteDataPaymentsList:jest.fn()
        }
        store=new Vuex.Store({
            getters,
            mutations,
            state:{
                data:""
            }
        })
    })
    it('Test edit-btn input',()=>{
        const wrapper=shallowMount(MyModal,{store,localVue,
            propsData:{
                settings:{
                value: "",
                 category:"",
                 date: "",
                 id:"",
                }
            }})
        const btn2=wrapper.find('button[name=edit-btn]')
        btn2.trigger('click')
        expect(wrapper.vm.btnShow).toBe(false)
    })
    it('Test edit-btn input',()=>{
        const wrapper=shallowMount(MyModal,{store,localVue,
            propsData:{
                settings:{
                value: "",
                 category:"",
                 date: "",
                 id:"",
                }
            }})
        const btn3=wrapper.find('button[name=del-btn]')
        btn3.trigger('click')
        expect(mutations.deleteDataPaymentsList).toHaveBeenCalled()
    })
})
