import ApiRestFullBase from './apiRestFullBase.js'

var url = 'core/'

const coreApi = {
  addresses: ApiRestFullBase(url + 'addresses'),
  carRents: ApiRestFullBase(url + 'carRents'),
  flights: ApiRestFullBase(url + 'flights'),
  hotels: ApiRestFullBase(url + 'hotels'),
  payments: ApiRestFullBase(url + 'payments'),
  purchases: ApiRestFullBase(url + 'purchases'),
  travels: ApiRestFullBase(url + 'travels'),
  users: ApiRestFullBase(url + 'users'),
}

export default coreApi