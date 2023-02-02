<template>
    
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Update Table</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col cols="12">
                <v-text-field
                  label="Merchankey"
                  required
                  v-model="keymerchant"
                > </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Code Input"
                  required
                  v-model="codemerchant"

                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Trans Id"
                  required
                  v-model="idtrans"

                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Amount Input"
             
                  required
                  v-model="amounts"

                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
              
              </v-col>
             
            </v-row>
          </v-container>
       
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="close()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="updateData()"
          >
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
    props:["dialog","data"],
  data () {
    return {
      notifications: false,
      sound: true,
      widgets: false,

      
    //   id:'',
      keymerchant:'',
      codemerchant:'',
      idtrans:'',
      amounts:'',
    //   currencys: '',
    //   added_date:'',
    //   __vV:'',
     
    }

  },

  watch:{
    data(val){ 
    this.keymerchant = val.merchantkey;
    this.codemerchant=val.merchantcode;
    this.idtrans=val.transid;
    this.amounts=val.amount;
    // this.id=val._id;
    // this.currencys=val.currency;
    // this.added_date=val.date_added;
    // this.__vV = val.__v;


    }
  },
  
  methods:{
    // getData(){
    //         axios
    //         .get('https://nest-payment-production.up.railway.app/api/transaction')
    //         .then(response => (this.form = response.data))
    //     },


   
    
      close(){
        this.$emit("close",this.dialog);
      },

      updateData(){
       

        axios.patch('https://nest-payment-production.up.railway.app/api/transaction/63d763a2007a1487b1f557f4',{
  
      merchantkey: this.keymerchant,
      merchantcode: this.codemerchant,
      transid: this.idtrans,
      amount: this.amounts,
    //   _id:this.id,
    //   currency:this.currencys,
    //   date_added: this.added_date,
    //   __v:this.__vV
    

      
        }
  ).then((response) => {
    console.log(keymerchant)
      // Code
  }).catch((error) => {
      // Code
  })

      }
  },
}
</script>