<template>
  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

  <div class="container-fluid p-0">
    <div class="nav d-flex justify-content-center" >
      <router-link class="logo d-block" to="/"><img src="/img/Layer%2023.png" class="me-3 me-lg-5 img-fluid" width="150" alt=""></router-link>
      <nav class="bg-main rounded rounded-pill navbar mt-3" style="height: 50px; width: 75%">
        <div class="menu-main-menu-container">
          <ul id="menu-main-menu" class="menu">
            <li id="menu-item-61" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-61">
              <a href="/" aria-current="page">خانه</a>
            </li>
            <li id="menu-item-136" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-136">
              <router-link to="/products">محصولات</router-link>
            </li>
            <li id="menu-item-105" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-105">
              <router-link to="/categories">دستور پخت</router-link>
            </li>
            <li id="menu-item-103" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
              <router-link  to="/about">درباره الیت</router-link>
            </li>
            <li id="menu-item-104" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
              <router-link to="/contact">تماس با ما</router-link>
            </li>


            <li id="menu-item-138" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-138">
              <a href="https://digikala.com/search/?brands%5B0%5D=7630&q=Elite" target="_blank">خرید اینترنتی</a>
            </li>
            <li id="menu-item-139" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-139">
              <router-link to="/search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </router-link>
            </li>
          </ul>
        </div>

      </nav>


    </div>
  </div>
  <div class="searchContainer w-100 text-right row px-4 my-5 justify-content-center">
    <p class="col-md-6">محصول مورد نظر خود را جستوجو کنید:</p>
    <input id="search"  @input="search" class="col-md-6 w-100 rounded-pill" style="max-width:400px; height: 45px; padding: 10px" placeholder="جستوجو..." type="text">
  </div>
  <div class='d-flex justify-content-center text-center mt-5' style="min-height: 150px;">




    <div class="row justify-content-start mx-auto px-5" v-if="data.length" >
      <router-link v-for="item in data" :key="item.id" :to="'/product/'+item.id" style="max-height: 250px"  class="col-sm-6 col-lg-3 mb-3">
        <div class="bg-gray2 p-4 h-100" style="border-radius: 20px">
          <img :src="'https://panel.elit.webagent.ir'+item.image" class="img-fluid h-75 rounded" alt="">
          <h6 class="mt-4">

            {{ item.title }}
          </h6>
        </div>
      </router-link>
    </div>

  </div>



  <the-footer />
  </div>
</template>

<script>
import {ref} from "vue";

import theFooter from "@/components/Footer";

export default {
  components: { theFooter },
  name: "Search",
  setup(){

    const data = ref([]);
    const search = () =>{
      let term = document.getElementById('search').value;

      axios.get('https://panel.elit.webagent.ir/api/search?term='+term)
      .then((response)=>{
        data.value = response.data ;
        console.log(data.value)
      })
      .catch((error)=>{
        console.log(error)
      });

    }

    return{
      search, data
    }
  }
}
</script>

<style scoped>
/*@media (min-width: 1000px) {*/
/*  .searchContainer{*/
/*    padding-right: 290px;*/
/*  }*/
/*}*/
</style>