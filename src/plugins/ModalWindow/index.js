export default {
    install (Vue) {
    if (this.installed) {

    return

    }
    this.installed = true
    Vue.prototype.$modal = {
        EventBus: new Vue(),
    // создаем новый экземпляр Vue
    // который будет выступать в роли паттерна EventBus
   // EventBus: new Vue(),
    show (name, settings) {
        this.EventBus.$emit('shown',{name,...settings});
        console.log('s')
    // сообщаем, что наступило событие shown
    // вместе с событием передаем параметры из аргументов функции
   // this.EventBus.$emit('shown', { name, ...settings})
    },
    hide () {
        this.EventBus.$emit('hide');
        console.log('h')
    // сообщаем, что наступило событие hide
 //   this.EventBus.$emit('hide')
    }
    }
    }
    }