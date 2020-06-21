<template>
  <v-toolbar :elevation="2" class="primary">
    <v-toolbar-title>
      <span class="headline white--text"
        >Bolsa filantropia - processo seletivo {{ year }}</span
      >
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    year() {
      const date = new Date();

      return date.getFullYear();
    },
  },
};
</script>

<style></style>
