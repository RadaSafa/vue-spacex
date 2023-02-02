<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Update Table</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Merchankey" required v-model="keymerchant"> </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Code Input" required v-model="codemerchant"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Trans Id" required v-model="idtrans"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Amount Input" required v-model="amounts"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">

              </v-col>

            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close()">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="updateData()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import axios from 'axios';

export default {
  props: ["dialog", "data", "reLoadParentData"],
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false,
      keymerchant: "",
      codemerchant: '',
      idtrans: '',
      amounts: '',
    }
  },

  watch: {
    data() {
      this.keymerchant = this.data.merchantkey;
      this.codemerchant = this.data.merchantcode;
      this.idtrans = this.data.transid;
      this.amounts = this.data.amount;
    }
  },

  methods: {
    close() {
      this.$emit("close", this.dialog);
    },

    getParentData() {
      //reLoadParentData ini bertugas memperbaharui data yg ada di table,
      this.$emit('reLoadParentData')
    },

    updateData() {
      axios.patch(`https://nest-payment-production.up.railway.app/api/transaction/${this.data._id}`, {
        merchantkey: this.keymerchant,
        merchantcode: this.codemerchant,
        transid: this.idtrans,
        amount: this.amounts,
      }
      ).then((response) => {
        // kalau response nya berhasil
        // disini kita bisa tutup modalnya
        this.close()
        // ambil data terbaru pada table
        this.getParentData()
        // Code
      }).catch((error) => {
        // kalau error masuk kesini,
        //bisa tutup modal atau tampilin toast alert
        // Code
      })

    }
  },
}
</script>