import axios from 'axios'

var baseUrl = "http://18.206.11.51/"

const api = {
  get: async (route, query) => {
    try {
      const response = await axios.get(baseUrl + route, { params: query})
      return response
    } catch (error) {
      handleError(error)
    }
  },
  post: async (route, data, query) => {
    try {
      const response = await axios.post(baseUrl + route, data, { params: query })  
      return response
    } catch (error) {
      handleError(error)
    }
  },
  put: async (route, data, query) => {
    try {
      const response = await axios.put(baseUrl + route, data, { params: query })  
      return response
    } catch (error) {
      handleError(error)
    }
  },
  delete: async (route, query) => {
    try {
      const response = await axios.delete(baseUrl + route, null, { params: query })  
      return response
    } catch (error) {
      handleError(error)
    }
  }
}

export default api

const handleError = (error) => {
  console.error(error);
}