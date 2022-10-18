<template>
	<v-container>
		<v-card>
			<v-card-title>Hello</v-card-title>
			<v-row class="pa-3">
				<v-col
					><v-icon color="#f9a825" large>mdi-glass-mug-variant</v-icon></v-col
				>
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
	methods: {
		soya() {
			console.log('i love you!');
		},
	},
};
</script>
