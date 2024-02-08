<script setup>
import { RouterLink, RouterView } from 'vue-router';
import SideMenu from './components/SideMenu.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { ref } from 'vue';
import { mdiChevronDoubleLeft,mdiChevronDoubleRight } from '@mdi/js';
import router from './router';


const collapsed = ref(false);


function toggleCollapse() {
  collapsed.value = !collapsed.value;
}
</script>

<template>
  <div id="app">
  <!-- Menu latéral -->
  <div id="SideNav" :class="{ 'w-[240px]': !collapsed, 'w-[90px]': collapsed }" class="fixed bg-[#191922] h-[100vh] border-r border-r-[#32323D]">
    <div class="flex flex-col items-end justify-end h-30">
      <button @click="toggleCollapse" class="mx-auto mt-6 p-2 rounded-full hover:bg-[#2b2b2b]">
        <SvgIcon type="mdi" :path="collapsed ? mdiChevronDoubleRight : mdiChevronDoubleLeft" class="text-white" />
      </button>
    </div>
    <div class="mt-[80px]"></div>
    <SideMenu pageUrl="/" name="Accueil" :icon="mdiHomeCircle" :collapsed="collapsed" />
    <SideMenu pageUrl="/about" name="À propos de moi" :icon="mdiHead" :collapsed="collapsed" />
    <SideMenu pageUrl="/portfolio" name="Portfolio" :icon="mdiBookCog" :collapsed="collapsed" />
    <SideMenu pageUrl="/contact" name="Contact" :icon="mdiCardAccountMail" :collapsed="collapsed" /> 
  </div>
  
  <!-- Contenu principal (en dehors du menu) -->
  <div class="max-w-[1500px] mx-auto pl-[240px]">
    <router-view/>
  </div>
</div>
</template>
