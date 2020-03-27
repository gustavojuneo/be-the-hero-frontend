import axios from 'axios'

const api = axios.create({
    baseURL: 'https:/be-hero.herokuapp.com',
})

export default api