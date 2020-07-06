<template>
  <div>
    <v-container class="pl-3 pt-3">
      <h3>Serviços de hotelaria de qualidade!</h3>
      <v-row  class="pl-2">
        <v-col cols="2">
          <v-combobox v-model="cidade" :items="cidades"
            label="Selecione a cidade">
          </v-combobox>
        </v-col>
        <v-col cols="2">
          <v-menu v-model="menuEntrada" ref="menuEntrada" offset-y
            :close-on-content-click="false"
            transition="scale-transition"
            max-width="290px"
            min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="dataEntradaFormatted"
                label="Data de entrada"
                v-bind="attrs"
                @blur="dataEntrada = parseDate(dataEntradaFormatted)"
                v-on="on">
              </v-text-field>
            </template>
            <v-date-picker v-model="dataEntrada" no-title @input="menuEntrada = false"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="2">
          <v-menu v-model="menuSaida" ref="menuSaida" offset-y
            :close-on-content-click="false"
            transition="scale-transition"
            max-width="290px"
            min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="dataSaidaFormatted"
                label="Data de saída"
                v-bind="attrs"
                @blur="dataSaida = parseDate(dataSaidaFormatted)"
                v-on="on">
              </v-text-field>
            </template>
            <v-date-picker v-model="dataSaida" no-title @input="menuSaida = false"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="2" offset="4" class="pt-6 pl-12">
          <v-btn  color="primary" @click="pesquisar">Pesquisar</v-btn>
        </v-col>
      </v-row>
      <v-row class="pl-2">
        <v-col cols="1">
          <v-text-field 
            v-model.number="quartos" 
            label="Quartos" 
            type="number">
          </v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field 
            v-model.number="camas" 
            label="Camas" 
            type="number">
          </v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field 
            v-model.number="adultos" 
            label="Adultos" 
            type="number">
          </v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field 
            v-model.number="menores" 
            label="Menores" 
            type="number">
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'Passagens',
    components: {},
    data: vm => ({
      hospedagens: [],
      cidades: [ 'São Paulo, SP - Brasil', 'Brasília, DF - Brasil', 'Belo Horizonte, BH - Brasil', 'Guarulhos, SP - Brasil' ],
      cidade: '',
      menuEntrada: false,
      dataEntrada: new Date().toISOString().substr(0, 10),
      dataEntradaFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menuSaida: false,
      dataSaida: new Date().toISOString().substr(0, 10),
      dataSaidaFormatted: null,
      quartos: 0,
      camas: 0,
      adultos: 0,
      menores: 0
    }),
    computed: {},
    watch: {
      dataEntrada () {
        this.dataEntradaFormatted = this.formatDate(this.dataEntrada)
      },
      dataSaida () {
        this.dataSaidaFormatted = this.formatDate(this.dataSaida)
      },
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      pesquisar () {
        
      }
    },
    mounted () {}
}
</script>