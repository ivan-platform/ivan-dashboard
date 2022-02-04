<template>
  <div class="container">
    <!-- Consider refactoring this to its own component -->
    <!-- The 'passes' method allows us to only run our submit hander if the form is valid -->
    <ValidationObserver v-slot="{ passes }">
      <h2>Register</h2>
      <form class="currency_validate" @submit.prevent="passes(registerSubmit)">
        <ValidationProvider rules="required" v-slot="{ errors }">
          <div>
            <input type="text" v-model="drink_" value="" />
            <input type="text" v-model="drink_1" value="coffee" />
            <input type="text" v-model="drink_2" value="coke" />
          </div>
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="email"
          rules="required|email"
          v-slot="{ errors }"
          class="form-group"
        >
          <div class="field">
            <label class="mr-sm-2">Enter your amount</label>

            <input
              class="form-control"
              placeholder="0.0214 BTC"
              name="currency_amount"
              v-model="register.email"
              type="email"
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
          <div class="field">
            <input v-model="register.name" type="text" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="password"
          rules="required|min:6"
          v-slot="{ errors }"
        >
          <div class="field">
            <input v-model="register.password" type="password" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <button>Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "SomePage",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    register: {
      email: "",
      password: "",
      name: "",
    },
  }),
  methods: {
    registerSubmit() {
      console.log("Submitting to server!");
    },
  },
};
</script>

<style>
.field {
  margin-bottom: 10px;
}

.form {
  margin-top: 20px;
}

span {
  display: block;
  margin-top: 3px;
}
</style>
