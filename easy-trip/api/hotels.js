import api from './api.js'

const url = 'hotels/'

const hotels = {
  GetDetails: async () => await api.post(url + 'GetDetails', obj),
  GetList: async () => await api.post(url + 'GetList', obj),
  GetMetaData: async () => await api.post(url + 'GetMetaData', obj),
  GetPhotos: async () => await api.post(url + 'GetPhotos', obj),
  SearchLocations: async () => await api.post(url + 'SearchLocations', obj)
}

export default hotels