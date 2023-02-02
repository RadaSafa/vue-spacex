<template>

  
<div>
<Headertest/>
<HelloWorldtest/>
</div>



</template>

<script>
import HelloWorldtest from '../components/HelloWorld';
import Headertest from "../components/Header";

export default {
  name: 'Home',

  components: {
    Headertest,
    HelloWorldtest,
  },
};
</script>
