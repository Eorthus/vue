import Vue from 'vue'
import App from './App.vue'
// импортируем экземпляр созданного хранилища из листинга выше
import store from './store'


Vue.config.productionTip = false

new Vue({
  store, // подключаем хранилище к нашему приложению
  render: h => h(App),
}).$mount('#app')
