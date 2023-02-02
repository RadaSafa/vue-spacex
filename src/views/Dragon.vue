<template>
    
    <div>
     <Headertest/>
   
    <div class="white pa-10 ">
      <div  class="d-flex">
      

        
      <v-card v-for="(data,i) in datas" :key="i" class="max-w-sm rounded overflow-hidden shadow-lg ml-5">
        <img class="editimg" v-bind:src="data.flickr_images[0]" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class=" font-weight-bold">{{data.name}}</div>
          <p class="text-justify edittext  headerClass">
            {{data.description}}

          </p>

          
        </div>
        
    
      </v-card>
     
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
          data :()=>{
                return {
                  datas:[]
                }
          },

          methods :{
              getDragon(){
                axios
                .get('https://api.spacexdata.com/v3/dragons/')
                .then(response => (this.datas = response.data))
              }
          },

          mounted(){
      this.getDragon();
    }

    //     data: function(){
    //         return{
    //             datas:null
    //         }
    //     },
    //     mounted(){
    //     axios
    //     .get('https://api.spacexdata.com/v3/dragons/')
    //     .then(response => (this.datas = response.data))
    // }
    }
    
    
        </script>
    
        <style>
     .editimg{
            width :400px;
            height: 250px;
    
        }

        .edittext{
            width :350px;
            height: 300px;
           
    
        }
        /* .headerClass{
        
   white-space: nowrap !important;
   width: 350px;
   word-break: normal!important;
   overflow: hidden !important;
   text-overflow: ellipsis !important;


} */

    
    </style>