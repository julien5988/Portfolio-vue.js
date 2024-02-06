    <script setup>
    import { toRefs, defineProps } from 'vue'
    import { RouterLink, useRoute } from 'vue-router';
    
    const route = useRoute()
    
    const props = defineProps({
        pageUrl: String,
        name: String
    })
    const { pageUrl, name } = toRefs(props)
    </script>
<template>
    <div class="flex items-center w-full my-[20px]">
        <RouterLink
            :to="pageUrl"
            :class="pageUrl === route.path ? 'border-l-[#EF5465] text-[#EF5465]' : 'border-l-[#191922] text-[#FFFFFF]'"
            class="border-l-4 w-full hover:text-[#EF5465]"
        >
            <div class="flex items-center pl-3 mx-3 cursor-pointer">
                <div class="pl-3.5 font-[600] text-white text-[17px]">{{ name }}</div>
            </div>
        </RouterLink>
    </div>
</template>
