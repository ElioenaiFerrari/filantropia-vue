<template>
  <v-layout column>
    <v-card>
      <v-card-title>
        <span class="headline">{{
          isLoading
            ? 'Aguarde, seus dados estão sendo enviados.'
            : 'Dados enviados com sucesso.'
        }}</span>

        <v-progress-linear v-show="isLoading" class="mt-4" indeterminate />
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

  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style></style>
