<script setup>
import { defineProps, toRef } from 'vue';
import { RouterLink } from 'vue-router';

// Définir les propriétés attendues pour le composant
const props = defineProps({
    text: String,
    image: String,
    titre: String,
});



</script>

<template>
        <div class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
            <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-500">
                <div class="absolute backface-hidden border-2  border-blue-600 w-full h-full">
                    <!-- Utiliser la propriété 'image' dynamiquement -->
                    <img :src="image" class="w-full h-full">
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                    <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                        <h1 class="text-3xl font-semibold font-sans">{{ titre }}</h1>
                        <p class="my-2">Note : 9.0</p>
                        <!-- Utiliser la propriété 'text' dynamiquement -->
                        <p>{{ text }}</p>
                        <button class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-5 ">
                            Regarder maintenant
                        </button>
                    </div>
                </div>
            </div>
        </div>
</template>
