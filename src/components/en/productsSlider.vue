<template>
  <div v-if="oneRowMode" class="px-5">
    <div class="d-none d-lg-block productSlider mb-5">
      <Carousel class="" :itemsToShow="5.0" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'"
                :transition="500">
        <slide v-for="(item,index) in data2" :key="index">
          <div class="w-100 h-100" style="margin: 1px">
            <div class="w-100 h-100">
              <router-link :to="'/product/'+item.id" class="bg-gray3" style=" border-radius: 30px;overflow: hidden;">
                <div class="slideContainer" style="position: relative">

                  <div class="w-100 d-grid h-100" style="min-height: 260px !important">
                    <img v-if="panelUrl+item.image" style="align-self:center !important;"
                         :src="panelUrl+item.image" class="mx-auto  rounded img-fluid w-75"
                         :class="{'my-5': catId==3}" alt="">
                  </div>
                  <div class="slideTitle text-light text-center ">
                    <h3>
                      {{ item.title_en }}
                    </h3>

                  </div>
                </div>

              </router-link>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation/>
          <!--          <pagination />-->
        </template>
      </carousel>
    </div>
    <div class="d-none d-sm-block d-lg-none productSlider mb-5">
      <Carousel class="" :itemsToShow="3.0" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'"
                :transition="500">
        <slide v-for="(item,index) in data2" :key="index">
          <div class="w-100 h-100" style="margin: 1px">
            <div class="w-100 h-100">
              <router-link :to="'/product/'+item.id" class="bg-gray3" style=" border-radius: 30px;overflow: hidden;">
                <div class="slideContainer" style="position: relative">

                  <div class="w-100 d-grid h-100" style="min-height: 260px !important">
                    <img v-if="panelUrl+item.image" style="align-self:center !important;"
                         :src="panelUrl+item.image" class="mx-auto  rounded img-fluid w-75"
                         :class="{'my-5': catId==3}" alt="">
                  </div>
                  <div class="slideTitle text-light text-center ">
                    <h3>
                      {{ item.title_en }}
                    </h3>

                  </div>
                </div>

              </router-link>
            </div>
          </div>
        </slide>


        <template #addons>
          <navigation/>
          <!--          <pagination />-->
        </template>
      </carousel>
    </div>
    <div class="d-sm-none productSlider mb-5">
      <Carousel class="" :itemsToShow="1.0" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'"
                :transition="500">
        <slide v-for="(item,index) in data2" :key="index">
          <div class="w-100 h-100" style="margin: 1px">
            <div class="w-100 h-100">
              <router-link :to="'/product/'+item.id" class="bg-gray3" style=" border-radius: 30px;overflow: hidden;">
                <div class="slideContainer" style="position: relative">

                  <div class="w-100 d-grid h-100" style="min-height: 260px !important">
                    <img v-if="panelUrl+item.image" style="align-self:center !important;"
                         :src="panelUrl+item.image" class="mx-auto  rounded img-fluid w-75"
                         :class="{'my-5': catId==3}" alt="">
                  </div>
                  <div class="slideTitle text-light text-center ">
                    <h3>
                      {{ item.title_en }}
                    </h3>

                  </div>
                </div>

              </router-link>
            </div>
          </div>
        </slide>


        <template #addons>
          <navigation/>
          <!--          <pagination />-->
        </template>
      </carousel>
    </div>
  </div>

  <div v-else class="px-5">
    <div class="d-none d-lg-block productSlider mb-5">
      <Carousel class="" :itemsToShow="5.0" :wrapAround="false" :transition="500">
        <slide v-for="(item,index) in data" :key="index">
          <div class="w-100 h-100" style="margin: 1px">
            <div class="w-100 h-50" style="margin: 1px">
              <div class="w-100 h-100">              <!--              :class="{'bg-gray2': index%2 === 0, 'bg-main': index%2 === 1}"-->
              <router-link :to="'/product/'+item[0].id" class="bg-gray3" style=" border-radius: 30px;overflow: hidden;">
                <div class="slideContainer" style="position: relative;">
                  <div class="w-100 justify-content-center"
                       style="min-height: 280px !important ; display: grid !important;">
                    <img style=" align-self: center !important; alignment: center !important; width: 60%;"
                         v-if="panelUrl+item[0].image"
                         :src="panelUrl+item[0].image" class=" rounded img-fluid mx-auto"
                         :class="{'my-5': catId==3}" alt="">
                  </div>
                  <div class="slideTitle text-light text-center ">
                    <h3>
                      {{ item[0].title_en }}
                    </h3>

                  </div>
                </div>

              </router-link>
            </div>
            </div>
            <div v-if="item[1].length != 0" class="w-100 h-50" style="margin: 1px">
              <div class="w-100 h-100">
              <!--              :class="{'bg-main': index%2 === 0, 'bg-gray2': index%2 === 1}"-->
              <router-link :to="'/product/'+item[1].id" class="bg-gray3" style="  border-radius: 30px;overflow: hidden;">
                <div class="slideContainer " style="position: relative;">

                  <div class="w-100 justify-content-center"
                       style="height: 280px !important ; display: grid !important;">
                    <img style=" align-self: center !important; margin: 0 auto !important;width: 60%;"
                         v-if="panelUrl+item[1].image"
                         :src="panelUrl+item[1].image" class=" rounded img-fluid mx-auto"
                         :class="{'my-5': catId==3}" alt="">
                  </div>
                  <div class="slideTitle text-light text-center ">
                    <h3>
                      {{ item[1].title_en }}
                    </h3>

                  </div>
                </div>

              </router-link>

            </div>
            </div>
            <div v-else class="w-100 h-50" style="margin: 1px">
              <div class="w-100 h-100">
              <div  style="  border-radius: 30px;overflow: hidden;" class="bg-gray3">
                <div class="slideContainer " style="position: relative;">

                  <div class="w-100 justify-content-center"
                       style="height: 280px !important ; display: grid !important;">
                  </div>
                </div>

              </div>

            </div>
            </div>
          </div>
        </slide>


        <template #addons>
          <navigation/>
          <!--          <pagination />-->
        </template>
      </carousel>
    </div>
    <div class="d-none d-sm-block d-lg-none productSlider mb-5">
      <Carousel class="" :itemsToShow="3.0" :wrapAround="false" :transition="500">
        <slide v-for="(item,index) in data" :key="index">
          <div class="w-100 h-100" style="margin: 1px">
            <div class="w-100 h-50" style="margin: 1px">
              <div class="w-100 h-100">              <!--              :class="{'bg-gray2': index%2 === 0, 'bg-main': index%2 === 1}"-->
                <router-link :to="'/product/'+item[0].id" class="bg-gray3" style=" border-radius: 30px;overflow: hidden;">
                  <div class="slideContainer" style="position: relative;">
                    <div class="w-100 justify-content-center"
                         style="min-height: 280px !important ; display: grid !important;">
                      <img style=" align-self: center !important; alignment: center !important; width: 60%;"
                           v-if="panelUrl+item[0].image"
                           :src="panelUrl+item[0].image" class=" rounded img-fluid mx-auto"
                           :class="{'my-5': catId==3}" alt="">
                    </div>
                    <div class="slideTitle text-light text-center ">
                      <h3>
                        {{ item[0].title_en }}
                      </h3>

                    </div>
                  </div>

                </router-link>
              </div>
            </div>
            <div v-if="item[1].length != 0" class="w-100 h-50" style="margin: 1px">
              <div class="w-100 h-100">
                <!--              :class="{'bg-main': index%2 === 0, 'bg-gray2': index%2 === 1}"-->
                <router-link :to="'/product/'+item[1].id" class="bg-gray3" style="  border-radius: 30px;overflow: hidden;">
                  <div class="slideContainer " style="position: relative;">

                    <div class="w-100 justify-content-center"
                         style="height: 280px !important ; display: grid !important;">
                      <img style=" align-self: center !important; margin: 0 auto !important;width: 60%;"
                           v-if="panelUrl+item[1].image"
                           :src="panelUrl+item[1].image" class=" rounded img-fluid mx-auto"
                           :class="{'my-5': catId==3}" alt="">
                    </div>
                    <div class="slideTitle text-light text-center ">
                      <h3>
                        {{ item[1].title_en }}
                      </h3>

                    </div>
                  </div>

                </router-link>

              </div>
            </div>
            <div v-else class="w-100 h-50" style="margin: 1px">
              <div class="w-100 h-100">
                <div  style="  border-radius: 30px;overflow: hidden;" class="bg-gray3">
                  <div class="slideContainer " style="position: relative;">

                    <div class="w-100 justify-content-center"
                         style="height: 280px !important ; display: grid !important;">
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </slide>


        <template #addons>
          <navigation/>
          <!--          <pagination />-->
        </template>
      </carousel>
    </div>
    <div class="d-sm-none productSlider mb-5">
      <Carousel class="" :itemsToShow="1.0" :wrapAround="false" :transition="500">
        <slide v-for="(item,index) in data" :key="index">
          <div class="w-100 h-100" style="margin: 1px">
            <div class="w-100 h-50" style="margin: 1px">
              <div class="w-100 h-100">              <!--              :class="{'bg-gray2': index%2 === 0, 'bg-main': index%2 === 1}"-->
                <router-link :to="'/product/'+item[0].id" class="bg-gray3" style=" border-radius: 30px;overflow: hidden;">
                  <div class="slideContainer" style="position: relative;">
                    <div class="w-100 justify-content-center"
                         style="min-height: 280px !important ; display: grid !important;">
                      <img style=" align-self: center !important; alignment: center !important; width: 60%;"
                           v-if="panelUrl+item[0].image"
                           :src="panelUrl+item[0].image" class=" rounded img-fluid mx-auto"
                           :class="{'my-5': catId==3}" alt="">
                    </div>
                    <div class="slideTitle text-light text-center ">
                      <h3>
                        {{ item[0].title_en }}
                      </h3>

                    </div>
                  </div>

                </router-link>
              </div>
            </div>
            <div v-if="item[1].length != 0" class="w-100 h-50" style="margin: 1px">
              <div class="w-100 h-100">
                <!--              :class="{'bg-main': index%2 === 0, 'bg-gray2': index%2 === 1}"-->
                <router-link :to="'/product/'+item[1].id" class="bg-gray3" style="  border-radius: 30px;overflow: hidden;">
                  <div class="slideContainer " style="position: relative;">

                    <div class="w-100 justify-content-center"
                         style="height: 280px !important ; display: grid !important;">
                      <img style=" align-self: center !important; margin: 0 auto !important;width: 60%;"
                           v-if="panelUrl+item[1].image"
                           :src="panelUrl+item[1].image" class=" rounded img-fluid mx-auto"
                           :class="{'my-5': catId==3}" alt="">
                    </div>
                    <div class="slideTitle text-light text-center ">
                      <h3>
                        {{ item[1].title_en }}
                      </h3>

                    </div>
                  </div>

                </router-link>

              </div>
            </div>
            <div v-else class="w-100 h-50" style="margin: 1px">
              <div class="w-100 h-100">
                <div  style="  border-radius: 30px;overflow: hidden;" class="bg-gray3">
                  <div class="slideContainer " style="position: relative;">

                    <div class="w-100 justify-content-center"
                         style="height: 280px !important ; display: grid !important;">
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </slide>


        <template #addons>
          <navigation/>
          <!--          <pagination />-->
        </template>
      </carousel>
    </div>
  </div>

