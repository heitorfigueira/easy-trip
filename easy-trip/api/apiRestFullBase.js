import api from '../api/api.js'

const ApiRestFullBase = function(resource) {
  return {
    resource: resource,

    getAll: async function () {
      let result = await api.get(this.resource)
      return result
    },
  
    getById: async function (id) {
      return await api.get(`${this.resource}/${id}`)
    },
  
    update: async function (id, obj) {
      return await api.put(`${this.resource}/${id}`, obj)
    },
  
    delete: async function (id) {
      return await api.delete(`${this.resource}/${id}`)
    },
  
    create: async function (obj) {
      return await api.post(this.resource, obj)
    }
  }
}

export default ApiRestFullBase
