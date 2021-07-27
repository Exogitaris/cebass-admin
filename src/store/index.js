import { createStore } from "vuex";

import searchResultsRoads from '@/store/modules/searchResultsRoads'

const store = createStore({
    modules: {
        searchResultsRoads
    }
})

export default store;