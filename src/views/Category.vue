<template>
  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

  <div class="container-fluid p-0">
    <the-menu />

  </div>

  <home-slider />

  <div class='d-flex justify-content-center text-center mt-5'>

    <div class="row justify-content-start mx-auto px-xl-5" >
      <div v-for="item in data" class="col-lg-4 px-5 mb-4">
        <router-link :to="'/posts/'+ item.id"  class="bg-gray2 p-4" style="border-radius: 20px">
          <img :src="panelUrl+item.image" style="border-radius:30px" class="w-100" alt="">
          <h1 class="my-5 text-center">{{ item.title }}</h1>
        </router-link>
      </div>
    </div>


  </div>
  <div class="p-5">

    <a target="_blank" href="/vdo/آش%20دوغ%20محلی-2%20اردیبهشت.mp4" class="  mb-5 pl-lg-2 m-lg-5 d-flex justify-content-between" style="border:1px solid  red ; border-radius: 20px;">

      <p class="" style="color:red; font-size:100px">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </p>

      <div class="d-lg-flex justify-content-lg-end flex-row-reverse">
        <img class="m-4" width="85%" style="border-radius:15px;" src="/img/39.png" />
        <div class="px-4" style="width: 90%; text-align:left;">
          <h1 class="mt-5">آش دوغ محلی</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas
          </p>
        </div>


      </div>


    </a>
    <a target="_blank" href="/vdo/سالاد%20نودالیت%20کریسپی.mp4" class="  mb-5 pl-lg-2 m-lg-5 d-flex justify-content-between" style="border:1px solid  red ; border-radius: 20px;">

      <p class="" style="color:red; font-size:100px">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </p>

      <div class="d-lg-flex justify-content-lg-end flex-row-reverse">
        <img class="m-4" width="85%" style="border-radius:15px;" src="/img/39.png" />
        <div class="px-4" style="width: 90%; text-align:left;">
          <h1 class="mt-5">سالاد نودالیت کریسپی</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas
          </p>
        </div>


      </div>


    </a>

  </div>

<the-footer />
  </div>
</template>

<script>
import homeSlider from "@/components/homeSlider";
import theFooter from "@/components/Footer";
import theMenu from "@/components/Menu";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
  name: "posts",
  components: {
    theFooter,
  homeSlider,
    theMenu
  },
  setup(_props) {

    const store = useStore();
    const panelUrl = store.state.panelUrl;
    const getData = () => {
      store.commit('getRecipeCats');
    }
    onMounted(() => {
      getData();
    });
    return {
      getData, store, panelUrl,
      data: computed(()=>store.state.recipeCats),
    }
  }
}
</script>

<style scoped>

</style>