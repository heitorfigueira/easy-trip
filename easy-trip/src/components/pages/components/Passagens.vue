<template>
  <div>
    <v-container class="pl-4" fluid>
      <h3>Passagens aéreas com facilidade!</h3>
      <v-radio-group v-model="radioGroup" dense>
        <v-row justify="start" class="pl-4" dense>
          <v-col cols="1">
            <v-radio key="Ida" label="Só ida" :value="1"></v-radio>
          </v-col>
          <v-col cols="2">
            <v-radio key="IdaVolta" label="Ida e volta" :value="2"></v-radio>
          </v-col>
        </v-row>
      </v-radio-group>
      <v-row class="pl-4" dense>
        <v-col cols="3">
          <v-combobox v-model="origem" :items="origens"
            label="Selecione a ORIGEM da sua viagem">
          </v-combobox>
        </v-col>
        <v-col cols="3">
          <v-combobox v-model="destino" :items="destinos"
            label="Selecione o DESTINO da sua viagem">
          </v-combobox>
        </v-col>
        <v-col cols="2">
          <v-menu v-model="menuIda" ref="menuIda" offset-y
            :close-on-content-click="false"
            transition="scale-transition"
            max-width="290px"
            min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="dataIdaFormatted"
                label="Data de Ida"
                v-bind="attrs"
                @blur="dataIda = parseDate(dataIdaFormatted)"
                v-on="on">
              </v-text-field>
            </template>
            <v-date-picker v-model="dataIda" no-title @input="menuIda = false"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="2">
          <v-menu v-model="menuVolta" ref="menuVolta" offset-y
            :close-on-content-click="false"
            transition="scale-transition"
            max-width="290px"
            min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="dataVoltaFormatted"
                label="Data de Volta"
                :disabled="radioGroup == 1"
                v-bind="attrs"
                @blur="dataVolta = parseDate(dataVoltaFormatted)"
                v-on="on">
              </v-text-field>
            </template>
            <v-date-picker v-model="dataVolta" no-title @input="menuVolta = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row  class="pl-4" dense>
        <v-col cols="1">
          <v-text-field 
            v-model.number="adultos" 
            label="Adultos" 
            type="number">
          </v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field 
            v-model.number="criancas" 
            label="Crianças" 
            type="number">
          </v-text-field>
        </v-col>
        <v-col cols="2">
          <v-combobox v-model="tipoPassagem" :items="tiposPassagem"
            label="Tipo das passagens">
          </v-combobox>
        </v-col>
        <v-col cols="2" offset="6">
          <v-btn class="mt-3 ml-3" color="primary" @click="pesquisar">
            <v-icon class="mr-2">mdi-magnify</v-icon>
            Pesquisar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="px-3 pt-3 mt-5 my-10">
      <v-row class="font-weight-bold mx-10 my-2 pl-2" dense>
        <v-col cols="3">
          Destino
        </v-col>
        <v-col  cols="3">
          Origem
        </v-col>
        <v-col  cols="2" align="center">
          Data de Viagem
        </v-col>
        <v-col  cols="2" align="center">
          Preço
        </v-col>
        <v-col  cols="1" align="center">
          Assentos
        </v-col>
        <v-col  cols="1"></v-col>
      </v-row>
      <v-row v-for="(passagem, index) in passagensFiltradas" :key="'passagem' + index"
        class="mx-10 my-4 elevation-3">
        <v-col cols="3" class="font-weight-bold">
          {{ passagem.destino }}
        </v-col>
        <v-col cols="3">
          {{ passagem.origem }}
        </v-col>
        <v-col  cols="2" align="center">
          {{ formatDate(passagem.data) }}
        </v-col>
        <v-col  cols="2" align="center">
          {{ formatCurrency(passagem.custo) }}
        </v-col>
        <v-col  cols="1" align="center">
          {{ passagem.lugares }}
        </v-col>
        <v-col cols="1">
          <v-btn depressed text small @click="detalhe(passagem.id)">
            <v-icon>mdi-information</v-icon>
          </v-btn>
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
      radioGroup: 1,
      passagens: [],
      passagensFiltradas: [
        {
          id: 1,
          destino: 'São Paulo, SP - Brasil',
          origem: 'Belo Horizonte, BH - Brasil',
          data: new Date().toISOString().substr(0, 10),
          custo: 2450,
          lugares: 36
        },
        {
          id: 2,
          destino: 'São Paulo, SP - Brasil',
          origem: 'Belo Horizonte, BH - Brasil',
          data: new Date().toISOString().substr(0, 10),
          custo: 2450,
          lugares: 36
        },
        {
          id: 3,
          destino: 'São Paulo, SP - Brasil',
          origem: 'Belo Horizonte, BH - Brasil',
          data: new Date().toISOString().substr(0, 10),
          custo: 2450,
          lugares: 36
        },
        {
          id: 4,
          destino: 'São Paulo, SP - Brasil',
          origem: 'Belo Horizonte, BH - Brasil',
          data: new Date().toISOString().substr(0, 10),
          custo: 2450,
          lugares: 36
        },
      ],
      destinos: [ 'São Paulo, SP - Brasil', 'Brasília, DF - Brasil' ],
      destino: '',
      origens: [ 'Belo Horizonte, BH - Brasil', 'Guarulhos, SP - Brasil' ],
      origem: '',
      menuIda: false,
      dataIda: new Date().toISOString().substr(0, 10),
      dataIdaFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menuVolta: false,
      dataVolta: new Date().toISOString().substr(0, 10),
      dataVoltaFormatted: null,
      adultos: 0,
      criancas: 0,
      tiposPassagem: [ 'Econômica', 'Executiva' ],
      tipoPassagem: ''
    }),
    computed: {
      totalAssentos () {
        return this.adultos + this.criancas
      }
    },
    watch: {
      dataIda () {
        this.dataIdaFormatted = this.formatDate(this.dataIda)
      },
      dataVolta () {
        this.dataVoltaFormatted = this.formatDate(this.dataVolta)
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
      formatCurrency (val) {
        return val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      },
      pesquisar () {

      }
    },
    mounted () {}
}
</script>