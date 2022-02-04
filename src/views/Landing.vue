<template>
  <div id="main-wrapper pt-0">
    <Nav />
    <div>
      <Intro />
      <!-- <Example /> -->
      <Market />
      <Features />
      <Join />
      <Say />
      <Question />
    </div>
    <Footer />

    <CookieAlert />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "../components/landing/Nav";
import Intro from "../components/landing/Intro";
import Market from "../components/landing/Market";
import Features from "../components/landing/Features";
import Join from "../components/landing/Join";
import Say from "../components/landing/Say";
import Question from "../components/landing/Question";
import Footer from "../components/landing/Footer";
import CookieAlert from "../components/landing/CookieAlert";
// import Example from "../components/FormError";

export default {
  name: "Landing",
  components: {
    Nav,
    Intro,
    Market,
    Features,
    Join,
    Say,
    Question,
    Footer,
    CookieAlert,
    // Example,
  },
};
</script>
