<template>
  <div class="wrp">
      <div class="act btn" @click="OnClick(cur-1)">-</div>
<div class="act" v-for="i in amount" :key="i" @click="OnClick(i)">
    {{i}}
</div>
      <div class="act btn" @click="OnClick(cur+1)">+</div>
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