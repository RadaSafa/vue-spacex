<template>
  <v-row>

    <v-dialog v-model="dialogDel" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Confirmation
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Are you sure to delete this data?
        </v-card-title>
        <v-card-text>This action will not .... </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="close()">
            No
          </v-btn>
          <v-btn color="green darken-1" text @click="deleteData()">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-row>

</template>

<script>
import axios from 'axios';

export default {
  props: ["dialogDel", "data", "reLoadParentData"],

  data() {
    return {
      id: ''
    }
  },

  watch: {
    data() {
      this.id = this.data._id
    }
  },



  methods: {

    deleteData() {
      axios.delete(`https://nest-payment-production.up.railway.app/api/transaction/${this.id}`)

        .then(response => {
          this.close()
        });
    },

    close() {
      this.$emit("close", this.dialogDel);
      //reLoadParentData ini bertugas memperbaharui data yg ada di table,
      this.$emit("reLoadParentData")
    },

  }


}


</script>