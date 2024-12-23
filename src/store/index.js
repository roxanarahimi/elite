import {createStore} from 'vuex'

window.axios = require('axios');

const store = createStore({
    state: {
        panelUrl: 'https://panel.elit.webagent.ir',
        foodSlider: null,
        recipeCats: null,
        recipes: null,
        blogs: null,
        blog: null,
        recipe: null,
        productsCats: null,
        products: null,
        product: null,
        productFeatures: null,
    },
    mutations: {
        getBlogs(state) {
            axios.get(state.panelUrl + '/api/blog')
                .then((response) => {
                    state.blogs = response.data;
                })
                .catch();
        },
        getBlog(state, id) {
            axios.get(state.panelUrl + '/api/blog/' + id)
                .then((response) => {
                    state.blog = response.data;
                }).catch();
        },
        getFoodSlider(state) {
            axios.get(state.panelUrl + '/api/food/slides')
                .then((response) => {
                    state.foodSlider = response.data;
                })
                .catch();
        },
        getRecipeCats(state) {
            axios.get(state.panelUrl + '/api/category/article')
                .then((response) => {
                    state.recipeCats = response.data;
                }).catch();
        },
        getRecipes(state, catId) {
            axios.get(state.panelUrl + '/api/article/by/category/' + catId)
                .then((response) => {
                    state.recipes = response.data.data;
                }).catch();
        },
        getRecipe(state, id) {
            axios.get(state.panelUrl + '/api/article/' + id)
                .then((response) => {
                    state.recipe = response.data;
                }).catch();
        },
        getProductCats(state) {
            axios.get(state.panelUrl + '/api/category/product')
                .then((response) => {
                    state.productsCats = response.data;
                }).catch();
        },
        getProducts(state) {
            axios.get(state.panelUrl + '/api/product')
                .then((response) => {
                    this.data = response.data;
                }).catch();
        },
        getProduct(state, id) {
            axios.get(state.panelUrl + '/api/product/' + id)
                .then((response) => {
                    state.product = response.data.product;
                    console.log('sssssssssssssssssss')
                }).then((response) => {
                // if (state.product.features) {
                //     state.productFeatures = [];
                //     for (let i = 0; i < JSON.parse(state.product.features).length; i++) {
                //         state.productFeatures.push(JSON.parse(state.product.features)[i]);
                //     }
                // }
            }).catch();
        }

    },
    actions: {
        getBlogs(context) {
            context.commit('getBlogs');
        },
        getBlog(context) {
            context.commit('getBlog');
        },
         getFoodSlider(context) {
            context.commit('getFoodSlider');
        },
        getRecipeCats(context) {
            context.commit('getRecipeCats');
        },
        getRecipes(context) {
            context.commit('getRecipes');
        },
        getRecipe(context) {
            context.commit('getRecipe');
        },
        getProductCats(context) {
            context.commit('getProductCats');
        },
        getProducts(context) {
            context.commit('getProducts');
        },
        getProduct(context) {
            context.commit('getProduct');
        },

    }
})


export default store