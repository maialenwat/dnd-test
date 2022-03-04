import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import BlocComponent from './components/Bloc.vue'

createApp(App)
.component('BlocComponent', BlocComponent)
.mount('#app')
