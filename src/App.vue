<script lang="ts">
import BlocComponent from './components/Bloc.vue';
import Bloc from './assets/Bloc';
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
    BlocComponent
},
	data() {
		return {
			element: {
				title: 'main',
				children: [
					{
						title: 'child1',
						children: []
					}
				]
			} as Bloc
		}
	}

})


</script>

<template>
	<main>
		<BlocComponent :bloc="element" />
	</main>
</template>

<style>
@import "./assets/base.css";

#app {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;

	font-weight: normal;
}
</style>
