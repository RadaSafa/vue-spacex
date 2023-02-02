<template>
    
    <div>
     <Headertest/>
   
    <div class="white pa-10 ">
      <div  class="d-flex">
         
     
      <v-row
        align="center"
        class="mx-0"
        style="border:solid red 1px "
      >
      <v-col v-for="(rocket, index) in rockets" :key="index" cols="12" md="6" >
        <v-card  class="max-w-sm overflow-hidden shadow-lg ml-5">
          <img class="editimg" v-bind:src="rocket.flickr_images[0]" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class=" font-weight-bold">{{rocket.name}}</div>
          <p class="text-justify edittext  headerClass">
            {{rocket.description}}
          </p>
        </div>
        
    
      </v-card>

      </v-col>
      </v-row>
       
     
    </div>
    </div>

    </div>
        
        
        </template>
        
        <script>
        import Headertest from '../components/Header';
        import axios from "axios";
  
        
    export default{
        // name: "App",
        components: {
          Headertest,
      
        },
        data: function(){
            return{
                rockets:null
            }
        },
        mounted (){
        axios
        .get('https://api.spacexdata.com/v3/rockets')
        .then(response => (this.rockets = response.data))
    }
    }
    
    
        </script>
    
        <style>
    
    
        /* .headerClass{
        
   white-space: nowrap !important;
   width: 350px;
   word-break: normal!important;
   overflow: hidden !important;
   text-overflow: ellipsis !important;


} */

    
    </style>