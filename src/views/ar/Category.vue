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
         class="mb-5 pl-lg-2 m-lg-5 d-flex justify-content-between" style="border:1px solid  red ; border-radius: 20px;">

        <div class="row">
          <div class="col-3 col-lg-1 h-100">
            <div class="d-grid h-100">
              <div class="" style="color:red; font-size:100px; align-self: center; height: 200px">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-9 col-lg-11 row flex-row-reverse">
            <div class="col-lg-8 d-grid">
              <img class="img-fluid w-100 my-5" style="border-radius:15px; align-self: center" src="/img/web 570 in 320-min.jpg"/>
            </div>
            <div class="col-lg-4 reS" style="">
            <h3 class="mt-lg-5">آش دوغ محلی</h3>
            <p>
              مواد لازم:
              <br>
              سوپ جو الیت ۲ بسته
              <br>
              دوغ بدون گاز ۱ لیتر
              <br>
              آب ۲ لیتر
              <br>
              گشنیز و جعفری ۲۵۰ گرم
              <br>
              آب گوجه فرنگی ۱ لیوان
              <br>
              عدس پخته ۱ پیمانه
              <br>
              نخود پخته ۱ پیمانه
              <br>
              زرشک ۳ قاشق غذاخوری
              <br>
              پیاز داغ ۳ قاشق غذاخوری
              <br>
              کشک ۲ قاشق غذاخوری
            </p>
            <p>
              طرز تهیه:
              <br>
              دوغ، آب، گشنیز و جعفری، آب گوجه فرنگی، عدس، نخود، زرشک، پیازداغ و کشک رو داخل قابلمه می‌ریزیم.
              سپس ۲ بسته سوپ جو الیت رو با یک لیتر آب سرد مخلوط، و به سایر مواد اضافه می‌کنیم.
              آش دوغ خوشمزه ما آماده است
            </p>
          </div>
          </div>
        </div>
      </a>  <a target="_blank" href="/vdo/سالاد%20نودالیت%20کریسپی.mp4"
         class="mb-5 pl-lg-2 m-lg-5 d-flex justify-content-between" style="border:1px solid  red ; border-radius: 20px;">

        <div class="row">
          <div class="col-3 col-lg-1 h-100">
            <div class="d-grid h-100">
              <div class="" style="color:red; font-size:100px; align-self: center; height: 200px">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-9 col-lg-11 row flex-row-reverse">
            <div class="col-lg-8 d-grid">
              <img class="img-fluid w-100 my-5" style="border-radius:15px; align-self: center" src="/img/web 570 in 320 noodle-min.jpg"/>
            </div>
            <div class="col-lg-4 reS" style="">
            <h3 class="mt-lg-5">سالاد نودالیت کریسپی</h3>
            <p>
              مواد لازم:
              <br>
              نودالیت مرغ ۲ بسته
              <br>
              کنسرو‌ ماهی تن ۱ عدد
              <br>
              هويج رنده‌شده ۳ عدد
              <br>
              ماست موسير ١٥٠ گرم
              <br>
              تخم مرغ ۲ عدد
              <br>
              ليمو 1 عدد
              <br>
              پيازچه خردشده۳ عدد
              <br>
              كاهو خردشده ۱ عدد
              <br>
              سس خردل۲ قاشق غذاخوری
              <br>
              فلفل دلمه‌ای قرمز به میزان دلخواه
            </p>
            <p>

              طرز تهیه:
              <br>
              نودالیت‌ها رو سرخ می‌کنیم، برای تهیه سس، پیازچه‌های خردشده، سس خردل، لیمو ترش، چاشنی نودالیت، ماهی تن و
              تخم مرغ (3 دقیقه پخته شده) رو مخلوط می‌کنیم.
              روغن نودالیت کریسپی‌شده رو با استفاده از دستمال کاغذی گرفته و می‌گذاریم سرد شود.
              سپس هویج، کاهو، فلفل دلمه‌ای رو به سس اضافه کرده و در پایان نودالیت کریسپی سردشده را با آن مخلوط می‌کنیم.
              سالاد نودالیت کریسپی خوشمزه ما آماده‌ است.
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
.reS p{
  text-align: justify;
  font-size: 14px;
}
</style>