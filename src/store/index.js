import { createStore } from "vuex";

import dashboardForm from '@/store/modules/dashboardForm'

const store = createStore({
    modules: {
        dashboardForm
    }
})

export default store;