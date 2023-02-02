<template>
  <v-container>
    <Headertest />
    <v-card style="" class="card " max-width="344" pa="10px">
      <v-card-text>
        <div>Pulsa Rp 10.000</div>
        <p class="text-h4 text--primary">
          el·ee·mos·y·nar·y
        </p>
        <p>adjective</p>
        <div class="text--primary">
          relating to or dependent on charity; charitable.<br>
          "an eleemosynary educational institution."
        </div>
      </v-card-text>



    </v-card>

    <v-btn elevation="2">

      Create
    </v-btn>

    <div class=" mt-4 ">
      <v-table>
        <thead>
          <tr>
            <th class=" myborder px-8">
              Name
            </th>
            <th class="myborder px-8">
              Calories
            </th>
            <th class=" myborder px-8">
              Calories
            </th>
            <th class=" myborder px-8">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, i) in form" :key="i">
            <!-- v-for="data in form":key="data._id" -->
            <td class="myborder">{{ data.merchantkey }}</td>
            <td class="myborder">{{ data.merchantcode }}</td>
            <td class="myborder">{{ data.transid }}</td>
            <td class="myborder">{{ data.amount }}</td>
            <td class="bordertb px-8">
              <v-btn @click="showDialogDel(data)">Delete</v-btn>
            </td>
            <td class="borderupdate pr-8">


              <v-btn @click="showDialog(data)">Update</v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <div class="card minput ">
      <v-text-field label="Key" hide-details="auto" class="mx-4" v-model="form.merchantkey"></v-text-field>
      <v-text-field class="mx-4" v-model="form.merchantcode" label="Code input"></v-text-field>
      <v-text-field class="mx-4" v-model="form.transid" label="Transid input"></v-text-field>
      <v-text-field class="mx-4" v-model="form.amount" label="Amount input"></v-text-field>


      <v-btn class="card mb-4 ml-4" v-on:click="submit()">
        Create
      </v-btn>
    </div>

    <formUpdate :data="this.transactions" @reLoadParentData="this.getData" :dialog="formUp" @close="formUp = false" />
    <formDelete :data="this.transactions" @reLoadParentData="this.getData" :dialogDel="formDel"
      @close="formDel = false" />

  </v-container>

</template>


<script>

import Headertest from "../components/Header.vue";
import axios from "axios";
import formUpdate from "../views/form/FormUpdate.vue";
import formDelete from "../views/form/FormDelete.vue";


