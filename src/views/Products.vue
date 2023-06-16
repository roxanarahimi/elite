<template>

  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

  <div class="container-fluid p-0" id="top">
    <div class="nav d-flex justify-content-center">
      <router-link class="logo d-block" to="/"><img src="/img/Layer%2023.png" class="me-3 me-lg-5 img-fluid" width="150"
                                                    alt=""></router-link>
      <nav class="bg-main rounded rounded-pill navbar mt-3" style="height: 50px; width: 75%">
        <div class="menu-main-menu-container">
          <ul id="menu-main-menu" class="menu">
            <li id="menu-item-61"
                class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-61">
              <a href="/" aria-current="page">خانه</a>
            </li>
            <li id="menu-item-136" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-136">
              <router-link to="/products">محصولات</router-link>
            </li>
            <li id="menu-item-105" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-105">
              <router-link to="/categories">دستور پخت</router-link>
            </li>
            <li id="menu-item-103" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
              <router-link to="/about">درباره الیت</router-link>
            </li>
            <li id="menu-item-104" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
              <router-link to="/contact">تماس با ما</router-link>
            </li>


            <li id="menu-item-138" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-138">
              <a href="https://digikala.com/search/?brands%5B0%5D=7630&q=Elite" target="_blank">خرید اینترنتی</a>
            </li>
            <li id="menu-item-139" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-139">
              <router-link to="/search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                     viewBox="0 0 16 16">
                  <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>


    </div>
  </div>

  <div class="container-fluid p-0 px-lg-5" style="min-height: 300px">
    <div class="row px-5">
      <div v-for="(item, index) in data" :key="index" class="col-sm-4 p-lg-5 mb-3">
        <a :id="'to_'+item.title_en" :href="'#'+item.title_en" class="h-100"
           style="border-radius: 20px;overflow: hidden; display: grid; background-color: whitesmoke">
          <div class="">

            <img :src="'https://panel.elit.webagent.ir'+item.image" class=" w-100 rounded img-fluid" alt="">
          </div>
          <div class="text-light text-center"
               style="align-self: end; background-color: rgba(0,0,0,0.27); height: 65px;">

            <h3>
              {{ item.title }}

            </h3>

          </div>
        </a>
      </div>

    </div>
  </div>


  <div v-for="(item, index) in data" :key="index" :id="item.title_en" class="container-fluid p-0 mt-5 pt-5 px-lg-5"
       style=" ">
    <h2 class="text-center">{{ item.title }}</h2>
    <products-slider :oneRowMode="item.id==5 || item.id==6" :cat-id="item.id"/>
  </div>

  <!--  <div id="noodelite" class="container-fluid p-0 mt-5 pt-5 px-lg-5" style=" ">-->
  <!--    <h2 class="text-center">نودالیت</h2>-->
  <!--    <products-slider  :oneRowMode="false" cat-id="3" />-->
  <!--  </div>-->
  <!--  <div id="soup" class="container-fluid p-0 mt-5 pt-5 px-lg-5" style=" ">-->
  <!--    <h2 class="text-center">سوپ الیت</h2>-->
  <!--    <products-slider  :oneRowMode="false" cat-id="2" />-->
  <!--  </div>-->
  <!--  <div id="bouillon" class="container-fluid p-0 mt-5 pt-5 px-lg-5" style=" ">-->
  <!--    <h2 class="text-center">عصاره الیت</h2>-->
  <!--    <products-slider  :oneRowMode="false" cat-id="1" />-->
  <!--  </div>-->
  <!--  <div id="seasoning" class="container-fluid p-0 mt-5 pt-5 px-lg-5" style=" ">-->
  <!--    <h2 class="text-center">چاشنی و ادویه</h2>-->
  <!--    <products-slider  :oneRowMode="false" cat-id="6" />-->
  <!--  </div>-->
  <!--  <div id="pasta" class="container-fluid p-0 mt-5 pt-5 px-lg-5" style=" ">-->
  <!--    <h2 class="text-center">آش و پاستا</h2>-->
  <!--    <products-slider  :oneRowMode="false" cat-id="5" />-->
  <!--  </div>-->
  <!--  <div id="other" class="container-fluid p-0 mt-5 pt-5 px-lg-5" style=" ">-->
  <!--    <h2 class="text-center">سایر</h2>-->
  <!--    <products-slider :oneRowMode="false" cat-id="4" />-->
  <!--  </div>-->


  <the-footer/>
  </div>
  <a id="up" class="d-flex d-none" href="#top"
     style="cursor: pointer !important; position: fixed; bottom: 20px; left: 20px; background-color: white; padding: 10px; border-radius: 20%">
    <span>بازگشت</span>
    <div style="background-color: red; color: white; width: 30px; height:30px;  border-radius: 50%; text-align: center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg>
    </div>
  </a>
</template>

<script>

import productsSlider from "@/components/productsSlider";
import {onBeforeMount, onMounted, ref} from "vue";

import theFooter from "@/components/Footer";
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: "Products",
  components: {
    theFooter,
    productsSlider,

  },

  setup() {

    const data = ref([]);
    const route = useRoute();

    const getData = () => {
      // axios.get('http://127.0.0.1:8000/api/category/product')
      axios.get('https://panel.elit.webagent.ir/api/category/product')
          .then((response) => {
            data.value = response.data;
            console.log(data.value)
          })
          .then(()=>{
          setTimeout(()=>{
            let path = route.fullPath;
            let element = document.getElementById('to_'+path.split("#")[1])
            if(element){
              element.click();
            }
          },1500)
          })
          .catch();
    };

    onBeforeMount(() => {
      getData();
      document.addEventListener('scroll', () => {
        var doc = document.documentElement;

        if ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) >= 200) {
          document.querySelector('#up').classList.remove('d-none');
        } else {
          document.querySelector('#up').classList.add('d-none');
        }
      });

    })

    onMounted(()=>{

    })
    return {
      data, getData, route,
    }
  },


}
</script>
