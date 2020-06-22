<template>
  <v-layout column>
    <v-card>
      <v-card-title loading>
        <span class="headline">Dados enviados</span>
        <v-progress-linear indeterminate />
      </v-card-title>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  async created() {
    const { success } = await this.$http.post('/send', {});

    if (success) {
      console.log(success);
    } else {
      console.log(success);
    }
  },
};
</script>

<style></style>
