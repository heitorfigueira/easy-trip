<template>
  <v-app>
    <v-app-bar app dark
      color="primary">
      <v-toolbar-title>EASYTrip</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <!-- <Loader></Loader> -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import Loader from './components/pages/components/Loader'
export default {
  name: 'App',

  components: {
    // Loader
  },

};
</script>
