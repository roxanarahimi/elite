<template>
  <div class="nav d-flex justify-content-center" dir="rtl">
    <router-link class="logo d-block" to="/en/">
      <img src="/img/Layer%2023.png" class="me-3 me-lg-5 img-fluid nav-logo" width="150" alt=""></router-link>
    <nav class="bg-main rounded rounded-pill navbar mt-3">
      <div class="menu-main-menu-container">
        <ul id="menu-main-menu" class="menu">
          <li id="menu-item-61"
              class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-61">
            <a href="/en/" aria-current="page">Home</a>
          </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-136">
            <router-link to="/en/products">Products</router-link>
          </li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-105">
            <router-link to="/en/categories">Recipes</router-link>
          </li>
          <li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103">
            <router-link to="/en/about">About Elite</router-link>
          </li>

          <li id="menu-item-109" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-109">
            <router-link to="/en/blog">Blog</router-link>
          </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-138">
            <a href="https://digikala.com/search/?brands%5B0%5D=7630&q=Elite" target="_blank">Online Shopping</a>
          </li>
          <li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-138">
           <div class="d-flex">
             <router-link to="/" class="d-block">
               <img src="/img/ir.svg" class="languageImg" title="persian" alt="persian">
             </router-link>
<!--             <router-link to="/en/" class="d-block">-->
<!--               <img src="/img/gb.svg" class="languageImg" title="english" alt="english">-->
<!--             </router-link>-->
<!--             <router-link to="/ar/" class="d-block">-->
<!--               <img src="/img/sa.svg" class="languageImg" title="arabic" alt="arabic">-->
<!--             </router-link>-->
           </div>
          </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-139">
            <router-link to="/en/search">
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
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>
nav {
  box-shadow: 0 2px 20px 0 rgba(255, 255, 255, 0.46), 0 2px 50px 0 rgba(255, 255, 255, 0.51);
  height: 50px;
  width: 75%
}
.languageImg{
  width: 35px !important;
  height: auto !important;
  border-radius: 50%;
  margin: 0 5px;
}
</style>