<template>
  <div>
    <v-tabs v-model="tab" dark
      background-color="deep-purple accent-4"
      class="elevation-2">
      <v-tab v-for="i in tabs" :key="'tab' + i.name" :href="`#tab-${i.name}`" >
        <v-icon class="mr-2">{{ i.icon }}</v-icon>
        {{ i.name }}
      </v-tab>

      <v-tab-item key="Passagens" value="tab-Passagens">
        <Passagens></Passagens>
      </v-tab-item>

      <v-tab-item key="Hospedagens" value="tab-Hospedagens">
        <Hospedagens></Hospedagens>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Passagens from './components/Passagens'
import Hospedagens from './components/Hospedagens'

export default {
    name: 'Buscador',
    components: { Passagens, Hospedagens },
    data () {
      return {
        tabs: [
          { 
            name: 'Passagens', 
            icon: 'mdi-airplane-takeoff',
          }, 
          { 
            name: 'Hospedagens', 
            icon: 'mdi-home-city',
          }
        ],
        radioGroup: 1,
        passagens: [],
        hospedagens: [],
        pacotes: [],
        tab: ''
      }
    },
    computed: {},
    methods: {},
    mounted () {}
}
</script>