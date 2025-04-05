<template>
    <div class="d-flex align-center justify-center flex-column" style="min-height: 60vh;">
        <v-card class="mt-16 mb-15" style="border-radius: 0; width: 80%;" color="#C5E3AC">
            <v-card-title class="text-h5 mb-0"><p class="protocolos mb-0"><p class="ml-5 mb-0" style="font-family: 'Newsreader', sans-serif;" >Como começar o protocolo vacinal do seu pet <v-icon>mdi-dog</v-icon></p></p></v-card-title>
        </v-card>
        <v-card color="#C5E3AC" class="mb-0" style="width: 80%; border-radius: 0;">
                <v-card-text>
                    <div style="font-family: 'Inter', sans-serif;white-space: pre-line;">
                        {{ texto }}
                    </div>
                </v-card-text>
        </v-card>
    </div>
</template>
<script setup>
const texto = `
Você já iniciou o protocolo vacinal do seu pet?

Vacinar seu cão ou gatinho é essencial para protegê-los de diversas doenças graves, como cinomose, parvovirose, leptospirose e até raiva. A vacinação não só garante a saúde do seu pet, como também ajuda a proteger outros animais e pessoas ao redor.

Dicas para começar:

1. Idade ideal: O protocolo normalmente começa entre 6 e 8 semanas de vida (mas mesmo adultos que nunca foram vacinados devem iniciar!) Mas lembre-se nunca é tarde para começar.
2. Escolha um veterinário de confiança: Só um profissional pode indicar as vacinas certas para a idade, porte e estilo de vida do seu pet.
3. Respeite os reforços: Algumas vacinas exigem doses de reforço em intervalos específicos para garantir a proteção completa.
4. Não atrase as doses: O atraso pode comprometer a eficácia do protocolo.
5. Guarde a carteirinha: Ela é importante para controle e, em alguns lugares, exigida por lei.

Cuidar é um ato de amor! Comece o protocolo vacinal e mantenha seu melhor amigo protegido.`
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