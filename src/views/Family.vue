<template>
  <v-layout column>
    <Chapter title="5 - Grupo familiar">
      <template v-slot:content>
        <v-col cols="12">
          <v-row>
            <!-- <v-select
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
            />-->
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

    <v-col align="end" v-show="family.vehicle.has">
      <Table :items="family.vehicle.data" :headers="tableHeaders.vehicle" class="mb-4" />
      <v-btn @click="onShowDialogVehicle" color="primary darken-2" fab small dark>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-col>

    <v-col align="end">
      <Table :items="family.members" :headers="tableHeaders.family" />
      <v-btn @click="onShowDialogMember" class="mt-4" color="primary darken-2" fab small dark>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-col>

    <v-row class="mt-4" align="center" justify="center">
      <v-btn to="/send" large width="300px" class="primary lighten-2 white--text">Concluir</v-btn>
    </v-row>

    <Dialog
      @onCancel="showDialogVehicle=false"
      :disabled="false"
      :onClick="onAddVehicle"
      :model="showDialogVehicle"
    >
      <template v-slot:content>
        <v-text-field v-model="dialogs.vehicle.model" label="Marca/Model" />
        <v-text-field v-model="dialogs.vehicle.year" label="Ano" class="my-3" />
        <v-select
          v-model="dialogs.vehicle.utility"
          label="Utilização"
          :items="['Pessoal', 'Comercial']"
        />
      </template>
    </Dialog>

    <Dialog
      @onCancel="showDialogMember=false"
      :disabled="false"
      :onClick="onAddMember"
      :model="showDialogMember"
    >
      <template v-slot:content></template>
    </Dialog>
  </v-layout>
</template>

<script>
import Chapter from "@/components/templates/Chapter";
import Table from "@/components/Table";
import Dialog from "@/components/Dialog";
import family from "@/database/family";

export default {
  components: {
    Chapter,
    Table,
    Dialog
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
        // liveWith: "Sozinho",
        housingType: "Própria",
        members: [],
        vehicle: {
          has: false,
          data: [
            {
              model: "Ford",
              year: "2020",
              utility: "Pessoal"
            }
          ]
        }
      },
      dialogs: {
        vehicle: {
          model: "",
          year: "",
          utility: ""
        },
        members: {
          name: "",
          age: "",
          relationship: "",
          civilStatus: "",
          scholarity: "",
          profession: "",
          income: 0
        }
      },
      showDialogVehicle: false,
      showDialogMember: false
    };
  },

  methods: {
    onShowDialogVehicle() {
      this.showDialogVehicle = true;
    },

    onShowDialogMember() {
      this.showDialogMember = true;
    },

    onAddVehicle() {
      this.showDialogVehicle = false;
    },

    onAddMember() {
      this.showDialogMember = false;
    }
  }

  // watch: {
  //   "family.group.quantity"(quantity) {
  //     if (quantity > 1) {
  //       this.family.liveWith = "Família";
  //     } else {
  //       this.family.liveWith = "Sozinho";
  //     }
  //   },

  //   "family.liveWith"(liveWith) {
  //     if (liveWith == "Família") {
  //       this.family.group.quantity = 2;
  //     } else {
  //       this.family.group.quantity = 1;
  //     }
  //   }
  // }
};
</script>

<style></style>
