<template>
  <div class="container-fluid p-0 m-0 text-en" style="overflow-x: hidden !important">

    <div class="container-fluid p-0">
      <the-menu/>

    </div>

    <home-slider/>

    <div class='d-flex justify-content-center text-center mt-5'>

      <div class="row justify-content-start mx-auto px-xl-5">
        <div v-for="item in data" class="col-lg-4 px-5 mb-4">
          <router-link :to="'/en/posts/'+ item.id" class="bg-gray2 p-4" style="border-radius: 20px">
            <img :src="panelUrl+item.image" style="border-radius:30px" class="w-100" alt="">
            <h1 class="my-5 text-center">{{ item.title_en }}</h1>
          </router-link>
        </div>
      </div>


    </div>
    <div dir="rtl" class="p-5">

      <a target="_blank" href="/vdo/آش%20دوغ%20محلی-2%20اردیبهشت.mp4"
         class="mb-5 pl-lg-2 m-lg-5 d-flex justify-content-between"
         style="border:1px solid  red ; border-radius: 20px;">

        <div class="row">
          <div class="col-3 col-lg-1 h-100">
            <div class="d-grid h-100">
              <div class="" style="color:red; font-size:100px; align-self: center; height: 200px">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
                     class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-9 col-lg-11 row flex-row-reverse">
            <div class="col-lg-8 d-grid">
              <img class="img-fluid w-100 my-5" style="border-radius:15px; align-self: center"
                   src="/img/web 570 in 320-min.jpg"/>
            </div>
            <div class="col-lg-4 reS" style="" dir="ltr">
              <h3 class="mt-lg-5 text-end">Local buttermilk soup</h3>
              <p class="text-end">
                ingredients:
                <br>
                Joe Elite 2 packs
                <br>
                Buttermilk without gas 1 liter
                <br>
                2 liters of water
                <br>
                Coriander and parsley 250 grams
                <br>
                Tomato juice 1 glass
                <br>
                1 cup cooked lentils
                <br>
                1 cup cooked chickpeas
                <br>
                Barberry 3 tablespoons
                <br>
                3 tablespoons of hot onion
                <br>
                Curd 2 tablespoons
              </p>
              <p>
                How to prepare:
                <br>
                Pour buttermilk, water, coriander and parsley, tomato juice, lentils, peas, barberry, onion and curd into
                the pot. Then, we mix 2 packets of elite barley soup with one liter of cold water, and add it to other
                ingredients. Our delicious buttermilk soup is ready.
              </p>
            </div>
          </div>
        </div>
      </a> <a target="_blank" href="/vdo/سالاد%20نودالیت%20کریسپی.mp4"
              class="mb-5 pl-lg-2 m-lg-5 d-flex justify-content-between"
              style="border:1px solid  red ; border-radius: 20px;">

      <div class="row">
        <div class="col-3 col-lg-1 h-100">
          <div class="d-grid h-100">
            <div class="" style="color:red; font-size:100px; align-self: center; height: 200px">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
                   class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="col-9 col-lg-11 row flex-row-reverse">
          <div class="col-lg-8 d-grid">
            <img class="img-fluid w-100 my-5" style="border-radius:15px; align-self: center"
                 src="/img/web 570 in 320 noodle-min.jpg"/>
          </div>
          <div class="col-lg-4 reS" style=""  dir="ltr">
            <h3 class="mt-lg-5 text-end">Crispy Noodelite Salad</h3>
            <p class="text-end">
              ingredients:
              <br>
              Noodelite chicken 2 packs
              <br>
              Canned tuna 1 pc
              <br>
              3 grated carrots
              <br>
              Mustard yogurt 150 grams
              <br>
              2 eggs
              <br>
              1 lemon
              <br>
              3 chopped onions
              <br>
              1 chopped lettuce
              <br>
              Mustard sauce 2 tablespoons
              <br>
              Red bell pepper as desired
            </p>
            <p class="text-end">

              How to prepare:
              <br>
              We fry the Noodelite, to prepare the sauce, we mix chopped onions, mustard sauce, lime, nodalite
              seasoning,
              tuna fish and eggs (cooked for 3 minutes). Take the crispy nodalite oil using a paper towel and let it
              cool.
              Then add carrot, lettuce, bell pepper to the sauce and at the end mix the chilled nodalite crispy with it.
              Our delicious crispy Noodelite salad is ready.
            </p>
          </div>
        </div>
      </div>
    </a>

    </div>

    <the-footer/>
  </div>
</template>

<script>
import homeSlider from "@/components/en/homeSlider";
import theFooter from "@/components/en/Footer";
import theMenu from "@/components/en/Menu";
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
      data: computed(() => store.state.recipeCats),
    }
  }
}
</script>

<style scoped>
.reS p {
  text-align: justify;
  font-size: 14px;
}
</style>