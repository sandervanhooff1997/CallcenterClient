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
        getEmployeeByEmail({ mutations }, email) {
            return new Promise((resolve, reject) => {
                if (!email)
                    reject(null)

                dispatch('setLoading', true)
                AxiosInstance.post(`employee/${email}`, {
                    email,
                    password
                })
                    .then(res => {
                        let token = res.data.token

                        if (!token)
                            reject(false)

                        localStorage.token = token
                        AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

                        dispatch('getEmployee', email)
                    })
                    .catch(err => reject(err))
                    .finally(() => dispatch('setLoading', false))
            })
        }
    }
}