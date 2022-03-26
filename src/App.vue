<template>
  <div id="app">
    <header>
      <div class="title">My Personal Costs</div>
    </header>
    <button class="app-add" @click="checked = !checked">Add new cost</button>
    <AddPayment v-show="checked" @addNewPayment="addData" />
    <PaymentDisplay :List="currentElements" />
    <MyPagination :length="PaymentList.length" :n="n" :cur="cur" @changePage="OnChangePage"/>
  </div>
</template>

<script>
import PaymentDisplay from "./components/PaymentDisplay.vue";
import AddPayment from "./components/AddPayment.vue";
import MyPagination from './components/MyPagination.vue';

export default {
  name: "App",
  components: {
    PaymentDisplay,
    AddPayment,
    MyPagination,
  },

  data() {
    return {
      checked: false,
      n:5,
      cur:1,
  //    paymentsList:this.$store.state.paymentList
    };
  },
computed:{
    getFPV () {
return this.$store.getters.getFullPaymentValue
},
 PaymentList(){
   return this.$store.getters.getPaymentsList
 },
 currentElements(){
  return this.PaymentList.slice(this.n*(this.cur-1),this.n*(this.cur-1)+this.n)
}
},
  methods: {

    fetchData() {
      return [
        {
          date: "11.03.2022",
          category: "Food",
          value: 500,
          id: 1,
        },
        {
          date: "12.03.2022",
          category: "Transport",
          value: 600,
          id: 2,
        },
        {
          date: "13.03.2022",
          category: "Food",
          value: 712.4,
          id: 3,
        },
      ];
    },
    addData(data) {
    // this.PaymentList.push(data);
    this.$store.commit('addDataPaymentsList',data)
    },
OnChangePage(p){
this.cur=p
},


  },

  created() {
  //  this.PaymentList = this.fetchData();
//this.$store.commit('setPaymentsListData', this.fetchData());
   //console.log(this.$store);
this.$store.dispatch('fetchData')
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 2%;
}
.title {
  font-size: 30px;
  text-align: left;
  margin-left: 1%;
}
.app-add {
  max-width: 150px;
  width: 100%;
  height: 30px;
  background: plum;
  color: white;
  border: none;
  margin: 2% 1%;
  font-size: 18px;
}
</style>
