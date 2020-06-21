<template>
  <v-app>
    <v-content>
      <Header />
      <transition>
        <v-container>
          <router-view />
        </v-container>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/templates/Header';
export default {
  name: 'App',
  data: () => ({}),
  components: {
    Header,
  },
};
</script>

<style scoped></style>
