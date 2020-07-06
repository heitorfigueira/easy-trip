import api from './api.js'

const url = 'skyscanner'

const skyscanner = {
  places: (obj) => api.post(url + 'places', obj),
  flights: (obj) => api.post(url + 'flights', obj)
}

export default skyscanner
