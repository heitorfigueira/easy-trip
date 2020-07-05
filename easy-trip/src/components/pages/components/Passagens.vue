<template>
  <div>
    <v-content class="pl-3 pt-3">
      <h3>Passagens aéreas com facilidade!</h3>
      <v-radio-group v-model="radioGroup">
        <v-row justify="start" class="pl-2">
          <v-col cols="1">
            <v-radio key="Ida" label="Só ida" :value="1"></v-radio>
          </v-col>
          <v-col cols="2">
            <v-radio key="IdaVolta" label="Ida e volta" :value="2"></v-radio>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              
            </v-card>
          </v-col>
        </v-row>
      </v-radio-group>
    </v-content>
  </div>
</template>

<script>
export default {
    name: 'Passagens',
    components: {},
    data () {
      return {
        radioGroup: 1,
        passagens: []
      }
    },
    computed: {},
    methods: {},
    mounted () {}
}
</script>