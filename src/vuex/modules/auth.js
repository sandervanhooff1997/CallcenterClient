import AxiosInstance from '../axios-config'

export default {
    state: {
        employee: null
    },
    getters: {
        employee(state) {
            return state.employee
        }
    },
    mutations: {
        setEmployee(state, employee) {
            state.employee = employee
        }
    },
    actions: {
        login({ mutations, dispatch }, { email, password }) {
            return new Promise((resolve, reject) => {
                if (!email || !password)
                    reject(false)

                dispatch('setLoading', true)
                AxiosInstance.post('auth/login', {
                    email,
                    password
                })
                    .then(res => resolve(res))
                    .catch(err => reject(err))
                    .finally(() => dispatch('setLoading', false))
            })
        }
    }
}