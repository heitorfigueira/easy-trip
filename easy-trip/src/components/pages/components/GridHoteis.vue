<template>
  <v-container fluid class="pl-3 pt-3">
    <v-row>
      <v-col>
        <h1>works!</h1>
        <template v-if="hoteis && hoteis.length">
          <CardHotel 
            v-for="(hotel, index) in hoteis"
            :key="index"
            :hotel="hotel">
          </CardHotel>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardHotel from '../components/CardHotel.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'GridHospedagens',

  components: {
    CardHotel
  },

  computed: {
    ...mapGetters({
      hoteis: 'hoteis/listaHoteis'
    })
  },

  methods: {
    ...mapActions({
      listarHoteis: 'hoteis/listarHoteis'
    })
  },

  mounted () {
    this.listarHoteis()
  }
}
</script>