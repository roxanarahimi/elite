<template>
  <div class="container-fluid p-0 m-0 font-en" style="overflow-x: hidden !important">
    <div class="container-fluid p-0" style="position: absolute; top: 0px; left:0; ">
      <the-menu />
    </div>
  <div class="container-fluid" v-if="data" dir="ltr">
    <div class="row justify-content-center">
    <div class="col-xl-10">
      <div class="col-xl-10 ju">
          <img :src="panelUrl+data.image" class=" img-fluid mb-3" style="width: 70% ; margin-top: 20%"
               alt="">
        <h3>{{ data.title_en }}</h3>
      </div>

      <div class="col-12 pt-5">
        <p style="text-align: justify">
          {{ data.text_en }}
        </p>
      </div>
    </div>
  </div>
  </div>

  <div class="d-flex" @click="$router.go(-1)"
       style="cursor: pointer !important; position: fixed; bottom: 20px; left: 20px; background-color: white; padding: 10px; border-radius: 20%">
    <span>back</span>
    <div style="background-color: red; color: white; width: 30px; height:30px;  border-radius: 50%; text-align: center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    </div>
  </div>
    <the-footer/>

  </div>
</template>

<script>
import {computed, onMounted} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import {useStore} from "vuex";
import theFooter from "@/components/en/Footer";
import theMenu from "@/components/en/Menu"
export default {
  components: { theMenu, theFooter},
  name: "Article",
  setup() {
    const route = useRoute();
    const store = useStore();
    const panelUrl = store.state.panelUrl;


    onMounted(() => {
      document.querySelector('#app').scrollIntoView();
      store.commit('getBlog', route.params.id);

    });

    return {
      data: computed(()=>store.state.blog),
      route, panelUrl,
    }
  }

}
</script>

<style scoped>

</style>