import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/extensions
import app from '@/App';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: app,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
