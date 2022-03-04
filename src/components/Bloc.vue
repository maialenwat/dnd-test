<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Bloc from '../assets/Bloc';

export default defineComponent({
    name: 'BlocComponent',
    props: {
        bloc: {
            type: Object as PropType<Bloc>,
            required: true
        }
    },
    methods: {
        
    }
})

</script>

<template>
    <div class="flex">
        <div class="flex items-center">
            <div
                class="w-40 h-12 text-center border-solid border-2 border-rose-400 bg-gray-800 text-white"
            >
                <p class="mt-2.5">{{ bloc.title }}</p>
            </div>
            <div class="place-self-center -left-4">
                <button class="p-1 rounded-full border-solid border-2 border-rose-400 bg-gray-800">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>

        <div class="flex-col  h-64">
            <BlocComponent v-for="child in bloc.children" :bloc="child" />
        </div>
    </div>
</template>
