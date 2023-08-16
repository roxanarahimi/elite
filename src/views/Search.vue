<template>
  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

  <div class="container-fluid p-0">

    <the-menu />
  </div>
  <div class="searchContainer w-100 text-right row px-4 my-5 justify-content-center">
    <p class="col-md-6">کلمه مورد نظر خود را جستوجو کنید:</p>
    <input id="search"  @input="search" class="col-md-6 w-100 rounded-pill" style="max-width:400px; height: 45px; padding: 10px" placeholder="جستوجو..." type="text">
  </div>
  <div class='d-flex justify-content-center text-center mt-5' style="min-height: 150px;">

    <div class="row justify-content-start mx-auto px-5" v-if="data" >
      <h3 v-show="data.products?.length">محصولات: </h3>
      <router-link v-for="item in data.products" :key="item.id" :to="'/product/'+item.id" style="max-height: 250px"  class="col-sm-6 col-lg-3 mb-3">
        <div class="bg-gray2 p-4 h-100" style="border-radius: 20px">
          <img :src="panelUrl+item.image" class="img-fluid h-75 rounded" alt="">
          <h6 class="mt-4">

            {{ item.title }}
          </h6>
        </div>
      </router-link>
      <h3 v-show="data.articles?.length">دستور پخت ها: </h3>
      <router-link v-for="item in data.articles" :key="item.id" :to="'/recipe/'+item.id" style="max-height: 250px"  class="col-sm-6 col-lg-3 mb-3">
        <div class="bg-gray2 p-4 h-100" style="border-radius: 20px">
          <img :src="panelUrl+item.image" class="img-fluid h-75 rounded" alt="">
          <h6 class="mt-4">

            {{ item.title }}
          </h6>
        </div>
      </router-link>
      <h3 v-show="data.blogs?.length" >مطالب: </h3>
      <router-link v-for="item in data.blogs" :key="item.id" :to="'/blog/'+item.id" style="max-height: 250px"  class="col-sm-6 col-lg-3 mb-3">
        <div class="bg-gray2 p-4 h-100" style="border-radius: 20px">
          <img :src="panelUrl+item.image" class="img-fluid h-75 rounded" alt="">
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
import { useStore} from 'vuex'

import theFooter from "@/components/Footer";
import theMenu from "@/components/Menu";

export default {
  components: { theFooter, theMenu },
  name: "Search",
  setup(){

    const data = ref([]);
    const store = useStore();
    const panelUrl = store.state.panelUrl;
    const search = () =>{
      let term = document.getElementById('search').value;

      axios.get(panelUrl+'/api/search?term='+term)
      .then((response)=>{
        data.value = response.data ;
        console.log(data.value)
      })
      .catch((error)=>{
        console.log(error)
      });

    }

    return{
      search, data, panelUrl
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