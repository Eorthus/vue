import Vue from 'vue'
import App from './App.vue'

// импортируем экземпляр созданного хранилища из листинга выше
import store from './store'

import router from './router'
import modal from './plugins/ModalWindow'


Vue.config.productionTip = false;
Vue.use(modal);

new Vue({
  // подключаем хранилище к нашему приложению
  store,
  router,
  render: h => h(App)
}).$mount('#app')
