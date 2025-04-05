<template>
    <div class="d-flex align-center justify-center flex-column" style="min-height: 100vh;">
        <div class="mb-5">
            <AppBar></AppBar>
        </div>
        
        <v-card class="mt-16 mb-5" style="border-radius: 0; width: 80%;" color="#C5E3AC">
            <v-card-title class="text-h5 mb-0"><p class="protocolos mb-0"><p class="ml-5 mb-0" style="font-family: 'Newsreader', sans-serif;" >PROTOCOLOS VACINAIS</p></p></v-card-title>
        </v-card>
        <v-card color="#C5E3AC" class="pt-5 pb-5" style="width: 80%; border-radius: 0;">
            <div class="card-reto ma-0" v-for="title in nomesDeVacina">
                <v-expansion-panels flat elevation="0" color="#C5E3AC" class="mb-0">
                    <v-expansion-panel  style="border: none !important;" class="mb-0">
                        <v-expansion-panel-title>
                            <p class="protocolos">
                                {{ title }}
                            </p>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="mb-0">
                            {{ title }}
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </v-card>
        
        <v-footer class="d-flex flex-column ga-2 py-4 mb-0" style="margin-top: 100px;width: 100vw; height: 10%; align-items: start;" color="#426B1F">
            <p class="ml-15">Contate-nos: </p>
            <p class="ml-15"><v-icon>mdi-email</v-icon> protocolos.vacinais.estacio.medvet@gmail.com</p>
            <p class="ml-15"><v-icon>mdi-instagram</v-icon> @protocolos_vacinais_estacio</p>
            
        </v-footer>
    </div>
</template>
<script setup>

const nomesDeVacina = ref([
    "Leishmaniose canina (proteína recombinante A2, parenteral)",
    "Leishmaniose canina [proteínas excretadassecretadas (LiESP) de L. infantum, parenteral]",
    "Bordetella bronchiseptica",
    "FPV+FCV+FHV: parenteral, viva atenuada Vírus da panleucopenia felina (FPV) +herpesvírus",
    "FPV+FCV+FHV: parenteral, inativada Vírus da panleucopenia felina",
    "Leptospirose",
    "Raiva",
    "Giardia",
    "Parvovirose",
])
</script>

<style scoped>
.protocolos {
    border-bottom: 1.8px solid rgba(97, 97, 97, 0.5);
    font-family: 'Newsreader', sans-serif;
}


</style>