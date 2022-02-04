<template>
  <div id="main-wrapper" class="show">
    <nav-2 />
    <div class="page_title pt-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-sm-6 col-6">
            <div class="page_title-content">
              <p>Last updated: October 21, 2020</p>
            </div>
          </div>
          <div class="col-xl-6 col-sm-6 col-6 text-sm-left">
            <ul class="text-right breadcrumbs list-unstyle">
              <!-- <li><a href="./settings.html">Settings </a></li> -->
              <li class="active"><a href="#">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="about py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-9">
            <div class="about_content">
              <div class="our_vision">
                <h3>OUR VISION</h3>
                <p>
                  The growth of virtual items and microtransactions have been
                  enormous over the last few years. The prices for these items
                  or microtransactions are often twice the price of the game
                  itself. We understand people want these exclusive in-game
                  rewards, but we also see how they are too expensive for many.
                  Therefore we came up with the idea, Treemium .
                </p>
                <p>
                  We started providing a service directly targeted towards the
                  game Counter-Strike: Global Offensive, however, we quickly
                  came to realize this had the potential to reach a much broader
                  audience. Now we have expanded our service for not only
                  gamers, but also others that want gift cards to shop at their
                  favorite place, Treemium ocurrencies to start their Treemium o
                  adventure, or just direct PayPal cash to spend on whatever you
                  want.
                </p>
                <p>
                  We’re excited for what the future has to bring, and we will
                  continuously be pushing out updates and new features to keep
                  Treemium the leading platform in the GPT industry
                </p>
                <p>
                  The growth of virtual items and microtransactions have been
                  enormous over the last few years. The prices for these items
                  or microtransactions are often twice the price of the game
                  itself. We understand people want these exclusive in-game
                  rewards, but we also see how they are too expensive for many.
                  Therefore we came up with the idea, Treemium .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/landing/Footer";
import Nav2 from "../components/landing/Nav2";
export default {
  name: "About",
  components: {
    Footer,
    Nav2,
  },
};
</script>
