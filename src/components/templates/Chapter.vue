<template>
  <v-flex>
    <v-card :elevation="2">
      <v-card-title
        class="primary lighten-2 headline white--text font-weight-bold"
      >
        {{ title }}
      </v-card-title>
    </v-card>
    <v-container class="pa-4">
      <slot name="content" />
    </v-container>
  </v-flex>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style></style>
