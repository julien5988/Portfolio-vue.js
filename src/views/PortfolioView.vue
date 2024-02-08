<script setup>
import CardProject from '../components/CardProject.vue';

</script>

<template>
    <h1 class="text-white text-center text-6xl mt-4">Portfolio</h1>

    <!-- Utiliser la composante CardProject avec des propriétés spécifiées -->
    <div class="flex justify-around mt-20">
        <CardProject
            text="Description de l'extension VSCode"
            titre="Extension Vscode"
            image="src\assets\Extension.png"
        />
        <CardProject
            text="Description de l'extension VSCode"
            titre="Extension Vscode"
            image="src\assets\Extension.png"
        />
        <CardProject
            text="Description de l'extension VSCode"
            titre="Extension Vscode"
            image="src\assets\Extension.png"
        />
    </div>
</template>
