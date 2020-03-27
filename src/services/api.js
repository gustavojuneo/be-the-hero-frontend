import axios from 'axios'

const api = axios.create({
    baseURL: 'http:/be-hero.herokuapp.com',
})

export default api