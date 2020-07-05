<template>
  <v-app>
    <v-app-bar app dark
      color="primary">
      <v-toolbar-title>EASYTrip</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>
