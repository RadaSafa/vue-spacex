import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Dragon from "../views/Dragon.vue";
import Rockets from "../views/Rockets.vue";
import Transaction from "../views/Transaction.vue";
import Update from "../views/Update.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },

  {
    path: '/dragon',
    name: 'dragon',
    component: Dragon,
  },
  {
    path: '/rockets',
    name: 'rockets',
    component: Rockets ,
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: Transaction  ,
  },
  {
    path: '/update',
    name: 'update',
    component: Update  ,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
