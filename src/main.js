import Vue from 'vue'
import App from './App.vue'

// импортируем экземпляр созданного хранилища из листинга выше
import store from './store'

import router from './router'


Vue.config.productionTip = false

new Vue({
  // подключаем хранилище к нашему приложению
  store,

  router,
  render: h => h(App)
}).$mount('#app')
