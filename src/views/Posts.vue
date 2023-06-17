<template>

  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

    <div class="container-fluid p-0">

      <the-menu />
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
import theMenu from "@/components/Menu";

export default {
  components: {theFooter, theMenu},
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