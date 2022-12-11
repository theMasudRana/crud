import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/theMasudRana/json-api/',
})
export default api