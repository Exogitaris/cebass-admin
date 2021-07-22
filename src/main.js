import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from './router';
import store from "@/store";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../src/FontAwesomeIcons';
import Multiselect from 'vue-multiselect'
import "vue-multiselect/dist/dist/vue-multiselect.css"

const app = createApp(App)

app.component('fai', FontAwesomeIcon)
app.component('multiselect', Multiselect)

app.use(router)
app.use(store)

app.mount('#app')
