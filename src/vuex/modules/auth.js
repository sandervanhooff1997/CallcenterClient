import AxiosInstance from '../axios-config'
import jwtDecode from 'jwt-decode'

export default {
    state: {
        user: null
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        login(context, { email, password }) {
            return new Promise((resolve, reject) => {
                if (!email || !password)
                    reject(false)

                context.dispatch('setLoading', true)
                AxiosInstance.post('auth/login', {
                    email,
                    password
                })
                    .then(res => {
                        let token = res.data
                        console.log("login API call response", res)
                        if (!token)
                            reject()

                        try {
                            let user = jwtDecode(token)
                            // decode JWT user data
                            console.log("Decoded JWT", user)

                            if (user.id && user.email) {
                                // save to localstorage
                                localStorage.token = token

                                // setup auth header
                                AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

                                context.commit("setUser", {
                                    id: user.id,
                                    email: user.email
                                })

                                resolve()
                            }
                        } catch (err) {
                            localStorage.token = null
                            delete AxiosInstance.defaults.headers.common['Authorization']
                            reject()
                        }
                    })
                    .catch(err => reject(err))
                    .finally(() => context.dispatch('setLoading', false))
            })
        }
    }
}