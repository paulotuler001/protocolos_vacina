<template>
    <div class="d-flex align-center justify-center flex-column" style="min-height: 80vh;">
        <v-card class="mt-16 mb-5" style="border-radius: 0; width: 80%;" color="#C5E3AC">
            <v-card-text class="text-h6 mb-0"><p class="protocolos mb-0"><p class="ml-5 text-center mb-0" style="font-family: 'Newsreader', sans-serif;" >{{ titulo }}</p></p></v-card-text>
        </v-card>
        <v-card color="#C5E3AC" class="pb-10" style="width: 80%; border-radius: 0; padding-bottom: 20px;overflow-y: auto;">
                <v-expansion-panels flat elevation="0" color="#C5E3AC" class="mb-0" accordion style="min-height: 300px;  max-height: 500px;">
                    <v-expansion-panel v-for="vacina in vacinas" style="border: none !important;">
                        <v-expansion-panel-title style="">
                            <p class="protocolos">
                                {{ vacina.titulo }}
                            </p>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="mb-0" style="">
                            <v-card class="intern-card" v-if="vacina.spp">
                                <v-card-title>Variantes cobertas pela vacina</v-card-title>
                                <v-card-text>{{ vacina.spp ?? "Não tem" }}</v-card-text>
                            </v-card>
                            <v-card class="intern-card">
                                <v-card-title>Agente Causador</v-card-title>
                                <v-card-text>{{ vacina.patogenos ?? "Não tem" }}</v-card-text>
                            </v-card>
                            <v-card class="intern-card">
                                <v-card-title>Desenvolvimento da Doença</v-card-title>
                                <v-card-text>{{ vacina.patogenia ?? "Não tem" }}</v-card-text>
                            </v-card>
                            <v-card class="intern-card">
                                <v-card-title>Aplicação e Reforço</v-card-title>
                                <v-card-text>{{ vacina.aplicacao ?? "Não tem" }}</v-card-text>
                            </v-card>
                            <v-card v-if="vacina.obs" class="intern-card">
                                <v-card-title>Observação</v-card-title>
                                <v-card-text >{{ vacina.obs ?? "Não tem" }}</v-card-text>
                            </v-card>
                            <v-card  class="intern-card">
                                <v-card-title>Apresentação</v-card-title>
                                <v-card-text>{{ vacina.apresentacao ?? "Não tem" }}</v-card-text>
                            </v-card>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
        </v-card>
    </div>
</template>
<script setup>

