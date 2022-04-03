<template>
  <div class="MyWindow">
    <button @click="OnEdit" v-if="btnShow" class="add-btn">Edit</button>
    
    <div v-if="editShow" class="MyModal">
              <input class="add-input" placeholder="Value" v-model="NewObj.value" />
     <select class="add-input" v-model="NewObj.category" >
<option  v-for="option in getCategoryList" :key="option" :value="option" >
  {{option}}
</option>
</select>
                <input class="add-input" placeholder="Date" v-model="NewObj.date" />
      <button class="add-btn" @click="OnSave(NewObj)" >Edit</button>
    </div>

    <button @click="OnDelete(NewObj)" v-if="btnShow" class="add-btn">Delete</button>

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
   if (!this.getCategoryList.length) {
this.$store.dispatch('loadCategories')
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
  max-width: 150px;
  width: 100%;
  height: 30px;
  background: plum;
  color: white;
  border: none;
  margin: 1%;
  font-size: 18px;
}
.add-btn {
  max-width: 100px;
  width: 100%;
  height: 30px;
  background: white;
  color: plum;
  border: none;
  margin: 1%;
  font-size: 18px;
  border:1px solid plum
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
}
</style>