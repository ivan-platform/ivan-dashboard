<template>
  <div class="buy-sell-widget px-2">
    <ValidationObserver v-slot="{ passes }">
      <form
        @submit.prevent="passes(formSubmit)"
        class="currency_validate"
        method="post"
      >
        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          name="currency"
          class="form-group"
        >
          <label class="mr-sm-2">Currency</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text"><i class="cc BTC-alt"></i></label>
            </div>
            <select v-model="currency" name="currency" class="form-control">
              <option value="">Select</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="litecoin">Litecoin</option>
            </select>
            <label class="error" for="currency">{{ errors[0] }}</label>
          </div>
        </ValidationProvider>

        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          name="method"
          class="form-group"
        >
          <label class="mr-sm-2">Payment Method</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text"><i class="fa fa-bank"></i></label>
            </div>
            <select class="form-control" v-model="method" name="method">
              <option value="">Select</option>
              <option value="bank">Bank of America ********45845</option>
              <option value="master">Master Card ***********5458</option>
            </select>
            <label class="error" for="method">{{ errors[0] }}</label>
          </div>
        </ValidationProvider>

        <div class="form-group">
          <label class="mr-sm-2">Enter your amount</label>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="0.0214 BTC"
                v-model="currency_amount"
              />

              <input
                type="text"
                class="form-control"
                placeholder="0.0214 BTC"
                v-model="usd_amount"
              />

              <label class="error" for="method">{{ errors[0] }}</label>
            </div>
          </ValidationProvider>
          <div class="d-flex justify-content-between mt-3">
            <p class="mb-0">Monthly Limit</p>
            <h6 class="mb-0">$49750 remaining</h6>
          </div>
        </div>
        <button type="submit" name="submit" class="btn btn-success btn-block">
          Exchange Now
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script scoped>
// import "./validation/Intro";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "CurrencyForm",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      // erros: {},
      currency: "",
      method: "",
      currency_amount: "",
      usd_amount: "",
      submitted: false,
    };
  },
  methods: {
    formSubmit() {
      console.log("Submitting to server!");
    },
  },
};
</script>
