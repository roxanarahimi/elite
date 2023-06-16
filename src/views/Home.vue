<template>

 <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">
   <div class="container-fluid m-0 p-0">
     <div class="p-3 ps-4"
          style="z-index:20000; box-shadow:  0.3px 0.3px white; width: 80px; height: 60px; border-radius: 0 50rem 50rem 0; background-color: red; position: fixed; top:250px; left: 0; color: white;">
       <a class="text-light" href="https://www.instagram.com/manoelite" target="_blank">
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram"
              viewBox="0 0 16 16">
           <path
               d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
         </svg>
       </a>
     </div>
     <div class="parallax1" style="overflow-x: hidden !important;">

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


       <div class="row p-0 m-0 " style="overflow: hidden !important;">
         <div class="col-12" style="font-weight: bold">
           <h1 class="s-1 pt-5 pt-lg-0">ســالـــم</h1>
           <h1 class="s-2">خــوشـمزه</h1>
           <h1 class="s-3">اقـتصادی</h1>
         </div>
       </div>


     </div>
     <div class="bottomNav pt-4 " >
       <div class="bottomNavInner d-flex justify-content-around rounded-pill pt-3 px-3 w-100 mx-auto">
         <!--        :to="{ path: '/products', params: {cat}, query: { cat:  1}} "-->
         <router-link  to="/products#noodelite">
           <img src="/img/Vector%20Smart%20Object-3.png" class="img1" alt="">
           <p>نودالیت</p>
         </router-link>
         <router-link to="/products#soup">
           <img src="/img/Vector%20Smart%20Object-2.png" class="img2" alt="">
           <p>سوپ</p>
         </router-link>
         <router-link to="/products#pasta">
           <img src="/img/Vector%20Smart%20Object-1.png" class="img3" alt="">
           <p>آش و پاستا</p>

         </router-link>
         <router-link to="/products#seasoning">
           <img src="/img/Vector%20Smart%20Object.png" class="img4" alt="">
           <p>چاشنی و ادویه</p>
         </router-link>
         <router-link to="/products#bouillon">
           <img src="/img/Vector%20Smart%20Object1.png" class="mt-2 mb-1 mb-lg-0 mt-lg-4 img5" alt="">
           <p>عصاره</p>
         </router-link>

       </div>
     </div>

   </div>
   <div class="container-fluid p-0 m-0">
     <div class="parallax2">

       <img src="img/Leaf.png" class="fly1" alt="">
       <img src="img/Leaf copy.png" class="fly2" alt="">
       <img src="img/Tomato.png" class="fly3" alt="">
       <img src="img/Pasta.png" class="fly4" alt="">


       <div class="d-flex justify-content-between">
         <img src="/img/Layer%201.png" class="food1" alt="">
         <div class="text-light pt-5 px-3  foodtxt">
           <h1 class="mt-5 fw-bold ">
             محصولات الیت
           </h1>
           <p class="foodp" style="">
             محصولات الیت به شما کمک میکند یک آشپزی راحت را تجربه کنید.
             <br>
             همچنین به طعم و عطر غذای شما بهبود می بخشدو شما را به یک
             آشپز حرفه ای تبدیل می کند.
           </p>
         </div>

       </div>
       <div class="d-flex justify-content-between">
         <img src="/img/Layer%204.png" style="" class="food2" width="800" height="800" alt="">
         <img src="/img/Layer%202.png" style="" class="food3" width="500" height="475" alt="">
       </div>
     </div>
   </div>


   <div class="py-5 text-center fw-bold" style="overflow-x: hidden !important;">

     <h3 style="font-family:IranSansBold ;font-size:35px">آشپزی با الیت</h3>

     <p class="fw-bold txtxx" style="font-size:25px">
       اگر به آشپزی علاقه دارید به رسپی های زیر سر بزنید
     </p>


     <div class="px-lg-5 m-0 w-100">
       <div class="d-flex justify-content-center px-3 px-lg-5" style="">

         <a href="/recipe/5" style="width: 20%" class="">
           <img src="img/11.png" width="100%" alt="">
         </a>
         <a href="/recipe/4" style="display:grid; width: 20%" class="element bg-gray2">
           <p class="precepy" style="align-self: center">سوپ جوجه چینی</p>
           <div class="hoverElement w-100 h-100 bg-white d-grid">
             <img class="img-fluid mx-auto" src="/img/0010.png" style="max-height: 60%; align-self: center" alt="">
           </div>

         </a>
         <a href="/recipe/3" style=" width: 20%" class="">
           <img src="img/13.png" width="100%" alt="">
         </a>
         <a href="/recipe/2" style="display:grid; width: 20%" class="element bg-gray2">
           <p class="precepy" style=" align-self: center;">سوپ قارچ</p>
           <div class="hoverElement w-100 h-100 bg-white d-grid" >
             <img class="img-fluid mx-auto" src="/img/sop02.png" style="max-height: 60%; align-self: center" alt="">
           </div>
         </a>
         <a href="/recipe/1" style="width: 20%" class="">
           <img src="img/15.png" width="100%" alt="">
         </a>
       </div>
       <div class="d-flex justify-content-center  px-3 px-lg-5">
         <a href="/recipe/5" style="display:grid; width: 20%" class="element bg-gray2">
           <p class="precepy" style=" align-self: center;">مرغ طالشی</p>
           <div class="hoverElement w-100 h-100 bg-white d-grid">
             <img class="img-fluid mx-auto" src="/img/osareh10.png" style="max-height: 80%;  align-self: center" alt="">
           </div>
         </a>
         <a href="/recipe/4" style="width: 20%" class="">
           <img src="img/12.png" width="100%" alt="">
         </a>
         <a href="/recipe/3" style="display:grid; width: 20%" class="element bg-gray2">
           <p class="precepy" style=" align-self: center;">خوراک میگو با سس</p>
           <div class="hoverElement w-100 h-100 bg-white d-grid">
             <img class="img-fluid mx-auto" src="/img/osareh03.png" style="max-height: 80%; align-self: center" alt="">
           </div>
         </a>
         <a href="/recipe/2" style="width: 20%" class="">
           <img src="img/14.png" width="100%" alt="">
         </a>
         <a href="/recipe/1" style="display:grid; width: 20%" class="element bg-gray2">
           <p class="precepy" style=" align-self: center;">ماهی شوریده شکم پر</p>
           <div class="hoverElement w-100 h-100 bg-white d-grid ">
             <img class="img-fluid mx-auto" src="/img/osareh10.png" style="max-height: 80%; align-self: center" alt="">
           </div>

         </a>
       </div>

     </div>
   </div>

   <div class="py-5 text-center fw-bold w-100">
     <h3 style="font-family:IranSansBold">لذت آشپزی با محصولات الیت</h3>

     <div class="p-0 m-0" style="overflow-x: hidden !important;">
       <home-slider/>

     </div>
   </div>



   <the-footer/>
 </div>

</template>

<script>
import homeSlider from "@/components/homeSlider";
import theFooter from "@/components/Footer";

export default {
  name: 'Home',
  components: {homeSlider, theFooter}

}
</script>
<style>
.element {
  position: relative;
}

.hoverElement {
  opacity: 0;
  transition: 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
}

.element:hover .hoverElement {
  opacity: 1;
}


</style>