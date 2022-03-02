<script setup>

// Div 1
let newDiv1 = document.createElement("div");
newDiv1.setAttribute("id", "newDiv1")
newDiv1.classList = 'w-1/4 h-12 text-center border-solid border-2 border-rose-400 bg-gray-800 text-white'

// Paragraph inside Div 1
let newP = document.createElement("p");
newP.setAttribute("id", "newP")
newP.classList = 'mt-2.5'
newP.innerText = 'child'

newDiv1.appendChild(newP);

// Div 2
let newDiv2 = document.createElement("div");
newDiv2.setAttribute("id", "newDiv2")
newDiv2.classList = 'place-self-center -left-4'

// Button inside Div 2
let newBtn = document.createElement("button");
newBtn.setAttribute("id", "newBtn");
newBtn.classList ='p-1 rounded-full border-solid border-2 border-rose-400 bg-gray-800'
newBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/></svg>'

newDiv2.appendChild(newBtn);

/**
 * creates a child bloc at click
 */
function addBloc() {
    document.querySelector('.flex').appendChild(newDiv1);
    document.querySelector('.flex').appendChild(newDiv2);
}
</script>

<template>
    <div class="flex">
        <div
            class="w-1/4 h-12 text-center border-solid border-2 border-rose-400 bg-gray-800 text-white"
        >
            <p class="mt-2.5">main</p>
        </div>
        <div class="place-self-center -left-4">
            <button
                @click="addBloc"
                class="p-1 rounded-full border-solid border-2 border-rose-400 bg-gray-800"
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
        </div>
    </div>
</template>

<style>
</style>