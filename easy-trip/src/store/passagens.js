import passages from '../../api/passagens.js'

const passagens = {
  namespaced: true,
  state: {
    listaPassagens: []
  },
  mutations: {
    SET_LISTA_PASSAGENS(state, value) {
      state.listaPassagens = value
    }
  },
  actions: {
    async listarPassagens(context) {
      let result = await passages.GetList({
        destinationId: 160256,
        pageNumber: 1,
        checkIn: '2020-01-08',
        checkOut: '2020-01-15',
        pageSize: 25,
        adults1: 1
      })
      console.log('resultadoListarPassagens', result)
      let passagens = result.data.data.body.searchResults.results

      context.commit('SET_LISTA_PASSAGENS', passagens)
    }
  },
  getters: {
    listaPassagens: (state) => state.listaPassagens,
  },
}

export default passagens
