<template>
  <div id="calc">
    <div class="display">
      <input v-model.number="operand1" name="operand1" type="number" />
      <input v-model.number="operand2" name="operand2" type="number" />
      ={{ result }}
    </div>
    <div class="keyboard">
      <button
        v-for="operand in operands"
        v-bind:key="operand"
        :name="operand"
        @click="calculate(operand)"
      >
        {{ operand }}
      </button>
    </div>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <div v-show="checked">
      <div>
        <button v-for="key in keys" v-bind:key="key"  @click="input(key)">
          {{ key }}
        </button>
      </div>
      <input type="radio" id="one" value="1" v-model="operand" />
      <label for="one">Операнд 1</label>
      <input type="radio" id="two" value="2" v-model="operand" />
      <label for="one">Операнд 2</label>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyCalc",
  components: {},
  data() {
    return {
      operands: ["+", "-", "/", "*", "^", "%"],
      keys: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "←"],
      operand1: 0,
      operand2: 0,
      result: 0,
      checked: false,
      operand: "0",
      error: false,
    };
  },
  methods: {
    input(key) {
      if (this.operand == "1") {
        if (key == this.keys[10]) {
          this.operand1 = this.delete(this.operand1);
        } else {
          return Number((this.operand1 = this.operand1 + key));
        }
      } else if (this.operand == "2") {
        if (key == this.keys[10]) {
          this.operand2 = this.delete(this.operand2);
        } else {
          return Number((this.operand2 = this.operand2 + key));
        }
      }
    },
    calculate(operation = "+") {
      switch (operation) {
        case "+":

          this.add(this.operand1, this.operand2);
          break;
        case "-":
          this.minus(this.operand1, this.operand2);
          break;
        case "*":
          this.all(this.operand1, this.operand2);
          break;
        case "/":
          this.del(this.operand1, this.operand2);
          break;
        case "^":
          this.pow(this.operand1, this.operand2);
          break;
        case "%":
          this.fullpart(this.operand1, this.operand2);
          break;
      }
    },
    add(op1, op2) {
      return (this.result = op1 + op2);
    },
    minus(op1, op2) {
      return (this.result = op1 - op2);
    },
    all(op1, op2) {
      return (this.result = op1 * op2);
    },
    del(op1, op2) {
      return (this.result = op1 / op2);
    },
    pow(op1, op2) {
      return (this.result = Math.pow(op1, op2));
    },

    fullpart(op1, op2) {
      return (this.result = op1 % op2);
    },
    delete(op) {
      var string = String(op);
      string = string.slice(0, -1);
      return (op = Number(string));
    },
  },
};
</script>

<style>
#calc {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
