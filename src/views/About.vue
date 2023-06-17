<template>
  <div class="container-fluid p-0 m-0" style="overflow-x: hidden !important">

  <div class="container-fluid p-0">
    <the-menu />

  </div>


  <div class="row px-5" style="  font-size: 25px; text-align: justify; height: calc(100vh - 525px)">
    <p class="about mt-5 pt-lg-5 px-lg-5 ">
      برند الیت در سال 1384 به ثبت رسید و برند اصلی شرکت آماده لذیذ است عصاره،نودالیت و سوپ‌های نیمه آماده جزو اولین
      محصولات تولید شده توسط الیت می باشند
      محصولات الیت با تمرکز بر کیفیت و سلامت خانواده ها و تحت به روز ترین استاندارد های مواد غذایی دنیا تولید می شود
      از آنجایی که سلامت مصرف کنندگان، همواره در راس مسئولیت‌های الیت قرار دارد، در ترکیب غذاهای نیمه آماده الیت هیچگونه
      مواد نگهدارنده وجود ندارد و تنها بواسطه‌ی نمک موجود در ترکیب آنها از رشد باکتریها و فساد مواد غذایی جلوگیری می‌شود
    </p>
  </div>

  <the-footer />
  </div>
</template>
<script>
import theFooter from "@/components/Footer";
import theMenu from "@/components/Menu"
export default {
  components: { theFooter, theMenu }
}
</script>