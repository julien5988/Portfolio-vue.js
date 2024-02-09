<template>
    <h1 class="text-white">Contact</h1>
    <div class="flex justify-around ">
        <div class="w-[400px]">
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit minus velit neque quod.
                Nulla harum quod ea consequatur, corrupti beatae blanditiis rem natus porro dolores aperiam deserunt sit quo
                dicta.</p>
        </div>

        <form
            class="max-w-[400px] border border-white rounded-md p-4 flex flex-col bg-blue-600 bg-opacity-25 backdrop-filter backdrop-blur-lg"
            action="" method="post">
            <div class="">
                <div class="flex flex-col mb-4">
                    <label class="text-white" for="name">Nom:</label>
                    <input class="opacity-90 text-white font-semibold bg-transparent border border-white rounded-md p-1" type="text"
                        name="name" id="nom">
                </div>
                <div class="flex flex-col mb-4">
                    <label class="text-white" for="prenom">Prénom:</label>
                    <input class="opacity-90 text-white font-semibold bg-transparent border border-white rounded-md p-1" type="text" name="prenom" id="prenom">
                </div>
                <div class="flex flex-col mb-4">
                    <label class="text-white" for="email">Email:</label>
                    <input class="opacity-90 text-white font-semibold bg-transparent border border-white rounded-md p-1" type="email" name="email" id="email">
                </div>
                <div class="flex flex-col mb-4">
                    <label class="text-white" for="phone">N°telephone:</label>
                    <input class="opacity-90 text-white font-semibold bg-transparent border border-white rounded-md p-1" type="tel" name="phone" id="phone">
                </div>
                <div class="flex flex-col mb-4">
                    <label class="text-white" for="message">Votre message:</label>
                    <textarea class="opacity-90 text-white font-semibold bg-transparent border border-white rounded-md p-1" name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <div class="flex justify-center"> 
                    <button class="rounded-sm p-2 bg-red-600 text-white hover:opacity-80" type="submit">Envoyer</button>
                </div>
            </div>
        </form>


</div></template>