<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Bloc from '../assets/Bloc';
import * as uuid from 'uuid'

export default defineComponent({
   name: "BlocComponent",
   props: {
      bloc: {
         type: Object as PropType<Bloc>,
         required: true
      }
   },
   methods: {
      addChild() {
         this.bloc.children.push({
            id: uuid.v4(),
            color: ['#E9DE7F', '#8BE97F', '#7FC0E9'][this.bloc.children.length],
            title: (this.bloc.isMain) ? `child${this.bloc.children.length + 1}` : `${this.bloc.title}${this.bloc.children.length + 1}`,
            children: [],
            isMain: false
         })
      },
      deleteChild(id: string) {
         this.bloc.children = this.bloc.children.filter(child => child.id !== id)
      },
      onDelete() {
         this.$emit('delete', this.bloc.id)
      }
   }
})
</script>

<template>
   <section class="flex items-center">
      <article :id="bloc.id" class="flex items-center py-5">
         <!-- DELETE -->
         <button
            type="submit"
            @click="onDelete()"
            class="absolute p-0.5 -left-3 z-10 rounded-full border-solid border-2 border-gray-300 bg-gray-800"
            v-if="!bloc.isMain"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               class="h-5 w-5 text-white"
               viewBox="0 0 20 20"
               fill="currentColor"
            >
               <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
               />
            </svg>
         </button>

         <input
            type="text"
            v-model="bloc.title"
            v-bind:style="{ borderColor: bloc.color }"
            class="w-44 h-12 p-6 flex text-center items-center truncate border-solid border-2 outline-none bg-gray-800 text-white"
         />

         <!-- RIGHT LINE WITHOUT CHILDREN -->
         <hr
            v-if="bloc.children.length < 1"
            class="w-10 h-1"
            v-bind:style="{ backgroundColor: bloc.color }"
         />

         <!-- ADD -->
         <button
            @click="addChild()"
            v-if="bloc.children.length < 3"
            v-bind:style="{ borderColor: bloc.color }"
            class="absolute p-0.5 -right-3 z-10 rounded-full border-solid border-2 bg-gray-800"
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

      <!-- RIGHT LINE WITH SEVERAL CHILDREN -->
      <hr
         v-if="bloc.children.length > 1"
         class="w-12 shrink-0 h-1"
         v-bind:style="{ backgroundColor: bloc.color }"
      >

      <section class="flex-col">
         <section v-for="child in bloc.children" class="flex items-center">
            <!-- LEFT LINE -->
            <hr class="w-12 h-1" v-bind:style="{ backgroundColor: bloc.color }" />
            <BlocComponent :bloc="child" @delete="deleteChild($event)" />
         </section>
      </section>
   </section>
</template>