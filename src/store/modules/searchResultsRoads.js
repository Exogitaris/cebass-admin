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
            return new Promise((resolve, reject) => {
                axios.get('' + '['+payload+']')
                    .then(res => {
                        resolve(
                            res,
                            context.commit('', res.data)
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