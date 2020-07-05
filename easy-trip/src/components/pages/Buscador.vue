<template>
  <div>
    <v-tabs v-model="tab" dark
      background-color="deep-purple accent-4"
      class="elevation-2"
      :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
      :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined">
      <v-tab v-for="i in tabs" :key="'tab' + i.name" :href="`#tab-${i.name}`" >
        {{ i.name }}
      </v-tab>

      <v-tab-item key="Passagens" value="tab-Passagens">
        <Passagens></Passagens>
      </v-tab-item>

      <v-tab-item key="Hospedagens" value="tab-Hospedagens">
      </v-tab-item>

      <v-tab-item key="Pacotes" value="tab-Pacotes">
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Passagens from './components/Passagens'

export default {
    name: 'Buscador',
    components: { Passagens },
    data () {
      return {
        tabs: [
          { 
            name: 'Passagens', 
            icon: 'mdi-flight',
          }, 
          { 
            name: 'Hospedagens', 
            icon: 'mdi-hotels',
          }, 
          { 
            name: 'Pacotes', 
            icon: 'mdi-card_travel',
          },
        ],
        radioGroup: 1,
        passagens: [],
        hospedagens: [],
        pacotes: []
      }
    },
    computed: {},
    methods: {},
    mounted () {}
}
</script>