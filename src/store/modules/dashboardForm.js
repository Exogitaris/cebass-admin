import axios from "axios";

export default {
    state() {
        return {
            spravceData: [],
            komunikaceData: []
        }
    },
    mutations: {
        SET_DATA_SPRAVCE(state, spravceData) {
            state.spravceData = spravceData
        },
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
                            context.commit('SET_DATA_SPRAVCE', res.data)
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
        },
        async GET_DATA_BY_SPRAVCE(context, payload) {
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
        spravceData(state) {
            return state.spravceData;
        },
        komunikaceData(state) {
            return state.komunikaceData;
        }
    }
};