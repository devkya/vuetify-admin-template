<template>
	<v-container>
		<v-card class="my-3">
			<v-card-title>Table Flex Example</v-card-title>

			<div class="d-flex flex-row align-center py-3" outlined>
				<v-select :items="category" label="번호 선택" class="mx-4"></v-select>
				<v-select class="mx-4"></v-select>
				<v-checkbox></v-checkbox>
				<v-btn class="mx-4 mb-2">OK</v-btn>
			</div>

			<v-data-table
				:headers="headers"
				:items="desserts"
				:items-per-page="5"
				class="elevation-3"
			>
				<template #item="{ index, item }">
					<tr align="center">
						<td>{{ index }}</td>
						<td>{{ item.name }}</td>
						<td>
							<v-chip :style="bmiOver(item.calories)">{{
								item.calories
							}}</v-chip>
						</td>
						<td>{{ item.fat }}</td>
						<td>{{ item.carbs }}</td>
						<td>{{ item.protein }}</td>
						<td>{{ item.iron }}</td>
					</tr>
				</template>
			</v-data-table>
		</v-card>

		<v-card class="pa-3 my-3">
			<v-card-title>Table Grid Example</v-card-title>

			<v-row align="center" justify="center">
				<v-col cols="3">
					<v-select :items="category" label="번호 선택" class=""></v-select>
				</v-col>
				<v-col cols="3">
					<v-select class=""></v-select>
				</v-col>

				<v-col cols="1"><v-checkbox></v-checkbox></v-col>
				<v-col cols="1"> <v-btn class="mb-2">OK</v-btn></v-col>
			</v-row>

			<v-data-table
				:headers="headers"
				:items="desserts"
				:items-per-page="5"
				class="elevation-3"
			>
				<template #item="{ index, item }">
					<tr align="center">
						<td>{{ index }}</td>
						<td>{{ item.name }}</td>
						<td>
							<v-chip :style="bmiOver(item.calories)">{{
								item.calories
							}}</v-chip>
						</td>
						<td>{{ item.fat }}</td>
						<td>{{ item.carbs }}</td>
						<td>{{ item.protein }}</td>
						<td>{{ item.iron }}</td>
					</tr>
				</template>
			</v-data-table>
		</v-card>
	</v-container>
</template>
<script>
export default {
	components: {},
	setup() {},
	data() {
		return {
			headers: [
				{
					text: 'No.',
					align: 'center',
					value: 'index',
				},
				{
					text: 'Dessert (100g serving)',
					align: 'center',
					sortable: false,
					value: 'name',
				},
				{ text: 'Calories', align: 'center', value: 'calories' },
				{ text: 'Fat (g)', align: 'center', value: 'fat' },
				{ text: 'Carbs (g)', align: 'center', value: 'carbs' },
				{ text: 'Protein (g)', align: 'center', value: 'protein' },
				{ text: 'Iron (%)', align: 'center', value: 'iron' },
			],
			desserts: [
				{
					name: 'Frozen Yogurt',
					calories: 159,
					fat: 6.0,
					carbs: 24,
					protein: 4.0,
					iron: '1%',
				},
				{
					name: 'Ice cream sandwich',
					calories: 237,
					fat: 9.0,
					carbs: 37,
					protein: 4.3,
					iron: '1%',
				},
				{
					name: 'Eclair',
					calories: 262,
					fat: 16.0,
					carbs: 23,
					protein: 6.0,
					iron: '7%',
				},
				{
					name: 'Cupcake',
					calories: 305,
					fat: 3.7,
					carbs: 67,
					protein: 4.3,
					iron: '8%',
				},
				{
					name: 'Gingerbread',
					calories: 356,
					fat: 16.0,
					carbs: 49,
					protein: 3.9,
					iron: '16%',
				},
				{
					name: 'Jelly bean',
					calories: 375,
					fat: 0.0,
					carbs: 94,
					protein: 0.0,
					iron: '0%',
				},
				{
					name: 'Lollipop',
					calories: 392,
					fat: 0.2,
					carbs: 98,
					protein: 0,
					iron: '2%',
				},
				{
					name: 'Honeycomb',
					calories: 408,
					fat: 3.2,
					carbs: 87,
					protein: 6.5,
					iron: '45%',
				},
				{
					name: 'Donut',
					calories: 452,
					fat: 25.0,
					carbs: 51,
					protein: 4.9,
					iron: '22%',
				},
				{
					name: 'KitKat',
					calories: 518,
					fat: 26.0,
					carbs: 65,
					protein: 7,
					iron: '6%',
				},
			],
			fatstyle: '',
			category: ['1', '2'],
		};
	},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		bmiOver(calories) {
			if (calories > 300) {
				return 'background-color:blue';
			} else return '';
		},
	},
};
</script>
