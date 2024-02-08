<script setup>

</script>

<template>
    <div class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
        <div class=" relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-500">
            <div class="absolute backface-hidden border-2 w-full h-full">
                <img src="../assets/yeoman.png" class="w-full h-full">
            </div>
            <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 pverflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                    <h1 class="text-3xl font-semibold">Extension Vscode</h1>
                    <p class="my-2">9.0 rating</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est aliquid nesciunt, voluptatibus id perspiciatis iure debitis amet nemo facere?
                    </p>
                    <button class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-500 group-hover:bottom-20 scale-0 group-hover:scale-125">
                        Watch Now 
                    </button>
                </div>
            </div>
        </div>

    </div>
      
  </template>
  
  