</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: 'ProductsSlider',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: ['catId', 'oneRowMode'],
  setup(_props) {

    const data = ref([]);
    const data2 = ref([]);
    const store = useStore();
    const panelUrl = store.state.panelUrl;
    const getData = () => {
      // axios.get('http://127.0.0.1:8000/api/product/by/category/' + _props.catId)
      axios.get(panelUrl+'/api/product/by/category/' + _props.catId)
          .then((response) => {
            data.value = response.data.data;
            data2.value = response.data.data2;
          })
          .catch();
    }
    onMounted(() => {
      getData();


    });
    return {
      getData, data,data2, store, panelUrl,
    }
  }
}
</script>

<style scoped>

:deep(.page-numbers) {
  display: block;
  padding: 5px 15px !important;
  border: 1px solid lightgray;
  border-radius: 2px;
  margin: 1px;

}

:deep(.page-numbers.current) {
  background-color: lightblue;
  color: white;

}


:deep(.carousel__slide) {

  z-index: 1 !important;
}

:deep(.carousel) {
  /*margin-bottom: 100px !important;*/
}

:deep(.carousel__viewport) {
  /*height: 500px !important;*/
}

:deep(.carousel__slide) {
  /*height: 350px !important;*/
  transition: 0.5s ease;

}

:deep(.carousel__slide .carousel__slide--visible .carousel__slide--active) {
  z-index: 1 !important;
}

