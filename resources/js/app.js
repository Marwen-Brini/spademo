
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import VueRouter from 'vue-router';
import moment from "moment";
import {routes} from "./routes.js";
import Progressbar from "vue-progressbar";
import Swal from 'sweetalert2';

import { Form, HasError, AlertError } from 'vform';
window.Form=Form;
window.Swal = Swal;
const options = {
  color: '#5cb85c',
  failedColor: '#d9534f',
  thickness: '5px'
};
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.Toast=Toast;
window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(Progressbar,options);

const router = new VueRouter({
	routes,
	mode:'history',
	
});
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
//global filers
//upper case first filter
Vue.filter('UCfirst',(text)=>{
    return text.charAt(0).toUpperCase() + text.slice(1)});
//date filter
Vue.filter('myDate',(date)=>{
	return moment(date).format('MMMM Do YYYY');
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
