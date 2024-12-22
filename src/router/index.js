import { createRouter, createWebHistory } from 'vue-router';
import ManagePeopleView from '../views/ManagePeopleView.vue';

const routes = [
  {
    path: '/manage-people',
    name: 'ManagePeople',
    component: ManagePeopleView,
  },
  // Add more routes here as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
