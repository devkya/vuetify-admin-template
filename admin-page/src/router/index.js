import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard';
import GridSystem from '@/views/GridSystem';
import PageNotFound from '@/views/PageNotFound';
import GridListPage from '@/views/GridListPage';
import Breakpoints from '@/views/Breakpoints';
import Typography from '@/views/Typography';
import Tables from '@/views/Tables';
import Forms from '@/views/Forms';
import Buttons from '@/views/Buttons';
import Icons from '@/views/Icons';
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
		path: '/grid-list',
		name: 'GridListPage',
		component: GridListPage,
	},
	{
		path: '/breakpoints',
		name: 'Breakpoints',
		component: Breakpoints,
	},
	{
		path: '/typography',
		name: 'Typography',
		component: Typography,
	},
	{
		path: '/tables',
		name: 'Tables',
		component: Tables,
	},
	{
		path: '/forms',
		name: 'Forms',
		component: Forms,
	},
	{
		path: '/buttons',
		name: 'Buttons',
		component: Buttons,
	},
	{
		path: '/icons',
		name: 'Icons',
		component: Icons,
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
