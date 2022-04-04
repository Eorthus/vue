<template>
  <div>
      <input v-model="Value" name="text" />
<button @click="onSave" name="save">Save</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
name:"MyVuex",
data(){
    return{
        Value:""
    }
},
methods:{
    ...mapActions(['addData']),
    onSave(){
        this.addData(this.Value)
    }
}
}
</script>

<style>

</style>