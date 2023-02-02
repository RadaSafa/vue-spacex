<template>
 
<v-container class="marginset">
 
<v-main>
 Name : {{ firstName }} {{ lastName }}
</v-main>

<v-btn v-on:click=" updateName('Hehe','huhu')" >  
  Click name
</v-btn>

<v-main>

 age : {{ age }}

</v-main>

<v-btn v-on:click=" updateAge('20')" >  
  Click Age
</v-btn>


</v-container>

</template>

<script>
export default {
  name: 'HelloWorld',

  data :() => {
    return {
      firstName : "saye",
      lastName : "Dae",
      age : "17"
    }
  },

  methods : {
    updateName(NewFirstName,newLastName){
     this.firstName=NewFirstName;
     this.lastName=newLastName;
          
    },
    updateAge (newAge){
      return this.age =newAge;

    }

  }

}
</script>

<style scoped>
.marginset {
    margin-top: 200px;
}
</style >
