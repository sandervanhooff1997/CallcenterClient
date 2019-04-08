import axios from 'axios'
import store from '@/vuex/store'

const instance = axios.create({
    baseURL: "http://localhost:8081/callcenter/",
    timeout: 30 * 1000,
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
});

instance.interceptors.request.use(config => {
    return config
})

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response && error.response.status === 401) {
            store.dispatch('logout')
        }
    }
)

export default instance
