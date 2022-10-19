<template>
	<v-app>
		<v-main>
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>
<script>
export default {
	name: 'AuthenticationLayout',
	components: {},
	setup() {},
	data() {
		return {
			sampleData: '',
		};
	},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
