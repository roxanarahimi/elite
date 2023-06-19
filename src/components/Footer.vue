<template>
  <footer class="">


    <div class="containerr">
      <div class="">


        <div class="row px-5 xo ">
          <div class="col-xl-6 row flex-row-reverse">
            <div class="col-sm-6 col-xl-6 px-3">
              <p class="text-center"><b>تماس با ما</b></p>

              <ul>
                <li class="d-flex">
            <span class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt"
                   viewBox="0 0 16 16">
                <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </span>
                  <small><a target="_blank"
                            href="https://www.google.com/maps/place/AmadehLaziz/@35.7302329,51.3807302,19z/data=!4m6!3m5!1s0x3f8e07d020c7ca45:0x43bf4c9a730015f3!8m2!3d35.7301399!4d51.3807224!16s%2Fg%2F11c1r04p2q">دفتر
                    مرکزی: تهران، خیابان گیشا، خیابان هشتم، پلاک 58</a></small>
                </li>
                <li class="d-flex">
            <span class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone"
                   viewBox="0 0 16 16">
                <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
           </span>

                  <small dir="ltr">
                    <a href="tel:+982141638699">+98 21 41638699</a>

                  </small>
                </li>
                <li class="d-flex mb-3">
            <span class="me-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-postcard"
                  viewBox="0 0 16 16">
  <path fill-rule="evenodd"
        d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"/>
</svg>
           </span>

                  <small dir="ltr" style="cursor: pointer;position: relative" @click="coppyCode">
                    کد پستی:

                    <span id="postalcode">
                      1446863914
                    </span>
                    <span id="coppyAlert">
                      کپی شد!
                    </span>
                  </small>
                </li>

                <li class="d-flex">
            <span class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt"
                   viewBox="0 0 16 16">
                <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </span>
                  <small><a target="_blank"
                            href="https://www.google.com/maps/place/Elite+company/@35.7533913,51.0211096,15.89z/data=!4m14!1m7!3m6!1s0x3f8deb414a374c79:0x43e1c8e22a05902e!2sElite+company!8m2!3d35.752755!4d51.02824!16s%2Fg%2F11csc8jgy6!3m5!1s0x3f8deb414a374c79:0x43e1c8e22a05902e!8m2!3d35.752755!4d51.02824!16s%2Fg%2F11csc8jgy6">کارخانه1:کرج،
                    سیمین دشت، نبش کوچه هشتم شرقی</a></small>
                </li>
                <li class="d-flex mb-3">
            <span class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone"
                   viewBox="0 0 16 16">
                <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
           </span>
                  <small dir="ltr">
                    <a href="tel:+982636613911"> +98 26 36613911</a>

                  </small>
                </li>

                <li class="d-flex">
            <span class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt"
                   viewBox="0 0 16 16">
                <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </span>
                  <small><a target="_blank"
                            href="https://www.google.com/maps/place/Amadeh+Laziz+Factory/@35.8900418,50.8912728,18.22z/data=!4m14!1m7!3m6!1s0x3f8dbb279b510219:0xa67fc687f7452e7f!2sAmadeh+Laziz+Factory!8m2!3d35.8901593!4d50.8927433!16s%2Fg%2F11j7yy56ks!3m5!1s0x3f8dbb279b510219:0xa67fc687f7452e7f!8m2!3d35.8901593!4d50.8927433!16s%2Fg%2F11j7yy56ks">کارخانه2:
                    کرج، شهرک صنعتی بهارستان، گلستان 3</a></small>
                </li>
                <li class="d-flex mb-3">
            <span class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone"
                   viewBox="0 0 16 16">
                <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
           </span>
                  <small dir="ltr">
                    <a href="tel:+982634762195">+98 26 34762195-6</a>
                  </small>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-xl-5 px-3">
              <p class="text-center"><b>درباره الیت</b></p>
              <small class="d-block">
                برند الیت در سال 1384 به ثبت رسید و برند اصلی شرکت آماده لذیذ است عصاره،نودالیت و سوپ‌های نیمه آماده جزو
                اولین
                محصولات تولید شده توسط الیت می باشند محصولات الیت با تمرکز بر کیفیت و سلامت خانواده ها و تحت به روز ترین
                استاندارد های مواد غذایی دنیا تولید می شود
              </small>
            </div>
            <div class="col-1 d-none d-xl-block"></div>
          </div>
          <div class="col-xl-6">
            <div class="col-12 px-3">
              <div class="row" style="padding-top: 100px">
                <router-link to="/recipe/3" class="col-6 col-md-3">
                  <img class="img-fluid footer_img" src="/img/f1.png" alt="">
                </router-link>
                <router-link to="/recipe/5" class="col-6 col-md-3">
                  <img class="img-fluid footer_img" src="/img/f2.png" alt="">
                </router-link>
                <router-link to="/recipe/2" class="col-6 col-md-3">
                  <img class="img-fluid footer_img" src="/img/f3.png" alt="">
                </router-link>
                <router-link to="/recipe/4" class="col-6 col-md-3">
                  <img class="img-fluid footer_img" src="/img/f4.png" alt="">
                </router-link>
              </div>
            </div>
          </div>


        </div>
        <div class="row">
          <div class="col-12">
            <small class="d-block m-3 mx-5">
              &copy; کلیه حقوق این وبسایت متعلق به شرکت
              <br class="d-sm-none">
              آماده لذیذ میباشد.
            </small>
          </div>
        </div>

      </div>
    </div>

    <!--    <div class=" d-flex justify-content-between px-xl-5">-->
    <!--      <p class="mt-5 pt-5" style="font-size: 12px">-->
    <!--        کلیه حقوق این وبسایت معتلق به شرکت آماده لذیذ میباشد.-->
    <!--      </p>-->
    <!--    </div>-->
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    coppyCode() {
      var copyText = document.getElementById("postalcode").innerText;
      navigator.clipboard.writeText(copyText).then(() => {

        document.getElementById("coppyAlert").style.opacity= "1";
        setTimeout(() => {
          document.getElementById("coppyAlert").style.opacity= "0";
        },2000)
      });
    }
  }
}

</script>

<style scoped>

#coppyAlert{
  position: absolute;
  opacity: 0;
  transition: 1s ease;
  top:0;
  right:0;
  background-color: whitesmoke;
  border-radius: 5px;
  direction: rtl;
  padding:2px;

}
footer {
  background: url("../../public/img/footer.png") no-repeat;

  background-size: 100%;
  min-height: 500px;
  background-position-y: top;
  display: grid;
  /*padding-top: 200px;*/

}


.footerInner div a {
  font-size: 7px !important;
}

small {
  text-align: justify !important;
}

li {
  list-style: none;
}

.footer_img {
  transform: scale(1.2);
  transition: 500ms;
  cursor: pointer;
}

.footer_img:hover {
  transform: scale(1.5);
  opacity: 0.7;
}

.containerr {
  background-color: #B9B9B9;
  margin-top: 300px
}

@media (max-width: 1000px) {
  .containerr {
    margin-top: 180px
  }
}

@media (max-width: 900px) {
  .containerr {
    margin-top: 200px
  }
}

@media (max-width: 685px) {
  .containerr {
    margin-top: 110px
  }
}

@media (min-width: 1200px) {
  .xo {
    margin-top: -100px;
  }
}
</style>