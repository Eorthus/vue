<template>
  <div class="wrp">
      <v-pagination
      v-model="i"
      :length="amount"
      @input="OnClick(i)"
      color="pink"
    >
      </v-pagination>
  </div>
  
</template>

<script>
export default {
name:"MyPagination",
props:{
length:Number,
n:Number,
cur:Number,
},
data(){
    return{
        i:this.cur,
    }
},
computed:{
amount(){
    return Math.ceil(this.length/this.n)
}
},
methods:{
OnClick(p){
    if(p<1||p>this.amount){
        return
    }
this.$emit('changePage',p)
}
},
}

</script>

<style lang="scss" scoped>
.wrp{
    margin-top:20px;
    display: flex;
    padding-left:1%;
}
.act{
    width:15px;
    height:15px;
    padding:5px;
    padding-left:10px;
    padding-bottom:10px;
    color:gray;
}
.btn{
    background: plum;
    color:white;
}
</style>