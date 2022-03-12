<template>
  <div class="add">
    <input class="add-input" placeholder="Amount" v-model="value" />
    <input class="add-input" placeholder="Type" v-model="category" />
    <input class="add-input" placeholder="Date" v-model="date" />
    <button @click="OnSave" class="add-btn">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddPayment",
  data() {
    return {
      value: "",
      category: "",
      date: "",
      id: 3,
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
  },
  methods: {
    OnSave() {
      const data = {
        value: this.value,
        category: this.category,
        date: this.Date || this.getCurrentDate,
        id: ++this.id,
      };
      this.$emit(`addNewPayment`, data);
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
}
</style>