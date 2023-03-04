import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/mickstraathof/real-estate-care/reports',
    withCredentials: false,
    headers:{
        Accept: 'applications/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPage(subURL){
        return apiClient.get(subURL)
    }
}