<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>{{ $route.name }}</v-toolbar-title>
		</v-app-bar>

		<!-- nav side bar -->
		<v-navigation-drawer
			v-model="drawer"
			app
			:src="require('@/assets/sidebar.jpg')"
			dark
		>
			<template #img="props">
				<v-img :gradient="gradient" v-bind="props"> </v-img>
			</template>

			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6"> Application </v-list-item-title>
					<v-list-item-subtitle> subtext </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense nav>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					link
					:to="item.to"
					active-class="primary"
					class="py-1"
					@click="select_item = item.title"
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-main>
			<v-container fluid>
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
	components: {},
	setup() {},
	data() {
		return {
			drawer: false,
			gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
				{ title: 'Grid System', icon: 'mdi-image', to: '/grid-system' },
				{ title: 'Grid List', icon: 'mdi-image', to: '/grid-list' },
				{ title: 'BreakPoints', icon: 'mdi-image', to: '/breakpoints' },
				{
					title: 'Typography',
					icon: 'mdi-application-brackets',
					to: '/typography',
				},
				{ title: 'Tables', icon: 'mdi-file-table', to: '/tables' },
				{
					title: 'Forms',
					icon: 'mdi-format-annotation-plus',
					to: '/forms',
				},
				{ title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
				{ title: 'Icons', icon: 'mdi-cat', to: '/icons' },
			],
			select_item: '',
		};
	},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
