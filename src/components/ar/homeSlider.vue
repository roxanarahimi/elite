<template>
  <div class="homeSlider">
    <div class="d-none d-lg-block">
      <Carousel :itemsToShow="1.9" :wrapAround="true" :transition="500">
        <slide v-for="(slide,index) in images" :key="index">
          <img :src="slide.image" style="max-width: 970px">
          <div style=" position: absolute; top: 200px;">
            <div style="position: relative;">
              <div class="titleBack"></div>
              <h1 class="mx-4" style="position: relative"
                  :class="{ 'foodSlideTitle0': index===0, 'foodSlideTitle': index !==0, }">{{ slide.text }}</h1>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation/>
          <pagination/>
        </template>
      </carousel>
    </div>
    <div class="d-lg-none">
      <Carousel :itemsToShow="1" :wrapAround="true" :autoplay="3000" :transition="500">
        <slide v-for="(slide,index) in images" :key="index" style="">
          <img class="img-fluid" :src="slide.image" style="max-width: 100% ;">
        </slide>

        <template #addons>
          <navigation/>
          <pagination/>
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

export default {
  name: 'HomeSlider',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [
        {"image": "/img/R3.png", "text": "وجبة كاملة في 3 دقائق"},
        {"image": "/img/R2.png", "text": "صحية وقلبية للجميع"},
        {"image": "/img/R1.png", "text": "صحية  لذيذة اقتصادية"},

      ]
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


:deep( .carousel__slide) {

  z-index: 1 !important;
}

:deep( .carousel) {
  margin-bottom: 100px !important;
}

:deep(.carousel__viewport) {
  height: 500px !important;
}

:deep(.carousel__slide) {
  height: 350px !important;
  transition: 0.5s ease;

}

:deep(.carousel__slide .carousel__slide--visible .carousel__slide--active) {
  z-index: 1 !important;
}

:deep(.carousel__slide--prev),
:deep(.carousel__slide--next),
:deep(.carousel__slide--prev::before),
:deep(.carousel__slide--next::before),
:deep(.carousel__slide--prev::after),
:deep(.carousel__slide--next::after) {
  height: 100px !important;
  transition: 0.5s ease;
  transform: scale(0.67, 0.59) !important;
  margin-top: 180px !important;
  margin-bottom: 150px !important;
  z-index: 0 !important;
  opacity: 0.5 !important;
}


:deep(.carousel__pagination-button) {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  margin: 5px !important;
  background: gray !important;
}


:deep(.carousel__pagination-button:hover::after),
:deep( .carousel__pagination-button--active::after),
:deep(.carousel__pagination-button:hover),
:deep(.carousel__pagination-button--active) {
  background-color: red !important;
}

:deep(.carousel__pagination-button::after ) {
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

:deep(.foodSlideTitle) {

  font-family: 'BYekan';
  font-width: bolder;
  text-shadow: 2px 2px 5px white;
  font-size: 50px;
}

:deep(.foodSlideTitle0) {

  color: white;
  text-shadow: 2px 2px 5px black;
  font-family: 'BYekan';
  font-width: bolder;
  font-size: 50px;
}

:deep(.titleBack) {
  border-radius: 50px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  display: block;
  backdrop-filter: blur(20px) !important;
}

@media (min-width: 1300px) {
  :deep( .carousel__prev) {
    left: 250px !important;
  }

  :deep(.carousel__next) {
    right: 250px !important;

  }

}

@media (max-width: 991px) {
  :deep(.carousel__viewport) {
    max-height: 350px !important;
  }
}

@media (max-width: 700px) {
  :deep(.carousel__viewport) {
    max-height: 250px !important;
  }
}

</style>