export default {
  components: {
    Headertest,
    formUpdate,
    formDelete
  },
  data() {
    return {
      // headers: [
      //   {
      //     text: 'Merchantkey',
      //     align: 'start',

      //     value: 'merchantkey',
      //   },
      //   { text: 'Merchantcode', value: 'merchantcode' },
      //   { text: 'Transid', value: 'transid' },
      //   { text: 'Amount', value: 'amount' },
      //   { text: 'Protein (g)', value: 'protein' },
      //   { text: 'Iron (%)', value: 'iron' },
      // ],
      // desserts: [
      //   {
      //     name: 'Frozen Yogurt',
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     iron: 1,
      //   },
      //   {
      //     name: 'Ice cream sandwich',
      //     calories: 237,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3,
      //     iron: 1,
      //   },
      //   {
      //     name: 'Eclair',
      //     calories: 262,
      //     fat: 16.0,
      //     carbs: 23,
      //     protein: 6.0,
      //     iron: 7,
      //   },
      //   {
      //     name: 'Cupcake',
      //     calories: 305,
      //     fat: 3.7,
      //     carbs: 67,
      //     protein: 4.3,
      //     iron: 8,
      //   },
      //   {
      //     name: 'Gingerbread',
      //     calories: 356,
      //     fat: 16.0,
      //     carbs: 49,
      //     protein: 3.9,
      //     iron: 16,
      //   },
      //   {
      //     name: 'Jelly bean',
      //     calories: 375,
      //     fat: 0.0,
      //     carbs: 94,
      //     protein: 0.0,
      //     iron: 0,
      //   },
      //   {
      //     name: 'Lollipop',
      //     calories: 392,
      //     fat: 0.2,
      //     carbs: 98,
      //     protein: 0,
      //     iron: 2,
      //   },
      //   {
      //     name: 'Honeycomb',
      //     calories: 408,
      //     fat: 3.2,
      //     carbs: 87,
      //     protein: 6.5,
      //     iron: 45,
      //   },
      //   {
      //     name: 'Donut',
      //     calories: 452,
      //     fat: 25.0,
      //     carbs: 51,
      //     protein: 4.9,
      //     iron: 22,
      //   },
      //   {
      //     name: 'KitKat',
      //     calories: 518,
      //     fat: 26.0,
      //     carbs: 65,
      //     protein: 7,
      //     iron: 6,
      //   },
      // ],
      productKeyEdit: '',
      productCodeEdit: '',
      productIdEdit: '',
      productAmountEdit: '',
      productCurrencyEdit: '',
      productIdEdit: '',
      productDate: '',
      productV: '',
      productKeyDel: '',
      productCodeDel: '',
      productIdDel: '',
      productAmountDel: '',
      productCurrencyDel: '',
      productIdDel: '',
      productDateDel: '',
      productVDel: '',

      form: {
        merchantkey: [],
        merchantcode: [],
        transid: [],
        amount: [],
        _id: [],
        currency: [],
        date_added: [],
        __v: []
      },

      transactions: '',

      formUp: false,
      formDel: false,



    }

  },




  methods: {

    showDialogDel(data) {
      // console.log(data);
      this.formDel = true,
        this.transactions = data;
      console.log(this.transactions);


      this.productKeyDel = transactions.merchantkey,
        this.productCodeDel = transactions.merchantcode,
        this.productIdDel = transactions.transid,
        this.productAmountDel = transactions.amount,
        this.productCurrencyDel = transactions.currency,
        this.productIdDel = transactions._id,
        this.productDateDel = transactions.date_added,
        this.productVDel = transactions.__v


    },


    showDialog(dataParams) {
      // disini kita bisa pakai aja data dari dataParams
      // lalu di update ke state transactions,
      // setelah itu transactions akan dilempas sbg props ke modal formUpdate
      this.formUp = true;
      this.transactions = dataParams;

    },

    submit() {
      axios.post('https://nest-payment-production.up.railway.app/api/transaction', {
        _id: this.form._id,
        merchantkey: this.form.merchantkey,
        merchantcode: this.form.merchantcode,
        transid: this.form.transid,
        amount: this.form.amount,
        currency: this.form.currency,
        date_added: this.form.date_added,
        __v: this.form.__v
      })
        .then(function (response) {
          // Handle success
        }.bind(this));
    },

    getData() {
      axios
        .get('https://nest-payment-production.up.railway.app/api/transaction')
        .then(response => (this.form = response.data))
    },


    //        patchData(){
    //   const params = {
    //     _id:this.form._id,
    //     merchantkey: this.form.merchantkey,
    //     merchantcode: this.form.merchantcode,
    //     transid: this.form.transid,
    //     amount: this.form.amount,
    //     currency: this.form.currency,
    //     date_added:this.form.date_added,
    //     __v:this.form.__v
    //     // samain dengan body postman
    //   };

    //   const data = Object.keys(params)
    //     .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    //     .join('&');

    // axios.patch('https://nest-payment-production.up.railway.app/api/transaction/63d763a2007a1487b1f557f4',data,{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    // ).then((response) => {
    //     // Code
    // }).catch((error) => {
    //     // Code
    // })
    // },


    //         patchData(){ 
    //           console.log(this.form);
    //     axios.patch(`https://nest-payment-production.up.railway.app/api/transaction/`,
    //     { merchantkey: this.form.merchantkey,
    //                merchantcode: this.form.merchantcode,
    //                transid: this.form.transid,
    //                amount: this.form.amount,
    //                currency: this.form.currency,
    //                date_added: this.form.date_added,
    //                _id: this.form._id,
    //                __v: 0

    //  },

    // ).then((response) => {
    //     // Code
    // }).catch((error) => {
    //     // Code
    // })
    // },

    // deleteData(){
    //   axios.delete(`https://nest-payment-production.up.railway.app/api/transaction/${this.form}`)



    //  .then(response => {
    //      console.log(response);
    //  });
    // }


  },

  mounted() {
    this.getData();
  }
}


</script>

<style scoped>
.card {
  margin-top: 20px;
  border: solid 1px green;
}

.table {
  height: 500px;
}

.minput {
  margin-bottom: 500px;
  width: 600px;
}

.myborder {
  border: 1px solid;
}

.bordertb {
  border-top: 1px solid;
  border-bottom: 1px solid;
}

.borderupdate {
  border-top: 1px solid;
  border-right: 1px solid;
}
</style>