import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import GridSystem from '@/views/GridSystem';
import PageNotFound from '@/views/PageNotFound';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/grid-system',
		name: 'GridSystem',
		component: GridSystem,
	},
	{
		path: '/*',
		name: 'PageNotFound',
		component: PageNotFound,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
