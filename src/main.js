import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios' //tambahan coding axios untuk mengambil data product dari API

createApp(App).provide('axios', axios).mount('#app')
createApp(App).mount('#app')
