<template>
  <div>
    <v-container class="pl-4" fluid>
      <h3>Serviços de hotelaria de qualidade!</h3>
      <v-row  class="pl-4" dense>
        <v-col cols="2">
          <v-combobox 
            @change="listarLocais({ query: cidade })"
            v-model="cidade" 
            :items="nomesLocais"
            item-value="id"
            item-text="nome"
            :loading="carregandoLista"
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
            <v-date-picker v-model="dataEntrada" no-title @input="menuEntrada = false" @change="adicionarSeteDiasNaSaida($event)"></v-date-picker>
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
      </v-row>
      <v-row class="pl-4">
        <v-col cols="1">
          <v-text-field 
            v-model.number="adultos" 
            label="Adultos" 
            type="number">
          </v-text-field>
        </v-col>
        <v-col cols="2" offset="6" class="pt-6 pl-3">
          <v-btn class="mt-3" color="primary" @click="pesquisar">
            <v-icon class="mr-2">mdi-magnify</v-icon>
            Pesquisar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <GridHoteis></GridHoteis>
  </div>
</template>

<script>
import GridHoteis from '../components/GridHoteis.vue'
import { mapGetters, mapActions } from 'vuex'
import * as moment from 'moment'
export default {
    name: 'Passagens',
    components: {
      GridHoteis
    },
    data: vm => ({
      hospedagens: [],
      cidades: [ 'São Paulo, SP - Brasil', 'Brasília, DF - Brasil', 'Belo Horizonte, BH - Brasil', 'Guarulhos, SP - Brasil' ],
      cidade: {id: 160256, nome: 'São Paulo'},
      menuEntrada: false,
      dataEntrada: new Date().toISOString().substr(0, 10),
      dataEntradaFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menuSaida: false,
      dataSaida: new Date().toISOString().substr(0, 10),
      dataSaidaFormatted: null,
      quartos: 0,
      camas: 0,
      adultos: 1
    }),
    computed: {
      ...mapGetters({
        locais: 'hoteis/listaLocais',
        nomesLocais: 'hoteis/listaNomesLocais',
        carregandoLista: 'hoteis/carregandoLista'
      }),
    },
    watch: {
      dataEntrada () {
        this.dataEntradaFormatted = this.formatDate(this.dataEntrada)
      },
      dataSaida () {
        this.dataSaidaFormatted = this.formatDate(this.dataSaida)
      }
    },
    methods: {
      ...mapActions({
        listarLocais: 'hoteis/listarLocais',
        listarHoteis: 'hoteis/listarHoteis'
      }),
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
        let payload = {
          destinationId: this.cidade.id,
          pageNumber: 1,
          pageSize: 25,
          checkIn: moment(this.dataEntradaFormatted, 'DD/MM/YYYY').format('YYYY-MM-DD'),
          checkOut: moment(this.dataSaidaFormatted, 'DD/MM/YYYY').format('YYYY-MM-DD'),
          adults1: this.adultos
        }
        console.log(payload)
        this.listarHoteis(payload)
      },
      adicionarSeteDiasNaSaida () {
        let mDataEntrada = moment(this.dataEntradaFormatted, 'DD/MM/YYYY')
        this.dataSaidaFormatted = mDataEntrada.add(7, 'days').format('DD/MM/YYYY');
      }
    },
    mounted () {
      this.listarLocais({query: 'sao paulo'})
    }
}
</script>