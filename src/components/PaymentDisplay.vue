<template>
  <div class="list">
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="list-header">
          <th class="text-left">#</th>
      <th class="text-left">Date</th>
      <th class="text-left">Category</th>
      <th class="text-left">Value</th>
        <th class="text-left rep" >Repeat link</th>
         
        </tr>
      </thead>
      <tbody>
        <tr
        class="list-item" v-for="item in List" :key="item.id"
        >
         <td class="list-item-id">
        {{ item.id }}
      </td>
      <td class="list-item-date">{{ item.date }}</td>
      <td class="list-item-category">{{ item.category }}</td>
      <td class="list-item-value">{{ item.value }}</td>
      <td class="list-item-add">
        <router-link class="list-link" :to="{name:'add',params:{category:item.category}, query:{value:item.value}}">Repeat</router-link></td>
   <td class="list-item-btn "><button class="list-btn" @click="addFormOpen(item.id,item.category,item.date,item.value)">:</button></td>
   
        </tr>
      </tbody>
    </template>
  </v-simple-table>
   <!-- <tr class="list-header">
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
    </tr>-->
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
.rep{
  width:100px;
  min-width: 100px;
}
.set{
  width: 60px;
}
.list-item-btn{
 max-width:20px;
}
.list-btn{
margin-left:auto;
//margin-right: 50px;
border:1px solid palevioletred;
background: white;
color:plum;
}
</style>
