<template>
  <div>
  <v-app>



      <v-content >
        <!-- <div>
          <router-link to="/"><img width="400px" src="https://cdn.worldvectorlogo.com/logos/spacex.svg"/></router-link>
          <router-link class="text-decoration-none" to="/">Home</router-link>
          <router-link class="text-decoration-none" to="/about">About</router-link>
        </div> -->
        <router-view></router-view>
      </v-content>

    <!-- <Navbar /> -->
  </v-app>
</div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
