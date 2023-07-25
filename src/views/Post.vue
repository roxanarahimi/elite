<template>
  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

  <div class="container-fluid" v-if="data">
    <div class="row flex-row-reverse">
      <div class="col-xl-5 post-bg " style="background: url('/img/Ellipse.png') no-repeat top left; background-size: 90%; min-height: 400px">
        <img :src="panelUrl+data.image" class="post-img img-fluid" style="width: 70% ; margin-top: 20%"
             alt="">
      </div>
      <div class="col-xl-7 pt-5">
        <div class="row">
          <div class="col-xl-6 mb-3">
            <div class="cube">

            </div>
            <div class="bg-gray rounded p-4 mb-4 ms-5 "
                 style="text-align: justify; border-radius: 20px !important;">

              <div class="d-flex justify-content-between mb-5">
                <h1 class="" style="color: #ff0000; font-size: 35px; text-align:  right">

                  {{ data.title }}
                </h1>
                <img src="/img/flash.png" width="100" height="50" style="margin-left: -28px" alt="">
              </div>

              <div>
                <p dir="ltr" style="font-size: 18px;white-space: pre-line; text-align: right !important">
                  {{ data.text }}
                </p>

              </div>
            </div>
          </div>
          <div class="col-xl-6">

            <router-link :to="'/product/'+data.product?.id">
              <img :src="'https://panel.elit.webagent.ir'+data.product?.image" class="w-100 img-fluid" alt="">
            </router-link>
            <div dir="ltr" style="font-family: arial">
              <h1 class="fw-bolder">{{ data.product?.title_en }}</h1>
              <h1 class="text-black-50 fw-bold">{{ data.product?.subTitle }}</h1>
              <p class="fw-bold h5">{{ data.product?.flavor }}</p>
            </div>

            <a :href="'/recipe/'+data.tag?.id" class="bg-gray mb-3 rounded  text-center py-3 text-light" style=" border-radius: 20px !important;">
              <h1>{{ data.tag?.title }}</h1>
            </a>
            <div class="bg-main  rounded  text-center mb-5 py-3 text-light" style=" border-radius: 20px !important;">
              <h1>{{ data.title }}</h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex" @click="$router.go(-1)"
       style="cursor: pointer !important; position: fixed; bottom: 20px; left: 20px; background-color: white; padding: 10px; border-radius: 20%">
    <span>بازگشت</span>
    <div style="background-color: red; color: white; width: 30px; height:30px;  border-radius: 50%; text-align: center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    </div>
  </div>
  </div>
</template>

<script>
import {computed, onMounted} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import {useStore} from "vuex";

export default {
  name: "Post",
  setup() {
    const route = useRoute();
    const store = useStore();
    const panelUrl = store.state.panelUrl;


    onMounted(() => {
      store.commit('getRecipe', route.params.id);

    });

    return {
      data: computed(()=>store.state.recipe),
      route, panelUrl,
    }
  }

}
</script>

<style scoped>

</style>