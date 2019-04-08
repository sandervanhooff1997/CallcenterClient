import AxiosInstance from '../../router/axios-config'

export default {
    state: {
        calls: null
    },
    getters: {
        calls(state) {
            return state.calls
        }
    },
    mutations: {
        setCalls(state, calls) {
            state.calls = call
        },
        addCall(state, call) {
            state.calls.push(call)
        }
    },
    actions: {
        getCalls() {
            AxiosInstance.get('call').then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}