:deep(.carousel__pagination-button) {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  margin: 5px !important;
  background: gray !important;
}


:deep(.carousel__pagination-button:hover::after),
:deep(.carousel__pagination-button--active::after),
:deep(.carousel__pagination-button:hover),
:deep(.carousel__pagination-button--active) {
  background-color: red !important;
}

:deep(.carousel__pagination-button::after) {
  display: block;
  content: none !important;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray !important;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  cursor: pointer;
  background-color: red !important;
  color: white !important;
  border-radius: 50% !important;
}

:deep(.carousel__prev) {
  left: -30px !important;
  top: calc(50% - 7px) !important;
}

:deep(.carousel__next ) {
  right: -30px !important;
  top: calc(50% - 7px) !important;

}

:deep(.slideTitle) {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.29);
  border-radius: 0 0 30px 30px;
  height: 90px;
  display: grid;


  opacity: 0;
  transition: 0.5s ease;

}

:deep(.slideContainer) {
  height: 100% !important;
}

:deep(.slideTitle h3){
  align-self: center;
  margin: 5px !important;
}

:deep(.slideContainer:hover .slideTitle) {
  opacity: 1;
}


:deep(.bg-gray3) {
  background-color: whitesmoke;
  margin: 2px;
  width: 100% !important;
  height: 100% !important;
}
</style>