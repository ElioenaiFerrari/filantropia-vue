<template>
  <v-layout column>
    <v-alert
      v-show="!isLoading && success != null"
      :class="{ primary: success, error: !success }"
      class="headline white--text font-weight-bold lighten-1"
    >
      <v-row class="px-2" align="center" justify="space-between">
        {{ message }}
        <v-btn outlined>
          Ir para <span class="white--text">UNISALES</span>
        </v-btn>
      </v-row>
    </v-alert>
    <v-card>
      <v-card-title v-show="isLoading">
        <span class="headline">
          Aguarde, seus dados estão sendo enviados.
        </span>

        <v-progress-linear v-show="isLoading" class="mt-4" indeterminate />
      </v-card-title>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  async created() {
    const { data } = await this.$http.post('/send', {});

    this.success = data.success;
    this.isLoading = false;
  },

  computed: {
    message() {
      if (this.success) {
        return 'Seus dados foram enviados com sucesso!';
      } else {
        return 'Ocorreu um erro no seu envio. Por favor, tente mais tarde.';
      }
    },
  },

  data() {
    return {
      isLoading: true,
      success: null,
    };
  },
};
</script>

<style></style>
