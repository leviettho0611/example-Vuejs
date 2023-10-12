import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/index.vue';
import OtherPage from '../components/OtherPage/index.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/other-page', component: OtherPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
