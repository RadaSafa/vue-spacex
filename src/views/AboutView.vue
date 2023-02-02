<template>
  <div class="about">
    <h1>This is an about page {{ name }}</h1>
    <button  @click="changeName">
      Change Name

    </button>
  </div>
</template>

<script>

setInterval(() => {

}, 2000);
export default {

  name: 'AboutView',
  data() {
    return {
      name: 'Rara',

    };
  },
  methods: {
    changeName() {
      this.name = 'edit name';
    },

  },

};

</script>
