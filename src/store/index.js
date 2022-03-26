import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
state: {
        paymentList:[],
        categoryList:[],
},
mutations: {
        setPaymentsListData (state, payload) {
                state.paymentList = payload
        },
        addDataPaymentsList(state,payload){
                state.paymentList.push(payload)
        },
        setCategories (state, payload) {
                if (!Array.isArray(payload)) {
                payload = [payload]
                }
                state.categoryList.push(...payload)
                },                
},
getters: {
        getPaymentsList: state => state.paymentList,
        // получаем суммарную стоимость всех платежей
        getFullPaymentValue: state => {
        return state.paymentList
        .reduce((res, cur) => res + cur.value, 0)
        },
        getCategoryList: state => state.categoryList,

},
actions: {
        fetchData({commit}){
                return new Promise((resolve)=>{
                        setTimeout(()=>{
                                const items=[]
for (let i=1;i<=50; i++){
        items.push({
                date:"23.12.2020",
                category:"Sport",
                value:i,
                id: Math.floor(Math.random()*Math.floor(Math.random()+Date.now()))
})
                        }
resolve(items)},2000)}). then(res=>{
        commit('setPaymentsListData',res)
})
        },
        loadCategories ({ commit }) {
                return new Promise((resolve) => {
                // имитируем работу с сетью
                setTimeout(() => {
                resolve(['Food', 'Transport', 'Education', 'Entertainment'])
                }, 1000)
                })
                .then(res => {
                // запускаем изменение состояния через commit
                commit('setCategories', res)
                })
                },   
},
})
