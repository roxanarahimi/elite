<template>

  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

  <div class="container-fluid p-0" id="top">

    <the-menu />
  </div>

  <div class="container-fluid p-0 px-lg-5" style="min-height: 300px">
    <div class="row px-5">
      <div v-for="(item, index) in data" :key="index" class="col-sm-4 p-lg-5 mb-3" style="">
        <a :id="'to_'+item.title_en" :href="'#'+item.title_en" class="h-100" style="position: relative; border-radius: 20px;overflow: hidden; display: grid; background-color: whitesmoke">
          <div class="">

            <img :src="panelUrl+item.image" class=" w-100 rounded img-fluid" alt="">
          </div>
          <div class="text-light text-center w-100" style="position: absolute; bottom: 0; left: 0; background-color: rgba(0,0,0,0.27); height: 65px;">

            <h3 class="mt-3">
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

import productsSlider from "@/components/ar/productsSlider";
import {computed, onBeforeMount, onMounted, ref} from "vue";

import theFooter from "@/components/ar/Footer";
import {useRoute} from "vue-router/dist/vue-router";
import theMenu from "@/components/ar/Menu";
import {useStore} from 'vuex'


export default {
  name: "Products",
  components: {
    theFooter,
    productsSlider,
    theMenu

  },

  setup() {

    const route = useRoute();
    const store = useStore();
    const panelUrl = store.state.panelUrl;
    const getData = () => {
      store.commit('getProductCats');
      setTimeout(()=>{
            let path = route.fullPath;
            let element = document.getElementById('to_'+path.split("#")[1])
            if(element){
              element.click();
            }
          },1500)
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
      data: computed(()=>store.state.productsCats),
      getData, route,panelUrl,
    }
  },


}
</script>
