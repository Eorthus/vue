<template>
  <div class="MyWindow">
    <v-btn color="pink" dark @click="OnEdit" v-if="btnShow" name="edit-btn" class="add-btn">Edit</v-btn>
    <div v-if="editShow" class="MyModal">
       <v-text-field
   color="pink"
            v-model="NewObj.value"
           
            :counter="10"
            label="Value"
            required
            name="value"
          ></v-text-field>

             <v-select
          v-model="NewObj.category"
          label="Standard"
          name="category"
          :items="getCategoryList"
          color="pink"
        ></v-select>
 <v-text-field
   color="pink"
            v-model="NewObj.date"
          
            :counter="10"
            label="Date"
            required
            name="date"
          ></v-text-field>
      <v-btn color="pink" dark class="add-btn" @click="OnSave(NewObj)" >Edit</v-btn>
    </div>
    <v-btn color="pink" dark @click="OnDelete(NewObj)" name="del-btn" v-if="btnShow" class="add-btn">Delete</v-btn>

  </div>
</template>

<script>
export default {
  name: "MyModal",
      props:{
        settings:Object
    },
  data() {
    return {
  btnShow:true,
      editShow:false,
      NewObj:{
    value: this.settings.value,
      category:this.settings.category,
      date: this.settings.date,
      id:this.settings.id,
      }
    };
  },
  computed: {
    getCategoryList(){
   return this.$store.getters.getCategoryList}
  },
  methods: {
    OnSave(data) {
        this.$store.commit('editDataPaymentsList',data)
    },

    OnEdit(){
        this.editShow=true,
        this.btnShow=false
    },
      OnDelete(data) {
    this.$store.commit('deleteDataPaymentsList',data)
    },
  },
   mounted(){
       if (!this.getCategoryList===undefined){
   if (!this.getCategoryList.length) {
this.$store.dispatch('loadCategories')
}
       }
 } ,
};
</script>

<style lang="scss" scoped>
.MyWindow{
    padding:20px;
}
.MyModal{
    display: flex;
flex-direction: column;
padding:20px;
}
.add {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.app-add {
  max-width: 100px;
  width: 100%;
  height: 30px;
  background: plum;
  color: white;
  border: none;
  margin: 1%;
  font-size: 18px;
}
.add-btn {
  min-width: 100px;
  width: 100%;
  height: 30px;
 /// background: white;
 // color: plum;
  border: none;
  margin: 1%;
  font-size: 18px;
//  border:1px solid plum
}
.add-input {
  padding-left: 10px;
  margin: 1%;
  max-width: 300px;
  width: 100%;
  margin-bottom:10px;
  height: 30px;
  font-size: 18px;
  box-sizing: border-box;
  border:1px solid palevioletred;
}
</style>