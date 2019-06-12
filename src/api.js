import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://contacts-api.marketdial.com`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Content-Type': 'application/json'
    }
  })
}
