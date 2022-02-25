<template>
  <div id="app">
    <div class="display">
      <input v-model.number="operand1" type="number" />
      <input v-model.number="operand2" type="number" />
      ={{ result }}
    </div>
    <div class="buttons">
      <button v-on:click="result = operand1 + operand2">+</button>
      <button v-on:click="result = operand1 - operand2">-</button>
      <button v-on:click="result = operand1 * operand2">*</button>
      <button v-on:click="result = del(operand1, operand2)">/</button>
      <button v-on:click="result = Math.pow(operand1, operand2)">^</button>
      <button v-on:click="result = fullpart(operand1, operand2)">%</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    del(op1, op2) {
      return (this.result = op1 / op2);
    },

    fullpart(op1, op2) {
      return (this.result = op1 % op2);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
