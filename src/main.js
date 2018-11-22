import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/scss/index.scss';
import {
	wxShare
} from 'assets/js/mixins'
let Component = Vue.extend({
	mixins: [wxShare]
})
let component = new Component()
component._getShareConfig()

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')