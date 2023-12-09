import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AnnoBase.vue') },
      { path: '/misc', component: () => import('pages/AnnoMisc.vue') },
      { path: '/season1', component: () => import('pages/AnnoSeason1.vue') },
      { path: '/season2', component: () => import('pages/AnnoSeason2.vue') },
      { path: '/season3', component: () => import('pages/AnnoSeason3.vue') },
      { path: '/season4', component: () => import('pages/AnnoSeason4.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
