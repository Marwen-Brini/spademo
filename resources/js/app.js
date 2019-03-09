
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

//passport components
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);

const app = new Vue({
    el: '#app',
    router
});
