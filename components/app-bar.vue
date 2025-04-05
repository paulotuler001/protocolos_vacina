<template>
    <v-app-bar color="#426B1F">
        <v-app-bar-nav-icon>
            <img width="35" src="/public/cat-dog.png"></img>
        </v-app-bar-nav-icon>
        <p style="font-size: 24px;font-family: 'Newsreader', sans-serif;">Cuidado e Proteção | A relevância da vacinação para animais de companhia</p>
        <v-spacer></v-spacer> 
        <v-btn text="Início" to="/" style="text-transform: none; font-family: 'Inter', sans-serif;"></v-btn>
        <v-btn text="Por onde começar?" to="/ondeComecar" style="text-transform: none; font-family: 'Inter', sans-serif;"></v-btn>
        <v-btn text="Sobre nós" to="/sobreNos" style="text-transform: none; font-family: 'Inter', sans-serif;"></v-btn>
        <v-btn text="Projeto de Extensão" to="/projetoExtensao" style="text-transform: none; font-family: 'Inter', sans-serif;"></v-btn>
        <v-btn text="Referências" to="/referencias" style="text-transform: none; font-family: 'Inter', sans-serif;"></v-btn>
    </v-app-bar>
</template>