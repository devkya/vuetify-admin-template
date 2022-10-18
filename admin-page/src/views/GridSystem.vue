<template>
	<v-container fluid>
		<v-card class="pa-3 mt-5" outlined>
			<v-row no-gutters>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
			</v-row>
		</v-card>
		<v-card class="pa-3 mt-5" outlined>
			<v-row no-gutters>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
			</v-row>
		</v-card>
		<v-card class="pa-3 mt-5" outlined>
			<v-row :style="{ height: '120px' }" class="red" align="start">
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
			</v-row>
			<v-row :style="{ height: '120px' }" class="yellow">
				<v-col align-self="start">
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col align-self="center">
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
				<v-col align-self="end">
					<v-card class="pa-3" outlined>col</v-card>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>
<script>
export default {
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
