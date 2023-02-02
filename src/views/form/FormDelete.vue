<template>
    <v-row>

     <v-dialog
      v-model="dialogDel"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="close()"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteData()"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</v-row>

</template>

<script>
import axios from 'axios';

export default {
    props:["dialogDel","data"],

    data () {
    return {
      notifications: false,
      sound: true,
      widgets: false,

      
    //   id:'',
      keymerchantDel:'',
      codemerchantDel:'',
      idtransDel:'',
      amountsDel:'',
    //   currencys: '',
    //   added_date:'',
    //   __vV:'',
     
    }

  },

  watch:{
    data(val){ 
    this.keymerchantDel = val.merchantkey;
    this.codemerchantDel=val.merchantcode;
    this.idtransDel=val.transid;
    this.amountsDel=val.amount;
    // this.id=val._id;
    // this.currencys=val.currency;
    // this.added_date=val.date_added;
    // this.__vV = val.__v;


    }
  },

  methods:{

    deleteData(){
        axios.delete(`https://nest-payment-production.up.railway.app/api/transaction/63d74bd1007a1487b1f557db`,{
            merchantkey: this.keymerchantDel,
      merchantcode: this.codemerchantDel,
      transid: this.idtransDel,
      amount: this.amountsDel,
        })
     .then(response => {
         console.log(response);
     });
    },
    
      close(){
        this.$emit("close",this.dialogDel);
      },

  }


}


</script>