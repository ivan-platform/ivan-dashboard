<template>
  <div class="footer landing">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-6">
          <div class="footer-link text-left">
            <a href="#" class="m_logo"
              ><img src="../../assets/images/logo.png" alt=""
            /></a>
            <router-link to="about">About</router-link>
            <router-link to="privacy-policy">Privacy Policy</router-link>
            <router-link to="term-condition">Term & Service</router-link>
          </div>
        </div>
        <div class="col-xl-6 col-md-6 text-lg-right text-center">
          <div class="social">
            <a href="#"><i class="fa fa-youtube-play"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-xl-12 text-center text-lg-right">
          <div class="copy_right text-center text-lg-center">
            Copyright © {{ new Date().getFullYear() }} Vaneck Associates. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
