// Composables
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('@/views/Download.vue'),
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('@/views/Community.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/Privacy.vue'),
  },
  {
    path: '/terms-of-service',
    name: 'Terms',
    component: () => import('@/views/Terms.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    // always scroll to top
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router
