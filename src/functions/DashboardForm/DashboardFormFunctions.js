import store from "@/store";

let FormFce = {
    vybratData(data, vuexFunkce, options) {
        const array = options
        array.push(Number(data.value))
        this.odeslatData(array, vuexFunkce)
    },
    smazatData(data, vuexFunkce, options) {
        const array = options
        const index = array.indexOf(Number(data.value))
        array.splice(index, 1)
        this.odeslatData(array, vuexFunkce)
    },
    odeslatData(array, vuexFunkce) {
        const arrayTarget = JSON.parse(JSON.stringify(array))
        store.dispatch(vuexFunkce, arrayTarget)
    }
}

export default FormFce;