<template>


    <v-main>
        <Headertest />
        <div class="card minput ">
            <v-text-field label="Key" hide-details="auto" class="mx-4" v-model="form.merchantkey">
                {{ merchantkey }}
            </v-text-field>
            <v-text-field class="mx-4" v-model="form.merchantcode" label="Code input"> {{ merchantcode }}</v-text-field>
            <v-text-field class="mx-4" v-model="form.transid" label="Transid input">{{ transid }}</v-text-field>
            <v-text-field class="mx-4" v-model="form.amount" label="Amount input">{{ amount }}</v-text-field>


            <v-btn class="card mb-4 ml-4" v-on:click="patchData()">
                Create
            </v-btn>
        </div>
    </v-main>
</template>


<script>
import Headertest from "../components/Header.vue";
import axios from "axios";


export default {

    components: {
        Headertest,
    },

    data() {

        return {


            form: {
                merchantkey: [],
                merchantcode: [],
                transid: [],
                amount: [],
                _id: [],
                currency: [],
                date_added: [],
                __v: []
            }
        }

    },

    methods: {
        getData() {
            axios
                .get('https://nest-payment-production.up.railway.app/api/transaction/63d763a2007a1487b1f557f4')
                .then(response => (this.form = response.data))
        },



        patchData() {
            axios.patch('https://nest-payment-production.up.railway.app/api/transaction/63d763a2007a1487b1f557f4',
                {
                    merchantkey: this.form.merchantkey,
                    merchantcode: this.form.merchantcode,
                    transid: this.form.transid,
                    amount: this.form.amount,
                    currency: this.form.currency,
                    date_added: this.form.date_added,
                    _id: this.form._id,
                    __v: 0
                },

            ).then((response) => {
                // Code
            }).catch((error) => {
                // Code
            })
        },

    }
}



</script>