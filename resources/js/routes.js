import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "./components/Profile.vue";
import Dashboard from "./components/Dashboard.vue";

Vue.use(VueRouter);
export const routes =[
	{ path: '/profile',component:Profile },
	{ path: '/dashboard',component:Dashboard }
];