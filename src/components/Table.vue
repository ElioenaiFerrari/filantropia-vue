<template>
  <v-card>
    <v-data-table xs12 md6 lg4 hide-default-footer :headers="headers" :items="items" />
  </v-card>
</template>

<script>
export default {
  props: {
    headers: Array,
    items: Array
  }
};
</script>

<style>
</style>