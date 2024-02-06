<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideMenu from './components/SideMenu.vue';

</script>

<template>
  <div id="SideNav" class="fixed w-[240px] bg-[#191922] h-[100vh] border-r border-r-[#32323D]">
    <div class="mt-[80px]"></div>
    <SideMenu pageUrl="/" name="Accueil"/>
    <SideMenu pageUrl="/" name="À propos de moi"/>
    <SideMenu pageUrl="/" name="Portfolio"/>
    <SideMenu pageUrl="/" name="Contact"/>
    <RouterView/>
  </div>
</template>
