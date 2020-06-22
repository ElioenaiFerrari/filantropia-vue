<template>
  <v-layout column>
    <Chapter title="3 - Cursos">
      <template v-slot:content>
        <v-col cols="12">
          <v-row>
            <v-select
              :error="isInvalidSelection"
              :error-messages="errorMessage"
              prepend-inner-icon="mdi-bullseye-arrow"
              :items="courses"
              v-model="selectedCourses[0]"
              label="1° Opção"
            />
            <v-select
              :error="isInvalidSelection"
              :error-messages="errorMessage"
              prepend-inner-icon="mdi-bullseye-arrow"
              :items="courses"
              class="ml-4"
              v-model="selectedCourses[1]"
              label="2° Opção"
            />
          </v-row>
        </v-col>
      </template>
    </Chapter>

    <v-row align="center" justify="center">
      <v-btn
        :disabled="isInvalidSelection"
        @click="onContinue"
        large
        width="300px"
        class="primary lighten-2 white--text"
      >Avançar</v-btn>
    </v-row>
  </v-layout>
</template>

<script>
import Chapter from "@/components/templates/Chapter";
import courses from "@/database/courses";

export default {
  components: {
    Chapter
  },
  computed: {
    isInvalidSelection() {
      return this.selectedCourses[0] === this.selectedCourses[1];
    },
    errorMessage() {
      return this.isInvalidSelection ? "Os cursos não devem ser iguais" : null;
    },
    courses() {
      return courses;
    }
  },
  data() {
    return {
      selectedCourses: [courses[0], courses[1]]
    };
  },
  methods: {
    onContinue() {
      this.$store.dispatch("candidate/setCourses", this.selectedCourses);

      this.$router.push("/questionnaire");
    }
  }
};
</script>

<style></style>
