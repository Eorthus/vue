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
        <router-link style="color:plum" :to="{name:'add',params:{category:item.category}, query:{value:item.value}}">Repeat</router-link></td>
    </tr>
  </div>
</template>
<script>
export default {
  name: "PaymentDisplay",
  props: {
    List: [],
  },
};
</script>
<style lang="scss" scoped>
.list {
  margin: 1% 2%;
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
</style>
