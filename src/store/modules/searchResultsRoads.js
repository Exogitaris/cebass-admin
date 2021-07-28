import axios from "axios";

export default {
    state() {
        return {
            komunikaceData: []
        }
    },
    mutations: {
        SET_DATA_KOMUNIKACE(state, komunikaceData) {
            state.komunikaceData = komunikaceData
        }
    },
    actions: {
        async GET_DATA_BY_KOMUNIKACE(context, payload) {
            console.log(payload)
            return new Promise((resolve, reject) => {
                axios.post('', payload)
                    .then(res => {
                        resolve(
                            res,
                            context.commit('SET_DATA_KOMUNIKACE', res.data)
                        )
                    })
                    .catch(err => {
                        if (err.response) {
                            reject(
                                err,
                                console.log(err)
                            )
                        }
                    })
            })
        }
    },
    getters: {
        komunikaceData(state) {
            return state.komunikaceData;
        }
    }
};