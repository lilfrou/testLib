import { createApp } from 'vue';
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import Libfiras from '@/entry.esm';
import router from '../src/router/index'
createApp(Dev).use(router).use(Libfiras).mount('#app')
