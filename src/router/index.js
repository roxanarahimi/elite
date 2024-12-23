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
    },
    {
        path: '/blog',
        name: 'blog',
        params: true,
        component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
    },
    {
        path: '/article/:id',
        name: 'article',
        params: true,
        component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue')
    },
 //   en ***************************************************************
    {
        path: '/en',
        name: 'homeEn',
        component: () => import(/* webpackChunkName: "homeEn" */ '../views/en/Home')
    },
    {
        path: '/en/about',
        name: 'aboutEn',
        component: () => import(/* webpackChunkName: "aboutEn" */ '../views/en/About.vue')
    },
    {
        path: '/en/contact',
        name: 'contactEn',
        component: () => import(/* webpackChunkName: "contactEn" */ '../views/en/Contact.vue')
    },
    {
        path: '/en/categories',
        name: 'categoriesEn',
        component: () => import(/* webpackChunkName: "categoriesEn" */ '../views/en/Category.vue')
    },
    {
        path: '/en/posts/:id',
        name: 'postsEn',
        component: () => import(/* webpackChunkName: "postsEn" */ '../views/en/Posts.vue')
    },
    {
        path: '/en/recipe/:id',
        name: 'recipeEn',
        component: () => import(/* webpackChunkName: "recipeEn" */ '../views/en/Post.vue')
    }
    ,
    {
        path: '/en/products',
        name: 'productsEn',
        params: true,
        component: () => import(/* webpackChunkName: "productsEn" */ '../views/en/Products.vue')
    },
    {
        path: '/en/searchEn',
        name: 'search',
        component: () => import(/* webpackChunkName: "searchEn" */ '../views/en/Search.vue')
    },
    {
        path: '/en/product/:id',
        name: 'productEn',
        params: true,
        component: () => import(/* webpackChunkName: "productEn" */ '../views/en/Product.vue')
    },
    {
        path: '/en/blog',
        name: 'blogEn',
        params: true,
        component: () => import(/* webpackChunkName: "blogEn" */ '../views/en/Blog.vue')
    },
    {
        path: '/en/article/:id',
        name: 'articleEn',
        params: true,
        component: () => import(/* webpackChunkName: "articleEn" */ '../views/en/Article.vue')
    },
    //ar *************************************************************************************
    {
        path: '/ar',
        name: 'homeAr',
        component: () => import(/* webpackChunkName: "homeAr" */ '../views/ar/Home.vue')
    },
    {
        path: '/ar/about',
        name: 'aboutAr',
        component: () => import(/* webpackChunkName: "aboutAr" */ '../views/ar/About.vue')
    },
    {
        path: '/ar/contact',
        name: 'contactAr',
        component: () => import(/* webpackChunkName: "contactAr" */ '../views/ar/Contact.vue')
    },
    {
        path: '/ar/categories',
        name: 'categoriesAr',
        component: () => import(/* webpackChunkName: "categoriesAr" */ '../views/ar/Category.vue')
    },
    {
        path: '/ar/posts/:id',
        name: 'postsAr',
        component: () => import(/* webpackChunkName: "postsAr" */ '../views/ar/Posts.vue')
    },
    {
        path: '/ar/recipe/:id',
        name: 'recipeAr',
        component: () => import(/* webpackChunkName: "recipeAr" */ '../views/ar/Post.vue')
    }
    ,
    {
        path: '/ar/products',
        name: 'productsAr',
        params: true,
        component: () => import(/* webpackChunkName: "productsAr" */ '../views/ar/Products.vue')
    },
    {
        path: '/ar/search',
        name: 'searchAr',
        component: () => import(/* webpackChunkName: "searchAr" */ '../views/ar/Search.vue')
    },
    {
        path: '/ar/product/:id',
        name: 'productAr',
        params: true,
        component: () => import(/* webpackChunkName: "productAr" */ '../views/ar/Product.vue')
    },
    {
        path: '/ar/blog',
        name: 'blogAr',
        params: true,
        component: () => import(/* webpackChunkName: "blogAr" */ '../views/ar/Blog.vue')
    },
    {
        path: '/ar/article/:id',
        name: 'articlArn',
        params: true,
        component: () => import(/* webpackChunkName: "articleAr" */ '../views/ar/Article.vue')
    },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
