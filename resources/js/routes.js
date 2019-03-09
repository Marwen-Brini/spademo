import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "./components/Profile.vue";
import Dashboard from "./components/Dashboard.vue";
import Users from "./components/Users.vue";
import Developer from "./components/Developer.vue";

Vue.use(VueRouter);
export const routes =[
	{ path: '/profile',component:Profile },
	{ path: '/dashboard',component:Dashboard },
	{ path: '/users',component:Users },
	{ path: '/Developer',component:Developer },

];