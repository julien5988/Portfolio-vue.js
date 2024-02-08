<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLinkedin, mdiGithub } from '@mdi/js';
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex items-center flex-col"> 
      <div class="text-center">
        <h2 class="text-white text-4xl">Julien.T</h2>
        <h1 class="text-white text-6xl">Développeur Web Javascript</h1>
      </div>
      <div class="w-[120px] bg-[#1d1d24] rounded-md flex justify-around mt-4"> 
        <a href="" class="text-center">
          <SvgIcon 
            type="mdi"
            :path="mdiLinkedin"
            class="h-10 w-10 text-white "
          />
        </a>
        <a href="" class="text-center">
          <SvgIcon
            type="mdi"
            :path="mdiGithub"
            class="h-10 w-10 text-white"
          />
        </a>
      </div>
      <a href="/contact">
        <button class="mt-8 rounded-sm p-2 bg-red-600 text-white hover:opacity-80">Contactez-moi</button>
      </a>
    </div>
    <img class="rounded-full ml-4 border border-white" src="../assets/photo_julien.png" alt="" width="350">
  </div>
</template>
