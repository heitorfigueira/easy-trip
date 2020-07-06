<template>
  <v-container fluid class="pl-3 pt-3">
    <v-row>
      <v-col v-for="(hotel, index) in hoteis"
        :key="index">
        <CardHotel 
          :hotel="hotel">
        </CardHotel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardHotel from '../components/CardHotel.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'GridHospedagens',

  components: {
    CardHotel
  },

  computed: {
    ...mapGetters({
      hoteis: 'hoteis/listaHoteis'
    })
  }
}
</script>