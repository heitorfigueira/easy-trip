import hotels from '../../api/hotels.js'

const hoteis = {
  namespaced: true,
  state: {
    listaHoteis: []
  },
  mutations: {
    SET_LISTA_HOTEIS(state, value) {
      state.listaHoteis = value
    }
  },
  actions: {
    async listarHoteis(context) {
      let result = await hotels.GetList({
        destinationId: 160256,
        pageNumber: 1,
        checkIn: '2020-01-08',
        checkOut: '2020-01-15',
        pageSize: 25,
        adults1: 1
      })
      console.log('resultadoListarHoteis', result)
      let hoteis = result.data.data.body.searchResults.results

      // let result = [
      //   {
      //     id: 634418464,
      //     thumbnailUrl: "https://exp.cdn-hotels.com/hotels/20000000/19800000/19794400/19794327/b02255b8_l.jpg",
      //     starRating: 2,
      //     ratePlan: {
      //       price: {
      //         current: '$41',
      //         old:'$199',
      //         info:"nightly price per unit",
      //         totalPricePerStay: "(<strong>$289</strong> for 7 nights)",
      //         additionalInfo:"This is the average nightly price for your dates.",
      //       }
      //     },
      //     neighbourhood:"NoMad",
      //   }
      // ]
      context.commit('SET_LISTA_HOTEIS', hoteis)
    }
  },
  getters: {
    listaHoteis: (state) => state.listaHoteis,
  },
}

export default hoteis
