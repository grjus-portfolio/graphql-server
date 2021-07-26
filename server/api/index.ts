import axios from 'axios'

const spacexApi = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
  timeout: 5000,
  method: 'GET'
})

export default spacexApi
