<template>
  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

  <div :style="{ backgroundColor: data.color }" style=" width: 100%; height: 80px;"></div>

  <div class="container-fluid" v-if="data">

    <div class="row flex-row-reverse">
      <div class="col-xl-5 "  style="background: url('/img/Ellipse 2.png') no-repeat top left; background-size: 90%; min-height: 700px">

        <img :src="panelUrl+data.image"  class="img-fluid" style="width: 70% ; margin-top: 20%"
             alt="">
      </div>
      <div class="col-xl-7 pt-5">
        <div class="row">
          <div class="col-xl-6  mb-3">
            <div class="cube">
            </div>
            <div class="bg-gray rounded  p-4  ms-5 "
                 style="text-align: justify; border-radius: 20px !important;">

              <div class="d-flex justify-content-between mb-5">
                <p class="fw-bold mt-3" style=" text-align:  right">
                  ویژگی
                </p>
                <img src="/img/flash.png" width="100" height="50" style="margin-left: -28px" alt="">
              </div>

              <div>
                <p dir="ltr" style="font-size: 18px;white-space: pre-line; text-align: right !important">
                  {{ data.text }}
                </p>

              </div>


              <div class="mt-5  d-flex justify-content-between mb-5">
                <p class="fw-bold mt-3" style=" text-align:  right">
                  جدول ارزش غذایی در 100 گرم
                </p>
                <img src="/img/flash.png" width="100" height="50" style="margin-left: -28px" alt="">
              </div>
              <div>

                <table class="table table-borderless">
                  <tbody>
                  <tr v-for="item in features" :key="item.id">
                    <th class=" p-0">
                      <div class="rounded-start bg-light   mb-1 p-1">{{ item.label }}:</div>
                    </th>
                    <th class="text-center  p-0 ">
                      <div class=" bg-light  mb-1 p-1 ">({{ item.unit }})</div>
                    </th>
                    <th class=" text-center p-0 ">
                      <div class="rounded-end bg-light   mb-1 p-1">{{ item.value }}</div>
                    </th>

                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-xl-6 " style="display: grid">

            <div style="align-self: end;">
              <div dir="ltr">
                <h1 class="m-0" style="font-size: 70px; font-weight: bold; line-height: 60px">{{ data.title_en }}</h1>
                <h1 class="m-0 text-black-50" style="font-size: 70px; line-height: 60px">{{ data.subTitle }}</h1>
                <p class="mb-5" style="font-size: 30px; line-height: 30px">{{ data.flavor }}</p>
              </div>
              <div class="mb-3 rounded  text-center py-3 text-light" style=" border-radius: 20px !important;"
                   :style="{ backgroundColor: data.color }">
                <h3>{{ data.title }}</h3>
              </div>
              <div class="mb-3 rounded  text-center py-3 text-light" style=" border-radius: 20px !important; "
                   :style="{ backgroundColor: data.color }">
                <h3>{{ data.tag1 }}</h3>
              </div>
              <div class="mb-3 rounded  text-center py-3 text-light" style=" border-radius: 20px !important; "
                   :style="{ backgroundColor: data.color  }">
                <h3>{{ data.tag2 }}</h3>
              </div>
              <a :href="data.link" target="_blank" class="cart rounded text-center py-3  mb-3">
                <h3>خرید اینترنتی
                  <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                  </svg>
                </h3>
              </a>
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
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import { useStore} from 'vuex'
export default {
  name: "Product",
  setup() {
    const route = useRoute();
    const store = useStore();
    const panelUrl = store.state.panelUrl;
    const data = ref({});
    const features = ref([]);
    onMounted(() => {

      axios.get(panelUrl+'/api/product/' + route.params.id)
          .then((response) => {
            data.value = response.data.product;
            console.log(response.data);

          })
          .then(() => {
            if (data.value.features) {
              features.value = [];
              for (let i = 0; i < JSON.parse(data.value.features).length; i++) {
                features.value.push(JSON.parse(data.value.features)[i]);
              }
            }
          })
          .catch();
      store.commit('getProduct', route.params.id);
    });

    return {
      data,features, panelUrl,
      // data: computed(()=>store.state.product),
      // features: computed(()=>store.state.productFeatures),
      route, store
    }
  }

}
</script>
<style>

.cart{
  border-radius: 20px !important;
  cursor: pointer;

  transition: 0.5s ease;
}
.cart:hover{
  background-color: green;
  color: whitesmoke;
}
</style>