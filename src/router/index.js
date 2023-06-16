import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
{
    path: '/categories',
    name: 'categories',
    component: () => import(/* webpackChunkName: "categories" */ '../views/Category.vue')
  },
{
    path: '/posts/:id',
    name: 'posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue')
  },
{
    path: '/recipe/:id',
    name: 'recipe',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/Post.vue')
  }
,
{
    path: '/products',
    name: 'products',
    params: true,
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
{
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
    {
        path: '/product/:id',
        name: 'product',
        params: true,
        component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
    }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
