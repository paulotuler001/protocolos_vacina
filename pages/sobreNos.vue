<template>
    <v-container fluid class="d-flex flex-column align-center justify-center" style="margin-top: 50px; margin-bottom: 10px;">
        <div class="pa-3" style="background-color: #C5E3AC; border-radius: 5px;">
            <h1 style="border-bottom: 2px solid black;">Sobre nós:</h1>
        </div>
        <v-row class="mt-5">
            
            <v-col>
                <img src="/public/camila.png" width="400" style="border-radius: 5px;">
                <v-card style="width: 400px; background-color: #C5E3AC;">
                    <v-card-text style="height: 150px;">
                        
                        <p>Camila Miranda</p>
                        
                        <p>7º período de Medicina Veterinária.</p>
                        
                        <p>Área de interesse: Endocrinologia.</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <img src="/public/gui.png" width="400" style="border-radius: 5px;">
                <v-card style="width: 400px; background-color: #C5E3AC;">
                    <v-card-text style="height: 150px;">
                        <p>Guilherme Costa </p>

                        <p>7º período de Medicina Veterinária.</p>

                        <p>Área de interesse: Patologia Clínica e Pesquisa Acadêmica</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <img src="/public/amor.png" width="400" style="border-radius: 5px;">
                <v-card style="width: 400px; background-color: #C5E3AC;">
                    <v-card-text style="height: 150px;">
                        <p>Isabelle Pereira </p>

                        <p>6º Periodo de Medicina Veterinária.</p>

                        <p>Área de interesse: Animais silvestres e Cirurgia Ortopédica</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <img src="/public/willer.png" width="400" style="border-radius: 5px;">
                <v-card style="width: 400px; background-color: #C5E3AC;">
                    <v-card-text style="height: 150px;">
                        <p>Willer Braga</p>

                        <p>7º periodo de Medicina Veterinária.</p>

                        <p>Área de interesse: Anestesiologia e Animais Silvestres</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
</script>

<style scoped>

p{
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: #000000;
}
</style>