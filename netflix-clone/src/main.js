// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // router 설정 가져오기

const app = createApp(App);

// Vue 앱에 플러그인 등록
app.use(router);

// FontAwesome 컴포넌트 등록


// Vue 앱 마운트
app.mount('#app');
