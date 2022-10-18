<template>
	<v-container>
		<v-row>
			<v-col v-for="count in 12" :key="count" cols="3">
				<v-card class="pa-3" outlined>Col</v-card>
			</v-col>
		</v-row>
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
