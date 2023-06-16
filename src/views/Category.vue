<template>
  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

  <div class="container-fluid p-0">
    <div class="nav d-flex justify-content-center" >
      <router-link class="logo d-block" to="/"><img src="/img/Layer%2023.png" class="me-3 me-lg-5 img-fluid" width="150" alt=""></router-link>
      <nav class="bg-main rounded rounded-pill navbar mt-3" style="height: 50px; width: 75%">
        <div class="menu-main-menu-container">
          <ul id="menu-main-menu" class="menu">
            <li id="menu-item-61" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-61">
              <a href="/" aria-current="page">خانه</a>
            </li>
            <li id="menu-item-136" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-136">
              <router-link to="/products">محصولات</router-link>
            </li>
            <li id="menu-item-105" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-105">
              <router-link to="/categories">دستور پخت</router-link>
            </li>
            <li id="menu-item-103" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
              <router-link  to="/about">درباره الیت</router-link>
            </li>
            <li id="menu-item-104" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
              <router-link to="/contact">تماس با ما</router-link>
            </li>


            <li id="menu-item-138" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-138">
              <a href="https://digikala.com/search/?brands%5B0%5D=7630&q=Elite" target="_blank">خرید اینترنتی</a>
            </li>
            <li id="menu-item-139" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-139">
              <router-link to="/search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </router-link>
            </li>
          </ul>
        </div>

      </nav>


    </div>

  </div>

  <home-slider />

  <div class='d-flex justify-content-center text-center mt-5'>

    <div class="row justify-content-start mx-auto px-5" >
      <div v-for="item in data" class="col-lg-4 px-5 mb-4">
        <router-link :to="'/posts/'+ item.id"  class="bg-gray2 p-4" style="border-radius: 20px">
          <img :src="'https://panel.elit.webagent.ir'+item.image" style="border-radius:30px" class="w-100" alt="">
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

export default {
  name: "posts",
  components: {
    theFooter,
  homeSlider
  },
  data() {
    return {
      data: [],

    }
  },
  mounted() {
    axios.get('https://panel.elit.webagent.ir/api/category/article' )
        .then((response) => {
          this.data = response.data;
          console.log(this.data);

        }).catch();
  }
}
</script>

<style scoped>

</style>