<template>

  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

    <div class="container-fluid p-0">
      <div class="nav d-flex justify-content-center">
        <router-link class="logo d-block" to="/"><img src="/img/Layer%2023.png" class="me-3 me-lg-5 img-fluid"
                                                      width="150" alt=""></router-link>
        <nav class="bg-main rounded rounded-pill navbar mt-3" style="height: 50px; width: 75%">
          <div class="menu-main-menu-container">
            <ul id="menu-main-menu" class="menu">
              <li id="menu-item-61"
                  class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-61">
                <a href="/" aria-current="page">خانه</a>
              </li>
              <li id="menu-item-136" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-136">
                <router-link to="/products">محصولات</router-link>
              </li>
              <li id="menu-item-105" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-105">
                <router-link to="/categories">دستور پخت</router-link>
              </li>
              <li id="menu-item-103" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
                <router-link to="/about">درباره الیت</router-link>
              </li>
              <li id="menu-item-104" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
                <router-link to="/contact">تماس با ما</router-link>
              </li>


              <li id="menu-item-138" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-138">
                <a href="https://digikala.com/search/?brands%5B0%5D=7630&q=Elite" target="_blank">خرید اینترنتی</a>
              </li>
              <li id="menu-item-139" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-139">
                <router-link to="/search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       class="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>


      </div>
    </div>

    <div class="px-5 mt-5">
      <div class="px-5 mt-5">

      </div>
    </div>


    <div class='d-flex jusify-content-center text-center mt-5'>

      <div class="row justify-content-start mx-auto px-5">
        <div v-for="item in data" :key="item.id" class="col-lg-4 mb-3 px-5">
          <router-link :to="'/recipe/'+item.id" class="bg-gray2 p-4 h-100" style="border-radius: 20px">
            <img :src="'https://panel.elit.webagent.ir'+item.image" class="w-100 rounded" alt="">
            <h2 class="mt-4">

              {{ item.title }}
            </h2>
          </router-link>
        </div>
      </div>

    </div>

    <div class="w-100 d-flex justify-content-center my-3">

      <!--    <?php $args = array('prev_next'=>false) ?>-->
      <!--<small><?php previous_posts_link(); ?></small>-->
      <!--    <?php echo paginate_links($args); ?>-->
      <!--<small><?php next_posts_link(); ?></small>-->

    </div>

    <the-footer/>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import theFooter from "@/components/Footer";

export default {
  components: {theFooter},
  name: "Posts",
  setup() {
    const data = ref([]);
    const route = useRoute();
    onMounted(() => {
      axios.get('https://panel.elit.webagent.ir/api/article/by/category/' + route.params.id)
          .then((response) => {
            data.value = response.data.data;
            console.log(data.value);

          }).catch();
    });

    return {
      data, route,
    }
  }
}
</script>

<style scoped>

</style>