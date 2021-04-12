import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Members from '../views/Members.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'AUZM Studio'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Projects · AUZM'
    }
  },
  {
    path: '/members',
    name: 'Members',
    component: Members,
    meta: {
      title: 'Members · AUZM'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About · AUZM'
    }
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
