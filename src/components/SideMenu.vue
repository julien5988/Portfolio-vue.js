<script setup>
import { toRefs, defineProps } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHead, mdiHomeCircle, mdiBookCog, mdiCardAccountMail, mdiLinkedin, mdiGithub } from '@mdi/js';

const route = useRoute();

// Définir les icônes correspondantes à chaque nom
const iconMap = {
    Accueil: mdiHomeCircle,
    "À propos de moi": mdiHead,
    Portfolio: mdiBookCog,
    Contact: mdiCardAccountMail
};

const props = defineProps({
    pageUrl: String,
    name: String,
    collapsed: Boolean // Ajout de la propriété collapsed pour indiquer si le menu est réduit ou non
});
const { pageUrl, name, collapsed } = toRefs(props);

// Fonction pour obtenir l'icône correspondante en fonction du nom
function getIcon() {
    if (iconMap.hasOwnProperty(name.value)) {
        return iconMap[name.value];
    } else {
        console.error('Icône non trouvée pour le nom:', name.value);
        return null;
    }
}

const isHover = () => {
    if (icon.value == iconString.value + '-red') {
        icon.value = iconString.value + '-white'
    } else if (icon.value === iconString.value + '-white') {
        icon.value = iconString.value + '-red'
    }
}
</script>

<template>
    <div class="flex items-center w-full my-[20px]">
        <RouterLink :to="pageUrl"
            :class="pageUrl === route.path ? 'border-l-[#EF5465] text-[#EF5465]' : 'border-l-[#191922] text-[#FFFFFF]'"
            class="border-l-4 w-full hover:text-[#EF5465]" @mouseenter="isHover()" @mouseleave="isHover()">
            <div class="flex items-center mx-3 cursor-pointer text-white hover:text-red-600">
                <!-- Condition pour afficher l'icône seule lorsque le menu est réduit -->
                <template v-if="collapsed">
                    <SvgIcon type="mdi" :path="getIcon()" class="h-8 w-8 mx-auto hover:text-[#EF5465]" />
                </template>
                <!-- Afficher l'icône avec le nom de la section lorsque le menu est déployé -->
                <template v-else>
                    <SvgIcon type="mdi" :path="getIcon()" class="h-6 w-6 mr-4 hover:text-[#EF5465]" />
                    <div class="font-[600] text-[22px] hover:text-[#EF5465]">{{ name }}</div>
                </template>
            </div>
        </RouterLink>
    </div>
</template>
