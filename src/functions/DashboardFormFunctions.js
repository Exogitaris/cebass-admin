import store from "@/store";

let DashboardFormFunctions = {
    vybratData(data, vuexFunkce, options) {
        const array = options
        array.push(data.value)
        const arrayTarget = JSON.parse(JSON.stringify(array))
        store.dispatch(vuexFunkce, arrayTarget)
    },
    smazatData(data, options) {
        const array = options
        const index = array.indexOf(data.value)
        array.splice(index, 1)
    },
}

export default DashboardFormFunctions