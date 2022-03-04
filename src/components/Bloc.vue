<script lang="ts">
import { defineComponent, PropType, setBlockTracking } from 'vue'
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
        addNewChild(bloc: Bloc) {
            bloc.children.push({
                title: `${bloc.title}${bloc.children.length + 1}`,
                children: []
            })
        }
    }
})

</script>

<template>
    <section class="flex bg-blue-300">
        <article class="flex items-center bg-green-200 p-5">
            <p
                class="w-40 h-12 flex justify-center items-center border-solid border-2 border-rose-400 bg-gray-800 text-white"
            >{{ bloc.title }}</p>
            <button
                @click="addNewChild(bloc)"
                v-if="bloc.children.length < 3"
                class="absolute p-0.5 right-2 rounded-full border-solid border-2 border-rose-400 bg-gray-800"
            >
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
        </article>

        <section id="child" class="flex-col">
            <BlocComponent v-for="child in bloc.children" :bloc="child" />
        </section>
    </section>
</template>