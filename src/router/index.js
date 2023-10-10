import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminLogin from '../AdminLogin.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/admin', // Add this route for the admin login page
      name: 'admin',
      component: AdminLogin
    },
  ]
});

// Navigation guard to check if the admin is logged in
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAdminAuth && localStorage.getItem("isAdminLoggedIn") !== "true") {
    // If the route requires admin authentication and the admin is not logged in, redirect to the login page
    next({ name: 'admin' }); // Redirect to the admin login page
  } else {
    // If the admin is logged in or the route does not require authentication, proceed to the route
    next();
  }
});

export default router