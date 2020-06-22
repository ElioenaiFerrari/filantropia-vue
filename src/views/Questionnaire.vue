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
              v-model="questionnaire.enem.did"
              :items="affirmations"
              label="d) O candidato realizou ENEM* nos últimos 03 anos?"
            />
            <v-col cols="2" v-show="questionnaire.enem.did">
              <v-text-field
                :error="questionnaire.enem.year.length != 4"
                v-model="questionnaire.enem.year"
                label="Ano"
                minlength="4"
                maxlength="4"
                dense
                outlined
              />
              <v-text-field
                :error="questionnaire.enem.mean <= 0"
                v-model.number="questionnaire.enem.mean"
                label="Média das notas"
                type="number"
                dense
                outlined
              />
            </v-col>
            <span class="body-1 grey--text font-weight-bold">
              *Se o candidato prestou ENEM nos últimos 03 anos e sua média foi
              superior a 450 pontos e não zerou na redação, não precisa prestar
              vestibular da Católica, a nota do ENEM é válida para ingresso na
              instituição. Caso não tenha prestado o ENEM ou a média seja
              inferior a 450 pontos deverá fazer o vestibular da Católica para
              ingressar no Ensino Superior. Declaro ser brasileiro(a) ou
              naturalizado(a) e não ter concluído nenhum curso de nível
              superior, bem como me comprometo a apresentar toda a documentação
              exigida pela instituição na comprovação de informações, em
              concordância com as normas que regulamentam este processo
              seletivo.
            </span>
            <v-checkbox label="Concordo" v-model="questionnaire.isAcceptTerm" />
          </v-row>
        </v-col>
      </template>
    </Chapter>

    <v-row align="center" justify="center">
      <v-btn
        @click="onContinue"
        large
        :disabled="!questionnaire.isAcceptTerm"
        width="300px"
        class="primary lighten-2 white--text"
      >Avançar</v-btn>
    </v-row>
  </v-layout>
</template>

<script>
import Chapter from "@/components/templates/Chapter";
import training from "@/database/training";

export default {
  components: {
    Chapter
  },

  computed: {
    training() {
      return training;
    },

    affirmations() {
      return [
        { value: true, text: "SIM" },
        { value: false, text: "NÃO" }
      ];
    }
  },

  data() {
    return {
      questionnaire: {
        training: training[0],
        isTeacher: false,
        isLinked: false,
        isAcceptTerm: false,
        enem: {
          did: false,
          year: "",
          mean: ""
        }
      }
    };
  },

  methods: {
    onContinue() {
      this.$store.dispatch("candidate/setQuestionnaire", this.questionnaire);

      this.$router.push("/family");
    }
  }
};
</script>

<style></style>
