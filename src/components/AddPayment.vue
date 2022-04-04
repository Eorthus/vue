<template>
  <div >
  <button class="app-add" name="add-btn" @click="checked = !checked">Add new cost</button>
  <div v-show="checked" class="add">
    <input class="add-input" placeholder="Amount" name="value" v-model="value" />
  <select class="add-input" v-model="category" name="category">
<option  v-for="option in getCategoryList" :key="option" :value="option" >
  {{option}}
</option>
</select>
    <input class="add-input" placeholder="Date" name="date" v-model="date" />
    <button @click="OnSave" class="add-btn" name="btn-add">Add</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "AddPayment",
      props:{
        settings:Object
    },
  data() {
    return {
      value: "",
      category: "",
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
    
      this.$emit(`addNewPayment`, data);
    },
  },
   mounted(){
     if (!this.getCategoryList===undefined){
   if (!this.getCategoryList.length) {
this.$store.dispatch('loadCategories')
}}

 } ,
};
</script>

<style lang="scss" scoped>
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
  margin: 1%;
  font-size: 18px;
  margin-right: auto;
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