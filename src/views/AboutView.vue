<template>
  <div class="about">
 <div class="add">
    <input class="add-input" placeholder="Amount" v-model="value" />
  <select class="add-input" v-model="category" >
<option  v-for="option in getCategoryList" :key="option" :value="option" >
  {{option}}
</option>
</select>
    <input class="add-input" placeholder="Date" v-model="date" />
    <button @click="OnSave" class="add-btn">Add</button>
  </div>
  </div>
</template>
<script>
export default {
  name: "AddPayment",
 
  data() {
    return {
value: this.$route.query.value,
      category:  this.$route.params.category,
      date: "",
      id: 3,
      selected:"",
      checked:false,
    };
    
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    getCategoryList(){
   return this.$store.getters.getCategoryList
 },
  },
  methods: {
    OnSave() {
      const data = {
        value: this.value,
        category: this.category,
        date: this.Date || this.getCurrentDate,
        id: Math.floor(Math.random()*Math.floor(Math.random()+Date.now()))
      };
         this.$store.commit('addDataPaymentsList',data)
     // this.$emit(`addNewPayment`, data);
    },
  },
   mounted(){
   if (!this.getCategoryList.length) {
this.$store.dispatch('loadCategories')
}
if(this.$route.params?.category){
  this.option=this.$route.params.category
  if(this.$route.query?.value){
    this.value=this.$route.query.value
  }
}
 } ,
};
</script>

<style lang="scss" scoped>
.about{
   margin-top: 60px;
  margin-left: 2%;
}
.add {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.add-btn {
  max-width: 100px;
  width: 100%;
  height: 30px;
  background: plum;
  color: white;
  border: none;
  margin: 1%;
  font-size: 18px;
}
.add-input {
  padding-left: 10px;
  margin: 1%;
  max-width: 300px;
  width: 100%;
  height: 30px;
  font-size: 18px;
  box-sizing: border-box;
}
</style>