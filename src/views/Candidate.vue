<template>
  <v-layout column>
    <Chapter title="1 - Dados do candidato">
      <template v-slot:content>
        <v-col cols="12">
          <v-row>
            <v-text-field
              prepend-inner-icon="mdi-account"
              v-model="candidate.name"
              label="Nome"
              class="dense"
            />
            <v-select
              :prepend-inner-icon="sexIcon"
              class="mx-4"
              v-model="candidate.sex"
              :items="genders"
              label="Sexo"
            />
            <v-text-field
              v-model="candidate.birthday"
              label="Data de nascimento"
              type="date"
            />
          </v-row>
        </v-col>
      </template>
    </Chapter>
    <Chapter title="2 - Dados de contato">
      <template v-slot:content>
        <v-col cols="12">
          <v-row>
            <v-text-field
              v-model="contacts.cellphone"
              label="Celular"
              prepend-inner-icon="mdi-cellphone"
            />
            <v-text-field
              v-model="contacts.phone"
              class="mx-4"
              label="Telefone"
              prepend-inner-icon="mdi-phone"
            />
            <v-text-field
              v-model="contacts.email"
              label="Email"
              prepend-inner-icon="mdi-email"
            />
          </v-row>
          <v-row>
            <v-text-field
              v-model="contacts.address"
              label="Endereço"
              prepend-inner-icon="mdi-map-marker"
            />
            <v-text-field
              v-model="contacts.city"
              class="mx-4"
              label="Cidade"
              prepend-inner-icon="mdi-map-marker"
            />
            <v-text-field
              v-model="contacts.district"
              label="Bairro"
              prepend-inner-icon="mdi-map-marker"
            />
          </v-row>
          <v-row>
            <v-text-field
              v-model="contacts.number"
              label="Número"
              prepend-inner-icon="mdi-counter"
            />
            <v-text-field
              v-model="contacts.adjunct"
              class="mx-4"
              label="Complemento"
              prepend-inner-icon="mdi-information"
            />
            <v-text-field
              v-model="contacts.zipCode"
              label="CEP"
              prepend-inner-icon="mdi-map-marker"
            />
            <v-select
              prepend-inner-icon="mdi-home-group"
              class="mx-4"
              v-model="contacts.state"
              :items="states"
              label="Estado"
            />
          </v-row>
        </v-col>
      </template>
    </Chapter>
    <v-row align="center" justify="center">
      <v-btn
        to="/courses"
        large
        :disabled="isInvalidData"
        width="300px"
        class="primary lighten-2 white--text"
        >Avançar</v-btn
      >
    </v-row>
  </v-layout>
</template>

<script>
import Chapter from '@/components/templates/Chapter';
import states from '@/database/states';

export default {
  components: {
    Chapter,
  },
  computed: {
    isInvalidData() {
      for (let key in this.candidate) {
        if (this.candidate[key].length <= 0) {
          return true;
        }
      }

      for (let key in this.contacts) {
        if (
          this.contacts[key].length <= 0 &&
          key != 'adjunct' &&
          key != 'phone'
        ) {
          return true;
        }
      }

      return false;
    },
    states() {
      return states;
    },
    genders() {
      return ['Masculino', 'Feminino', 'Outros'];
    },
    sexIcon() {
      switch (this.candidate.sex) {
        case 'Masculino':
          return 'mdi-gender-male';
        case 'Feminino':
          return 'mdi-gender-female';
        default:
          return 'mdi-gender-male-female';
      }
    },
  },
  data() {
    return {
      candidate: {
        name: '',
        sex: '',
        birthday: '',
      },
      contacts: {
        cellphone: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        district: '',
        number: '',
        adjunct: '',
        zipCode: '',
        state: '',
      },
    };
  },
};
</script>

<style></style>
