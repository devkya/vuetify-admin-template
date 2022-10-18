<template>
	<v-container>
		<v-card>
			<v-card-title> Typography </v-card-title>

			<v-container class="grey lighten-3">
				<v-card class="pa-3" outlined>
					<v-card class="pa-3 primary text-h2 text-center font-weight-black">
						Primary
					</v-card>
					<v-card class="pa-3 secondary text-h2 text-center font-weight-black">
						Secondary
					</v-card>
					<v-card class="pa-3 error text-h2 text-center font-weight-black">
						Error
					</v-card>
					<v-card
						class="pa-3 primary--text text-h2 text-center font-weight-black"
					>
						Error
					</v-card>
					<v-card-text>
						<p class="text-h1">Heading 1</p>
						<p class="text-h6 text-sm-h2">Heading 2</p>
						<p class="text-h3 font-weight-black">Heading 3</p>
						<p class="text-h4" font-weight-thin>Heading 4</p>
						<p class="text-justify">
							Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut,
							faucibus non, euismod id, nulla. Fusce convallis metus id felis
							luctus adipiscing. Aenean massa. Vestibulum purus quam,
							scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat
							massa quis enim. Praesent venenatis metus at tortor pulvinar
							varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus
							velit. Pellentesque ut neque.
						</p>
						<p class="text-left">Left aligned text on all viewport sizes.</p>
						<p class="text-center">
							Center aligned text on all viewport sizes.
						</p>
						<p class="text-right">Right aligned text on all viewport sizes.</p>
						<p class="text-center text-md-left">
							Right aligned text on all viewport sizes.
						</p>
					</v-card-text>
				</v-card>
			</v-container>
		</v-card>
	</v-container>
</template>
<script>
export default {
	components: {},
	setup() {},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
