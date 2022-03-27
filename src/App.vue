<script lang="ts">
import BlocComponent from './components/Bloc.vue';
import Bloc from './assets/Bloc';
import { defineComponent } from 'vue';
import * as uuid from 'uuid'

export default defineComponent({
	components: {
		BlocComponent
	},
	data() {
		return {
			//initialization of main bloc
			element: {
				id: uuid.v4(),
				color: '#E97F7F',
				title: 'main',
				children: [],
				isMain: true
			} as Bloc
		}
	}
})


</script>

<template>
	<main class="h-full w-full">
		<BlocComponent :bloc="element" />
	</main>
</template>

<style>
@import "./assets/base.css";

#app {
	font-weight: normal;
}
</style>
