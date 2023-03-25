import { createApp } from 'vue'
import  {createMetaManager} from 'vue-meta'
import App from './App.vue'
import router from '/router.js'
const app = createApp(App);
const metaManager = createMetaManager();
app.use(metaManager)
app.use(router)

app.mount('#app')
