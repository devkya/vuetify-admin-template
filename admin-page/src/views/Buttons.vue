<template>
	<v-container>
		<v-card class="pa-3">
			<v-card-title class="text-h5 font-weight-black">Buttons</v-card-title>
			<v-row justify="space-around">
				<v-col cols="auto"> <v-btn color="primary">PRIMARY</v-btn> </v-col>
				<v-col cols="auto"> <v-btn color="#f06292">SOYA </v-btn> </v-col>
				<v-col cols="auto"> <v-btn color="#cddc39">DEVKYA </v-btn> </v-col>
				<v-col cols="auto"> <v-btn color="#9b0000">error </v-btn> </v-col>
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
