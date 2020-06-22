<template>
  <v-row justify="center">
    <v-dialog v-model="model" persistent max-width="290">
      <v-card class="pa-4">
        <slot name="content" />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" text @click="onCancel">Cancelar</v-btn>
          <v-btn color="primary darken-1" text @click="onCancel">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["model", "onClick", "disabled"],
  methods: {
    onCancel() {
      this.$emit("onCancel");
    }
  }
};
</script>

<style>
</style>