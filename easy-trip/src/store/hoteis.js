import hotels from '../../api/hotels.js'
import * as _ from 'lodash'

const hoteis = {
  namespaced: true,
  state: {
    listaHoteis: [],
    listaLocais: [],
    listaNomesLocais: [],
    carregandoLista: false
  },
  mutations: {
    SET_LISTA_HOTEIS(state, value) {
      state.listaHoteis = value
    },
    SET_LISTA_LOCAIS(state, value) {
      state.listaLocais = value
    },
    SET_LISTA_NOMES_LOCAIS(state, value) {
      state.listaNomesLocais = value
    },
    SET_CARREGANDO_LISTA(state, value) {
      state.carregandoLista = value
    }
  },
  actions: {
    async listarHoteis(context, payload) {
      let result = await hotels.GetList(payload)
      let hoteis = result.data.data.body.searchResults.results
      context.commit('SET_LISTA_HOTEIS', hoteis)
    },
    async listarLocais(context, { query }) {
      let result = await hotels.SearchLocations({ query })
      console.log('data', result.data.suggestions)

      let cityGroup = _.filter(result.data.suggestions, x => {
        return x.group === 'CITY_GROUP'
      })
      console.log('cityGroup',  cityGroup)
      let suggestions = _.filter(cityGroup[0].entities, x => {
        return x.type === 'CITY'
      })
      let nomesLocais = suggestions.map(x => { return { id: x.destinationId, nome: x.name } })
      console.log('nomesLocais', nomesLocais)
      context.commit('SET_LISTA_LOCAIS', suggestions)
      context.commit('SET_LISTA_NOMES_LOCAIS', nomesLocais)
    }
  },
  getters: {
    listaHoteis: (state) => state.listaHoteis,
    listaLocais: (state) => state.listaLocais,
    listaNomesLocais: (state) => state.listaNomesLocais,
    carregandoLista: (state) => state.carregandoLista
  },
}

export default hoteis
