import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
state: {
        paymentList:[],
        categoryList:[],
        categorySum:[],
},
mutations: {
        setPaymentsListData (state, payload) {
                if (state.paymentList.length<51){
                state.paymentList = payload;
                
                } else return
        },
        addDataPaymentsList(state,payload){
                state.paymentList.push(payload)
        },
        editDataPaymentsList(state,payload){
                state.paymentList.map(o => {
                        if (o.id === payload.id) {
                                o.value=payload.value
                                o.date=payload.date
                                o.category=payload.category
        }
})},
deleteDataPaymentsList(state,payload){
        state.paymentList.forEach(function(el, i) {
                if (el.id == payload.id) state.paymentList.splice(i, 1)
              })
},
        setCategories (state, payload) {
                if (!Array.isArray(payload)) {
                payload = [payload]
                }
                state.categoryList.push(...payload)
                },   
              /*  setCategoriesSum(state){
                        state.categoryList.forEach(element=>{
                        const sum=state.paymentList.reduce((acc,obj)=>{
                                if(obj.category==element){
                                        return acc+obj.value 
                                }
                        },0)
                        console.log(sum)
                        if (state.categorySum.length<4){
                        state.categorySum.push(sum)
                } else {
                                if (element=="Food"){
                                        state.categorySum[1]=sum
                                }
                                if (element=="Transport"){
                                        state.categorySum[2]=sum
                                }
                                if (element=="Education"){
                                        state.categorySum[3]=sum
                                }
                                if (element=="Sport"){
                                        state.categorySum[4]=sum
                                }
                        }
                        },    )         
},*/
},

getters: {
        getPaymentsList: state => state.paymentList,
        // получаем суммарную стоимость всех платежей
        getFullPaymentValue: state => {
        return state.paymentList
        .reduce((res, cur) => res + cur.value, 0)
        },
        getCategoryList: state => state.categoryList,
        getCategorySum: state => state.categorySum,

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
                resolve(['Food', 'Transport', 'Education', 'Sport'])
                }, 1000)
                })
                .then(res => {
                // запускаем изменение состояния через commit
                commit('setCategories', res)
                })
                },   
},
})
