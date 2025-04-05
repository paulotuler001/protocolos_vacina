<template>
    <div class="d-flex align-center justify-center flex-column" style="min-height: 60vh;">
        <v-card class="mt-16 mb-15" style="border-radius: 0; width: 80%;" color="#C5E3AC">
            <v-card-title class="text-h5 mb-0"><p class="protocolos mb-0"><p class="ml-5 mb-0" style="font-family: 'Newsreader', sans-serif;" >Referências</p></p></v-card-title>
        </v-card>
        <v-card color="#C5E3AC" class="mb-0" style="width: 80%; border-radius: 0;">
                <v-card-text>
                    <p v-for="link in links" style="font-family: 'Inter', sans-serif;">
                        <a :href="link">{{link}}</a>
                    </p>
                    Casos De Rotina Em Medicina Veterinária De Pequenos Animais De Leandro Z. Crivellenti Série Casos De Rotina Vol. 1 Editora Medvet Capa Mole 3ª Edição Em Português 2023
                </v-card-text>
        </v-card>
    </div>
</template>
<script setup>

const links = [
    `https://wsava.org/wp-content/uploads/2020/01/WSAVA-vaccination-guidelines-2015-Portuguese.pdf`,
    `https://petmed.com.br/artigos/vacinacao-pets`,
    `https://www.agrivet.pt/blog/vacina-da-raiva-para-caes-6-respostas-as-duvidas-mais-frequentes`,
    `https://www.msd-saude-animal.com.br/produto/nobivac-raiva/`,
    `https://www.integrativapet.com.br/parvovirose-canina-e-muito-seria-mas-tem-vacina-e-tratamento/`,
    `https://drauziovarella.uol.com.br/doencas-e-sintomas/giardiase/`,
    `https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/giardiase`,
    `https://veterinario.poapetcare.com.br/blog/categorias/artigos/vacina-contra-leptospirose-para-c-atilde-es-import-acirc-ncia-e-benef-iacute-cios`,
    `https://portalvet.royalcanin.com.br/saude-e-nutricao/outros-assuntos/leptospirose-canina/`,
    `https://portalvet.royalcanin.com.br/saude-e-nutricao/trato-gastrointestinal/triade-felina/`,
    `https://www.zoetis.com.br/prevencaocaesegatos/posts/gatos/a-import%C3%A2ncia-da-vacina%C3%A7%C3%A3o-na-constru%C3%A7%C3%A3o-da-imunidade-dos-felinos-(programa-vacina-gatos).aspx`,
    
]

</script>

<style scoped>
.protocolos {
    border-bottom: 1.8px solid rgba(97, 97, 97, 0.5);
    font-family: 'Newsreader', sans-serif;
}
.intern-card {
    margin-top: 10px;
    background-color: #C5E3AC;
}

</style>