<template>
  <v-layout column>
    <Chapter title="5 - Grupo familiar">
      <template v-slot:content>
        <v-col cols="12">
          <v-row>
            <v-select
              :prepend-inner-icon="
                family.group.quantity > 1 ? 'mdi-account-group' : 'mdi-account'
              "
              v-model="family.liveWith"
              label="a) Com quem o candidato mora?"
              :items="liveWith"
            />
            <v-text-field
              class="mx-4"
              prepend-inner-icon="mdi-account-multiple-plus"
              v-model.number="family.group.quantity"
              :error="
                !Number.isInteger(family.group.quantity) ||
                  family.group.quantity < 1
              "
              type="number"
              label="b) Total de mebros (Você + Grupo familiar)"
            />
            <v-select
              prepend-inner-icon="mdi-home"
              v-model="family.housingType"
              label="c) Tipo de moradia:"
              :items="housingTypes"
            />
            <v-select
              class="ml-4"
              prepend-inner-icon="mdi-car"
              v-model="family.vehicle.has"
              label="d) Possui veículo?"
              :items="affirmations"
            />
          </v-row>
        </v-col>
      </template>
    </Chapter>
    <Table
      v-show="family.vehicle.has"
      :items="family.vehicle.data"
      :headers="tableHeaders.vehicle"
      class="mb-4"
    />
    <Table :headers="tableHeaders.family" />

    <v-row class="mt-4" align="center" justify="center">
      <v-btn to="/send" large width="300px" class="primary lighten-2 white--text">Concluir</v-btn>
    </v-row>
  </v-layout>
</template>

<script>
import Chapter from "@/components/templates/Chapter";
import Table from "@/components/Table";
import family from "@/database/family";

export default {
  components: {
    Chapter,
    Table
  },

  computed: {
    affirmations() {
      return [
        { value: true, text: "SIM" },
        { value: false, text: "NÃO" }
      ];
    },

    liveWith() {
      return family.liveWith;
    },

    housingTypes() {
      return family.housingTypes;
    }
  },

  data() {
    return {
      tableHeaders: {
        vehicle: [
          {
            text: "Marca/Model",
            value: "model"
          },
          {
            text: "Ano de fabricação",
            value: "year"
          },
          {
            text: "Utilização",
            value: "utility"
          }
        ],
        family: [
          {
            text: "Nome",
            value: "name"
          },
          {
            text: "Idade",
            value: "age"
          },
          {
            text: "Parentesco",
            value: "relationship"
          },
          {
            text: "Estado civil",
            value: "civilStatus"
          },
          {
            text: "Escolaridade",
            value: "scholarity"
          },
          {
            text: "Profissão",
            value: "profession"
          },
          {
            text: "Renda mensal (R$)",
            value: "income"
          }
        ]
      },
      family: {
        liveWith: "Sozinho",
        housingType: "Própria",
        vehicle: {
          has: false,
          data: []
        },
        group: {
          quantity: 1,
          data: []
        }
      }
    };
  },

  watch: {
    "family.group.quantity"(quantity) {
      if (quantity > 1) {
        this.family.liveWith = "Família";
      } else {
        this.family.liveWith = "Sozinho";
      }
    },

    "family.liveWith"(liveWith) {
      if (liveWith == "Família") {
        this.family.group.quantity = 2;
      } else {
        this.family.group.quantity = 1;
      }
    }
  }
};
</script>

<style></style>
