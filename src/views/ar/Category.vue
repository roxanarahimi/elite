<template>
  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

    <div class="container-fluid p-0">
      <the-menu/>

    </div>

    <home-slider/>

    <div class='d-flex justify-content-center text-center mt-5'>

      <div class="row justify-content-start mx-auto px-xl-5">
        <div v-for="item in data" class="col-lg-4 px-5 mb-4">
          <router-link :to="'/ar/posts/'+ item.id" class="bg-gray2 p-4" style="border-radius: 20px">
            <img :src="panelUrl+item.image" style="border-radius:30px" class="w-100" alt="">
            <h1 class="my-5 text-center">{{ item.title }}</h1>
          </router-link>
        </div>
      </div>


    </div>
    <div class="p-5">

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
            <div class="col-lg-4 reS" style="">
              <h3 class="mt-lg-5">حساء اللبن المحلي</h3>
              <p>
                المواد اللازمة:
                <br>
                حساء جو إيليت 2 حزم
                <br>
                لبن زبادي بدون غاز 1 لتر
                <br>
                2 لتر من الماء
                <br>
                كزبرة وبقدونس 250 جرام
                <br>
                عصير طماطم 1 كوب
                <br>
                1 كوب عدس مطبوخ
                <br>
                1 كوب حمص مطبوخ
                <br>
                برباريس 3 ملاعق كبيرة
                <br>
                3 ملاعق كبيرة من البصل الحار
                <br>
                خثارة 2 ملاعق كبيرة
              </p>
              <p>
                طريقة التحضير:
                <br>
                نسكب اللبن والماء والكزبرة والبقدونس وعصير الطماطم والعدس والبازلاء والبرباريس والبصل والكسترد في الوعاء
                ثم نخلط كيسين من حساء الشعير الفاخر إیلیت مع لتر واحد من الماء البارد ونضيفهما إلى المكونات الأخرى اللبن
                اللذيذ جاهز
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
          <div class="col-lg-4 reS" style="">
            <h3 class="mt-lg-5">سلطة نوداليت المقرمشة</h3>
            <p>
              المواد اللازمة:
              <br>
              نوداليت دجاج 2 علبة
              <br>
              تونة معلبة 1 قطعة
              <br>
              3 جزر مبشورة
              <br>
              خردل زبادي 150 جرام
              <br>
              2 بيضة
              <br>
              1 ليمون
              <br>
              3 بصل مفروم
              <br>
              1 خس مقطع
              <br>
              صلصة الخردل 2 ملعقة كبيرة
              <br>
              فلفل أحمر حسب الرغبة
            </p>
            <p>

              طريقة التحضير:
              <br>
              نقلي نودالیت، لتحضير الصلصة، نخلط البصل المفروم وصلصة الخردل والليمون وتوابل نودالیت والتونة والبيض
              (المطبوخة لمدة 3 دقائق)، ثم نضيف الجزر والخس والفلفل الحلو إلى الصلصة وأخيراً نخلط المقرمشة المبردة
              نودالیت معها.
              سلطة نودالیت المقرمشة اللذيذة جاهزة

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
import homeSlider from "@/components/ar/homeSlider";
import theFooter from "@/components/ar/Footer";
import theMenu from "@/components/ar/Menu";
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