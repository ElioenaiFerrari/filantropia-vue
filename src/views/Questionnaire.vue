<template>
  <v-layout column>
    <Chapter title="4 - Questionário">
      <template v-slot:content>
        <v-col cols="12">
          <v-select
            prepend-inner-icon="mdi-school"
            v-model="questionnaire.training"
            :items="training"
            label="a) Em que escola você cursou o ensino médio?"
          />
          <v-row>
            <v-select
              prepend-inner-icon="mdi-teach"
              v-model="questionnaire.isTeacher"
              :items="affirmations"
              label="b) O candidato é professor da rede pública de ensino, no efetivo exercício do magistério da educação básica, integrando o quadro de pessoal permanente?"
            />
            <v-select
              prepend-inner-icon="mdi-link-variant"
              class="ml-4"
              v-model="questionnaire.isLinked"
              :items="affirmations"
              label="c) O candidato possui vínculo acadêmico (ativo ou trancado) com a católica de vitória?"
            />
            <v-select
              prepend-inner-icon="mdi-notebook"
              class="ml-4"
              v-model="questionnaire.didEnem"
              :items="affirmations"
              label="d) O candidato realizou ENEM* nos últimos 03 anos?"
            />
          </v-row>
        </v-col>
      </template>
    </Chapter>

    <v-row align="center" justify="center">
      <v-btn
        to="/family"
        large
        width="300px"
        class="primary lighten-2 white--text"
        >Avançar</v-btn
      >
    </v-row>
  </v-layout>
</template>

<script>
import Chapter from '@/components/templates/Chapter';
import training from '@/database/training';

export default {
  components: {
    Chapter,
  },

  computed: {
    training() {
      return training;
    },

    affirmations() {
      return ['SIM', 'NÃO'];
    },
  },

  data() {
    return {
      questionnaire: {
        training: training[0],
        isTeacher: 'NÃO',
        isLinked: 'NÃO',
        didEnem: 'NÃO',
      },
    };
  },
};
</script>

<style></style>
