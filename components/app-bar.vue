<template>
	<v-container>

  <v-app-bar color="#426B1F">
    <!-- Ícone do menu (mobile) -->
    <v-app-bar-nav-icon v-if="isMobile" @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-app-bar-nav-icon>
    
    <!-- Logo e título (visível em todas as telas) -->
    <template v-if="!isMobile">
      <img width="35" src="public/cat-dog.png" alt="Logo Pet" class="mr-2">
    </template>
    
    <!-- Título responsivo -->
    <p class="title-text" :class="{ 'mobile-title': isMobile }">
      Cuidado e Proteção | A relevância da vacinação para animais de companhia
    </p>
    
    <v-spacer></v-spacer>
    
    <!-- Botões do menu (apenas desktop) -->
    <template v-if="!isMobile">
      <v-btn 
        v-for="(item, index) in menuItems" 
        :key="index" 
        :to="item.to" 
        variant="text"
        class="menu-btn"
        style="text-transform: none; font-family: 'Inter', sans-serif;">
        {{ item.text }}
      </v-btn>
    </template>
    
    <!-- Drawer para mobile -->
  </v-app-bar>
	<v-navigation-drawer 
      v-model="drawer" 
      temporary 
      location="left"
      scrim
      @click.stop
    >
      <v-list nav>
        <v-list-item prepend-avatar="/cat-dog.png" title="Menu" class="mb-4"></v-list-item>
        <v-divider></v-divider>
        
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :value="item.to"
          :to="item.to"
          @click="drawer = false"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon || 'mdi-circle-small'"></v-icon>
          </template>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
	</v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';

const { mdAndDown } = useDisplay();
const drawer = ref(false);

const isMobile = computed(() => mdAndDown.value);

const menuItems = [
  { text: 'Início', to: '/' },
  { text: 'Por onde começar?', to: '/ondeComecar' },
  { text: 'Sobre nós', to: '/sobreNos' },
  { text: 'Projeto de Extensão', to: '/projetoExtensao' },
  { text: 'Referências', to: '/referencias' }
];
</script>

<style scoped>
.title-text {
  font-size: 24px;
  font-family: 'Newsreader', sans-serif;
  margin-left: 8px;
  max-width: 60%;
  white-space: wrap;
}

.mobile-title {
  font-size: 16px;
  max-width: 70%;
  white-space: wrap;
}

.menu-btn {
  min-width: auto;
  padding: 0 8px;
}

/* Ajustes para telas muito pequenas */
@media (max-width: 400px) {
  .mobile-title {
    font-size: 14px;
    max-width: 60%;
  }
}

/* Remove o padding lateral do app-bar em mobile */
@media (max-width: 600px) {
  :deep(.v-toolbar__content) {
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>