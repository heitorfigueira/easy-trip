import api from './api.js'

const url = 'passagens/'

const passagens = {
  GetDetails: async (obj) => await api.post(url + 'GetDetails', obj),
  GetList: async (obj) => await api.post(url + 'GetList', obj),
  GetMetaData: async (obj) => await api.post(url + 'GetMetaData', obj),
  GetPhotos: async (obj) => await api.post(url + 'GetPhotos', obj),
  SearchLocations: async (obj) => await api.post(url + 'SearchLocations', obj)
}

export default passagens