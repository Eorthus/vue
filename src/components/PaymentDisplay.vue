<template>
  <div class="list">
    <tr class="list-header">
      <th>#</th>
      <th>Date</th>
      <th>Category</th>
      <th>Value</th>
    </tr>
    <tr class="list-item" v-for="item in List" :key="item.id">
      <td class="list-item-id">
        {{ item.id }}
      </td>
      <td class="list-item-date">{{ item.date }}</td>
      <td class="list-item-category">{{ item.category }}</td>
      <td class="list-item-value">{{ item.value }}</td>
      <td class="list-item-add">
        <router-link class="list-link" style="color:plum" :to="{name:'add',params:{category:item.category}, query:{value:item.value}}">Repeat</router-link></td>
   <td><button class="list-btn" @click="addFormOpen(item.id,item.category,item.date,item.value)">:</button></td>
    </tr>
  </div>
</template>
<script>
export default {
  name: "PaymentDisplay",
  props: {
    List: [],
  },
  methods:{
    addFormOpen(id,category,date,value){
this.$modal.show('name',{
  content:"AddPayment",
  id: id,
  category:category,
  value:value,
  date:date,
})
},
  }
};
</script>
<style lang="scss" scoped>
.list {
  margin: 1%;
  font-size: 18px;
}
.list-header {
  height: 30px;
  border-top: 1px solid gray;
  text-align: left;
}
.list-item {
  height: 30px;
  border-top: 1px solid gray;
}
.list-item-id {
  width: 190px;
}
.list-item-date {
  width: 120px;
}
.list-item-category {
  width: 150px;
}
.list-item-value {
  width: 80px;
}
.list-link{
  width:100px;
}
.list-btn{
margin-left:50px;
margin-right: 50px;
border:1px solid plum;
background: white;
color:plum;
}
</style>
