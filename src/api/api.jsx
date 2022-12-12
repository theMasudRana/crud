import axios from 'axios'

const api = axios.create({
    baseURL: 'https://contactapp-54351-default-rtdb.firebaseio.com/',
})
export default api