const vacinas = ref([
{
    titulo:`Leishmaniose canina (proteína
recombinante A2, parenteral)`,
    patogenos: `Utiliza das proteinas da leishmania infantumm(proteína
recombinante A2, parenteral)`,
    patogenia: `A Leishmaniose Tegumentar é uma doença infecciosa, não contagiosa, que provoca úlceras na pele e mucosas. A doença é causada por protozoários do gênero Leishmania. No Brasil, há sete espécies de leishmanias envolvidas na ocorrência de casos de LT. As mais importantes são: Leishmania (Leishmania) amazonensis, L. (Viannia) guyanensis e L.(V.) braziliensis. A doença é transmitida ao ser humano pela picada das fêmeas de flebotomíneos (espécie de mosca) infectadas.)
Já a leishmaniose visceral, como o próprio nome indica, afeta as vísceras (ou órgãos internos), sobretudo fígado, baço, gânglios linfáticos e medula óssea, podendo levar à morte. Os sintomas incluem febre, emagrecimento, anemia, aumento do fígado e do baço, hemorragias e imunodeficiência. Doenças causadas por bactérias (principalmente pneumonias) ou manifestações hemorrágicas são as causas mais frequentes de óbito nos casos de leishmaniose visceral, especialmente em crianças. `,
    aplicacao: 'Filhotes: Três doses, com intervalo de 3 '+
'semanas, sendo a dose inicial - 4 meses de idade. '+  
'Adultos: Três doses, com 3 semanas de intervalo - anualmente',
    obs: `A vacina não é essencial, mas é util na prevenção contra o parasita, entretanto a prevenção mais ativa é o controle dos flebotomineos(mosquitos principalmente) que carreiam o vetor, Vacinas não essenciais selecionadas podem ser recomendadas após consideração cuidadosa do estilo de vida de cada animal e da prevalência
local de doenças controláveis por vacinação`,
    apresentacao: ` As vacinas de LCan
não podem prevenir a infecção de forma confiável e, portanto, mesmo os cães vacinados podem atuar como reservatório de L. infantum. e
continuar a transmitir a doença a outros cães e para pessoas (Wsava)`,
},
{
    titulo: `Leishmaniose canina (proteínas excretadassecretadas (LiESP) de L. infantum, parenteral)`,
    patogenos: `Utiliza das proteinas da leishmania infantumm(proteínas excretadassecretadas (LiESP) de L. infantum, parenteral)`,
    patogenia:`A Leishmaniose Tegumentar é uma doença infecciosa, não contagiosa, que provoca úlceras na pele e mucosas. A doença é causada por protozoários do gênero Leishmania. No Brasil, há sete espécies de leishmanias envolvidas na ocorrência de casos de LT. As mais importantes são: Leishmania (Leishmania) amazonensis, L. (Viannia) guyanensis e L.(V.) braziliensis. A doença é transmitida ao ser humano pela picada das fêmeas de flebotomíneos (espécie de mosca) infectadas.)
Já a leishmaniose visceral, como o próprio nome indica, afeta as vísceras (ou órgãos internos), sobretudo fígado, baço, gânglios linfáticos e medula óssea, podendo levar à morte. Os sintomas incluem febre, emagrecimento, anemia, aumento do fígado e do baço, hemorragias e imunodeficiência. Doenças causadas por bactérias (principalmente pneumonias) ou manifestações hemorrágicas são as causas mais frequentes de óbito nos casos de leishmaniose visceral, especialmente em crianças. `,
    aplicacao:`Três doses, com intervalo de 3 semanas, sendo a dose inicial de 6 meses de idade. Três doses, com 3 semanas de intervalo. Anualmente`,
    apresentacao: ` As vacinas de LCan
    não podem prevenir a infecção de forma confiável e, portanto, mesmo os cães vacinados podem atuar como reservatório de L. infantum. e
    continuar a transmitir a doença a outros cães e para pessoas (Wsava)`,
    obs:``,
},    
{
    titulo: `Leishmaniose canina
(proteína Q recombinante,
parenteral)`,
    patogenos: `Utiliza das proteinas da leishmania infantumm(proteína Q recombinante,
parenteral)`,
    patogenia:`A Leishmaniose Tegumentar é uma doença infecciosa, não contagiosa, que provoca úlceras na pele e mucosas. A doença é causada por protozoários do gênero Leishmania. No Brasil, há sete espécies de leishmanias envolvidas na ocorrência de casos de LT. As mais importantes são: Leishmania (Leishmania) amazonensis, L. (Viannia) guyanensis e L.(V.) braziliensis. A doença é transmitida ao ser humano pela picada das fêmeas de flebotomíneos (espécie de mosca) infectadas.)
Já a leishmaniose visceral, como o próprio nome indica, afeta as vísceras (ou órgãos internos), sobretudo fígado, baço, gânglios linfáticos e medula óssea, podendo levar à morte. Os sintomas incluem febre, emagrecimento, anemia, aumento do fígado e do baço, hemorragias e imunodeficiência. Doenças causadas por bactérias (principalmente pneumonias) ou manifestações hemorrágicas são as causas mais frequentes de óbito nos casos de leishmaniose visceral, especialmente em crianças. `,
    aplicacao:`Dose única a partir dos 6 meses
de idade. Dose única. Anualmente`,
    apresentacao: ` As vacinas de LCan
    não podem prevenir a infecção de forma confiável e, portanto, mesmo os cães vacinados podem atuar como reservatório de L. infantum. e
    continuar a transmitir a doença a outros cães e para pessoas (Wsava)`,
    obs:``,
},    
{
    titulo: `Bordetella Spp.`,
    spp: `B. bronchiseptica+CPiV (VVM) (intranasal),
B. bronchiseptica+CPiV (VVM),
+CAV-2 (VVM) intranasal,
B. bronchiseptica (oral),
B. bronchiseptica+CPiV (VVM) (oral)
(bacterina morta, parenteral),
Bordetella bronchiseptica (extrato
de antígeno de parede celular
parenteral),
Bordetella bronchiseptica
(antígeno fimbrial, parenteral)`,
    patogenos: `Utiliza bactérias avirulentas vivas da Bordetella bronchiseptica. Bordetella bronchiseptica, CPiV (Vírus da Parainfluenza Canina) e CAV-2 (Adenovírus Canino Tipo 2)`,
    patogenia:`Bordetella bronchiseptica: Causa tosse seca persistente, espirros, corrimento nasal e, em casos graves, pneumonia. Transmissão ocorre por gotículas respiratórias e contato direto com secreções de animais infectados.
CPiV: Provoca destruição do epitélio respiratório, resultando em tosse aguda, laringite e traqueíte. Pode levar a complicações secundárias, como infecções bacterianas.
CAV-2: Afeta o epitélio respiratório, causando tosse, corrimento nasal e, em casos graves, pneumonia hemorrágica.`,
    aplicacao:`"Filhotes: Vacinas aplicadas na mucosa oferecem proteção com dose única. Algumas podem ser administradas a partir de 3 semanas de idade, enquanto outras a partir de 7 ou 8 semanas. É importante seguir as orientações específicas da bula.
Adultos: Requerem apenas uma dose única.`,
    obs:`Não essencial.
Estas vacinas vivas destinadas à
administração intranasal ou oral NÃO
DEVEM ser injetadas inadvertidamente
por via parenteral, pois isso pode levar
a uma reação adversa grave.`,
    apresentacao: `"Intranasal: Vanguard Rapid Resp B: Inclui Bordetella bronchiseptica e CPiV (Parainfluenza Canina), administrada via intranasal.
Nobivac KC: Combina Bordetella bronchiseptica e CPiV, também intranasal.
Oral: Recombitek Oral Bordetella: Contém Bordetella bronchiseptica em cultura viva avirulenta, administrada por via oral"

Bacterina morta (parenteral): BronchiGuard: utiliza extratos antigênicos inativados de Bordetella bronchiseptica. É administrada por via subcutânea e gera imunidade sistêmica predominante de anticorpos IgG. Antígeno fimbrial (parenteral): Bronchi-Shield: projetada para estimular uma resposta imunológica específica contra as fímbrias da bactéria, que são importantes para sua adesão ao trato respiratório.
`,
},    
{
    titulo: `Tríplice Felina`,
    patogenos: `Vírus inativados (mortos ou desativados). Vírus da panleucopenia felina (FPV), Herpesvírus felino-1 (FHV) e Calicivírus felino (FCV). FPV+FCV+FHV: parenteral, inativada
Vírus da panleucopenia felina (FPV) + herpesvírus felino-1 (FHV) + calicivírus felino (FCV)`,
    patogenia:`"Vírus da panleucopenia felina (FPV): Causa a panleucopenia felina, que é caracterizada por febre, vômitos, diarreia (às vezes sanguinolenta) e imunossupressão severa. Em filhotes, pode levar à hipoplasia cerebelar (diminuição da parte do cérebro que é responsável equilíbrio, a coordenação e as habilidades que requerem mais precisão) se a infecção ocorrer durante a gestação.
Herpesvírus felino-1 (FHV): Está relacionado à rinotraqueíte viral felina, que provoca sintomas respiratórios superiores, como espirros, secreção nasal e ocular, além de úlceras na córnea em casos graves.
Calicivírus felino (FCV): Pode causar infecções respiratórias superiores, úlceras orais e, em casos mais graves, febre alta, edema e até doenças sistêmicas.`,
    aplicacao:`Recomenda-se revacinar filhotes aos 6 meses de idade para reduzir a vulnerabilidade em casos de resposta imunológica ativa tardia. Após isso, gatos de baixo risco devem ser revacinados aos 3 anos e a cada 3 anos. Já para gatos de maior risco, é indicada a revacinação anual.`,
    obs:`Vacinas parenterais inativadas contra FPV são menos eficazes em proteção rápida e duradoura em comparação com vacinas contendo VVM. Opções sem adjuvantes são mais seguras para gatas gestantes. Gatos infectados por retrovírus devem ser vacinados, e vacinas inativadas podem ser preferidas nesses casos. Vacinas de FCV bivalentes proporcionam proteção mais ampla. Para gatos de maior risco, como aqueles que frequentam gatis ou ambientes de alto estresse, recomenda-se revacinação anual ou 1-2 semanas antes da exposição.	`,
    apresentacao: `Via parenteral: Nobivac Tricat Trio: Contém FPV, FHV-1 e FCV, sendo uma vacina viva atenuada indicada para imunização de gatos contra essas doenças.

Felocell 3: Outra vacina viva atenuada que protege contra panleucopenia, rinotraqueíte (herpesvírus) e calicivirose.

Purevax RCP: Inclui os mesmos componentes, com a vantagem de ser livre de adjuvantes, reduzindo o risco de reações adversas.

Via parenteral: Feligen CRP: Uma vacina inativada que protege contra FPV, FHV-1 e FCV.

Purevax RCP (versão inativada): Livre de adjuvantes, indicada para gatos com maior sensibilidade.
`,
},    
{
    titulo: `Leptospirose`,
    patogenos: `Leptospira interrogans sorovar canicola e sorovar icterohaemorrhagiae / vacina inativada.`,
    patogenia:`Bactéria entra em contato com mucosas, pele ou feridas, resultando em icterícia, vasculite, lesão hepática, injúria renal aguda, febre, hemorragia pulmonar e inflamação dos músculos. O transmissor e hospedeiro reservatório são os roedores, que transmite através da urina.`,
    aplicacao:`O protocolo de vacinação para filhotes inclui três doses administradas com 3 semanas de intervalo, a partir de 8 semanas de idade e após esse período inicial, um reforço anual. Administrar de acordo com as recomendações do fabricante: geralmente entre duas doses com 2 a 4 semanas de intervalo. Administração por via subcutânea.`,
    obs:`Reações ou efeitos colaterais pós vacinal de leve dor ou desconforto no local da aplicação e ou febre leve que pode sumir com 1 ou 2 dias.`,
},    
{
    titulo: `Raiva`,
    patogenos: `Não utiliza patógenos vivos, e sim o vírus inativado(morto) do Rabies virus`,
    patogenia:`Pelo vírus ter predileção pelo sistema nervoso, após infecção, ele se multiplica no local da mordida e se propada pelos nervos periféricos até alcançar o sistema nervoso central,  causando uma encefalite  (inflamação  do cérebro). A doença é quase sempre fatal após o início dos sintomas,  que incluem hiperexcitabilidade, paralisia e salivação.	`,
    apresentacao: `Nobivac® Raiva`,
    aplicacao:`Em cães e gatos, a primeira dose é aplicada a partir dos 3 meses de idade, com um reforço  anual.`,
    obs:`A principal forma de controle da doença  é protegendo os animais e prevenindo a transmissão para os humano.`,
},    
{
    titulo: `Giardia`,
    patogenos: `Utiliza o protozoário inativo da giardia lamblia`,
    patogenia:`A infecção  ocorre pela ingestão  dos cistos do protozoário presentes  na água, alimentos ou ambientes contaminados. No intestino, os cistos se transformam em trofozoítos que se aderem à mucosa intestinal, prejudicando a absorção de nutrientes causando diarreia, vômito, perda de peso, e até infecções  assintomáticas`,
    apresentacao: `GiardiaVax®, desenvolvida pela Zoetis.`,
    aplicacao:`A vacina é aplicada em duas doses com intervalo de 2 a 4 semanas, começando a partir  da 8 semana de vida do animal. Após  esse ciclo o reforço  é anual.`,
    obs:`A vacina deve se associada à medidas de higiene e controle ambiental para ser eficaz na prevenção de giardíase`,
},    
{
    titulo: `Parvovirose`,
    patogenos: `Parvovírus canino tipo 2 (CPV-2) / Imunização ativa. Vacina polivalente, oferece imunidade para outras doenças.`,
    patogenia:` Altamente contagiosa para filhotes até 6 meses de idade, de transmissão oral-fecal e os sintomas são vômitos, diarreia hemorrágica com odor forte e característico, depressão, perda de apetite, febre e desidratação. Miocardite pode ocorrer em filhotes neonatos, manifestando sinais clínicos semanas após a infecção, enquanto a contagem de glóbulos brancos diminui devido à infecção da medula óssea e tecidos linfoides.`,
    apresentacao: `NOBIVAC® DHPPI+L; Recombitek C6/CV; VANGUARD HTLP 5/CV-L (V8)`,
    aplicacao:`Iniciar com 4-6 semanas de idade e então a cada 2 a 4 semanas até 12 semanas de idade ou mais. Totalizando 4 doses com intervalo. Necessário reforço anual.`,
    obs:`As fezes do Parvovirus tem um odor fétido e único.`,
},    
])

const titulo = `PROTOCOLOS VACINAIS`
</script>

<style scoped>
.protocolos {
    border-bottom: 1.8px solid rgba(97, 97, 97, 0.5);
    font-family: 'Newsreader', sans-serif;
		text-align: center;
}
.intern-card {
    margin-top: 10px;
    background-color: #C5E3AC;
}

</style>