<template>
  <div
    class="intro section-padding position-relative"
    id="intro"
    data-scroll-index="0"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-xl-7 col-md-6">
          <div class="intro-content">
            <h2>Buy and sell <br />Treemium ocurrency</h2>
            <p>
              Fast and secure way to purchase or exchange 150+ Treemium
              ocurrencies
            </p>
            <div class="mt-4">
              <a href="#" class="btn my-1 waves-effect">
                <img src="../../assets/images/android.svg" alt="" />
              </a>
              <a href="#" class="btn my-1 waves-effect">
                <img src="../../assets/images/apple.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-md-6 py-md-5">
          <div class="card">
            <div class="card-body">
              <currency-form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrencyForm from "../CurrencyForm.vue";

export default {
  name: "Intro",
  components: { CurrencyForm },
};
</script>
