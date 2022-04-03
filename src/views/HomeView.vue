<template>
  <div id="app">
    <header>
      <div class="title">My Personal Costs</div>
    </header>
    <transition name="fade">
    <ModalWindoW v-if="ModalShown" :settings="settings"/>
    </transition>
 <AddPayment  @addNewPayment="addData" />
    <PaymentDisplay :List="currentElements" />
    <MyPagination :length="PaymentList.length" :n="n" :cur="cur" @changePage="OnChangePage"/>
  </div>
</template>
<script>
import PaymentDisplay from "../components/PaymentDisplay.vue";
import AddPayment from "../components/AddPayment.vue";
import MyPagination from '../components/MyPagination.vue';
import ModalWindoW from "../components/ModalWindow.vue";

export default {
  name: "App",
  components: {
    PaymentDisplay,
    ModalWindoW,
    AddPayment,
    MyPagination,
  },
  data() {
    return {
  ModalWindoW: '',
  ModalShown:false,
modalWindowSettings: {},
addFormShown:false,
settings:{},

      n:5,
      cur:1,
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
    onShown (settings) {
this.ModalShown = true
this.settings = settings
console.log(settings)
},
onHide () {
this.ModalShown = false
this.settings = {}
},
addFormOpen(){
this.$modal.show('name',{
  content:"gyfhg",
  title:"bbbb"
})
},

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
  mounted () {
this.$modal.EventBus.$on('shown',this.onShown)
this.$modal.EventBus.$on('hide',this.onHide)
},

  created() {
  //  this.PaymentList = this.fetchData();
//this.$store.commit('setPaymentsListData', this.fetchData());
   //console.log(this.$store);
this.$store.dispatch('fetchData')
  },
  beforeDestroy(){
    this.$modal.EventBus.$off('shown',this.onShown)
this.$modal.EventBus.$off('hide',this.onHide)
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 1%;
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
  margin: 1%;
  font-size: 18px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

