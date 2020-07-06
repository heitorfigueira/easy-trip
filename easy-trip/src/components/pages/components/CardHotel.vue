<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="hotel.thumbnailUrl"
    >
      <v-card-title>{{hotel.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{hotel.vrBadge ? hotel.vrBadge : 'Hotel'}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ hotel.neighbourhood }}</div>
      <div>Preço por noite: {{ hotel.ratePlan.price.current}}</div>
      
      <!-- <div v-if="hotel.landmarks && hotel.landmarks.length">
        A {{ hotel.landmarks[0].distance }} do(a) {{ hotel.landmarks[0].label }}
      </div> -->

      <div>
        <v-icon v-for="(num, index) in Math.floor(hotel.starRating)"
          :key="num+index"
          color="deep-purple">
          mdi-star
        </v-icon>
      </div>

      <div v-if="hotel.landmarks && hotel.landmarks.length">
        A {{ hotel.landmarks[0].distance }} do(a) {{ hotel.landmarks[0].label }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple"
        text
      >
        Conhecer
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardHotel',

  props: {
    hotel: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    id () {
      return this.hotel.id
    }
  }
}
</script>