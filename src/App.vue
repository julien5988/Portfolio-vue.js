<script setup>
import { RouterLink, RouterView } from 'vue-router';
import SideMenu from './components/SideMenu.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { ref } from 'vue';
import { mdiChevronDoubleLeft,mdiChevronDoubleRight } from '@mdi/js';


const collapsed = ref(false);

function toggleCollapse() {
  collapsed.value = !collapsed.value;
}
</script>

<template>
  <div id="SideNav" :class="{ 'w-[240px]': !collapsed, 'w-[60px]': collapsed }" class="fixed bg-[#191922] h-[100vh] border-r border-r-[#32323D]">
    <div class="flex flex-col items-end justify-end h-30">
      <button @click="toggleCollapse" class="mr-4 mt-6 p-2 rounded-full hover:bg-[#2b2b2b]">
        <SvgIcon type="mdi" :path="collapsed ? mdiChevronDoubleRight : mdiChevronDoubleLeft" class="text-white" />
      </button>
    </div>
    <div class="mt-[80px]"></div>  
    <SideMenu pageUrl="/" name="Accueil" :icon="mdiHomeCircle" :collapsed="collapsed" />
    <SideMenu pageUrl="/" name="À propos de moi" :icon="mdiHead" :collapsed="collapsed" />
    <SideMenu pageUrl="/" name="Portfolio" :icon="mdiBookCog" :collapsed="collapsed" />
    <SideMenu pageUrl="/" name="Contact" :icon="mdiCardAccountMail" :collapsed="collapsed" />
    <RouterView/>
  </div>
</template>
