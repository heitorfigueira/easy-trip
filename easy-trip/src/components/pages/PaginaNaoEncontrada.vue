<template>
  <v-container
    class="text-center"
    fill-height
    style="height: calc(100vh - 58px);"
  >
    <v-row align="center">
      <v-col>
        <h1 class="display-2 primary--text">Whoops, 404</h1>

        <p>A pagina que vc está procurando não existe</p>

        <v-btn
          :to="`/`"
          color="primary"
          outlined
        >
          Tire-me daqui!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FourOhFour',
    props: {
      lang: {
        type: String,
        default: 'en',
      },
    },
    created () {
      this.$ssrContext && this.$ssrContext.res.status(404)
    },
  }
</script>