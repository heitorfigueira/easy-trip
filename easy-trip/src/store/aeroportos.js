import skyscanner from '../../api/skyscanner.js'

const aeroportos = {
  namespaced: true,
  state: {
    listaAeroportos: [],
    listaPassagens: [],
  },
  mutations: {
    SET_LISTA_AEROPORTOS(state, value) {
      state.listaAeroportos = value
    },
    SET_LISTA_PASSAGENS(state, value) {
      state.listaPassagens = value
    }
  },
  actions: {
    async listarAeroportos(context) {
      let query = {
        query: 's'
      }
      let result = await skyscanner.places(query)
      console.log('resultadoListarAeroportos', result)
      let aeroportos = result.data.airports

      context.commit('SET_LISTA_AEROPORTOS', aeroportos)
    },
    async listarPassagens(context, { query }) {
      console.log(query)
      let result = await skyscanner.flights(query)
      console.log('resultadoListarPassagens', result)
      let passagens = result.data

      context.commit('SET_LISTA_PASSAGENS', passagens)
    }
  },
  getters: {
    listaAeroportos: (state) => state.listaAeroportos,
    listaPassagens: (state) => state.listaPassagens,
  },
}

export default aeroportos
