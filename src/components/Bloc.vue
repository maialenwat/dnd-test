<script setup>

/**
 * creates a child bloc at click
 */
function addComponent() {
    
}
</script>

<template v-for="item in 15">
    <div class="flex">
        <div
            class="border-solid border-2 border-rose-400 w-1/4 bg-gray-800 h-12 text-white text-center z-0"
        >
            <p class="mt-2.5">main</p>
        </div>
        <div class="place-self-center z-10 -left-4">
            <button @click="addComponent" class="bg-gray-800 p-1 rounded-full border-solid border-2 border-rose-400">
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
</template>

<style>
</style>