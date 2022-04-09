<template>
  <div >
<v-dialog max-width="350px"
  v-model="dialog" >
<template v-slot:activator="{ on }">
         <v-btn color="pink" v-on="on" dark  class="app-add" name="add-btn" @click="checked = !checked">Add new cost <v-icon>mdi-plus</v-icon></v-btn>

      </template>
      <v-card class="app">
 <div v-show="checked" class="add">
   <v-text-field
   color="pink"
            v-model="value"
            :counter="10"
            label="Amount"
            required
            name="value"
          ></v-text-field>
           <v-select
          v-model="category"
          label="Standard"
          name="category"
          :items="getCategoryList"
          color="pink"
        ></v-select>

  <v-text-field
   color="pink"
            v-model="date"
           
            :counter="10"
            label="Date"
            required
            name="date"
          ></v-text-field>
    <v-btn  color="pink" dark @click="OnSave" class="add-btn" name="btn-add">Add</v-btn>
  </div>
      </v-card>
</v-dialog>
  
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
      category: "Sport",
      date: "",
      id: 3,
      selected:"",
      checked:false,
      dialog:false,
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
   return this.$store.getters.getCategoryList;
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
     if (this.getCategoryList){
   if (!this.getCategoryList.length) {
this.$store.dispatch('loadCategories')
}}
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
.add {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.app{
  max-width: 350px;
  padding:20px;
}
.app-add {
 // height: 30px;
 // background: plum;
 // color: white;
 // border: none;
 // margin: 1%;
 padding-top:10px;
  font-size: 18px;
  margin-right: auto;

}
.add-btn {
  max-width: 100px;
  width: 100%;
 // height: 30px;
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
  border:1px solid palevioletred
}
</style>