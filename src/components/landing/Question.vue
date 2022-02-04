<template>
  <div id="contact" class="contact-form section-padding" data-scroll-index="4">
    <div class="container">
      <div class="row py-lg-5 justify-content-center">
        <div class="col-xl-7">
          <div class="section_heading">
            <span>Ask Question</span>
            <h3>Let us hear from you directly!</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-4 col-sm-4">
          <div class="info-list">
            <h4 class="mb-3">Address</h4>
            <ul>
              <li><i class="fa fa-map-marker"></i> California, USA</li>
              <li><i class="fa fa-phone"></i> (+880) 1243 665566</li>
              <li><i class="fa fa-envelope"></i> hello@example.com</li>
            </ul>
          </div>
        </div>
        <div class="col-xl-8 col-md-8 col-sm-8">
          <ValidationObserver v-slot="{ passes }">
            <form @submit.prevent="passes(formSubmit)" class="contact_validate">
              <div class="row">
                <div class="col-12 col-md-6">
                  <ValidationProvider
                    tag="div"
                    rules="required"
                    v-slot="{ errors }"
                    class="form-group"
                  >
                    <label for="contactName">
                      Full name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="contactName"
                      placeholder="Full name"
                      name="firstname"
                      v-model="firstname"
                    />
                    <label
                      id="contactName-error"
                      class="error"
                      for="contactName"
                      >{{ errors[0] }}</label
                    >
                  </ValidationProvider>
                </div>
                <div class="col-12 col-md-6">
                  <ValidationProvider
                    tag="div"
                    rules="required|email"
                    v-slot="{ errors }"
                    class="form-group"
                  >
                    <label for="contactEmail">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      placeholder="hello@domain.com"
                      v-model="email"
                    />
                    <label
                      id="contactName-error"
                      class="error"
                      for="contactName"
                      >{{ errors[0] }}</label
                    >
                  </ValidationProvider>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <ValidationProvider
                    tag="div"
                    rules="required"
                    v-slot="{ errors }"
                    class="form-group"
                  >
                    <textarea
                      class="form-control p-3"
                      name="message"
                      v-model="message"
                      rows="5"
                      placeholder="Tell us what we can help you with!"
                    ></textarea>
                    <label
                      id="contactName-error"
                      class="error"
                      for="contactName"
                      >{{ errors[0] }}</label
                    >
                  </ValidationProvider>
                </div>
              </div>
              <button type="submit" class="btn btn-primary px-4">
                Send message
              </button>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: "Question",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      // erros: {},
      firstname: "",
      message: "",
      email: "",
    };
  },
  methods: {
    formSubmit() {
      console.log("Submitting to server!");
    },
  },
};
</script>
