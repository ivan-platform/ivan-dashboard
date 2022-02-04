<template>
  <div class="authincation section-padding">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-xl-5 col-md-6">
          <div class="mini-logo text-center my-5">
            <router-link to="landing"
              ><img src="../assets/images/logo.png" alt=""
            /></router-link>
          </div>
          <div class="auth-form card">
            <div class="card-header justify-content-center">
              <h4 class="card-title">Reset password</h4>
            </div>
            <div class="card-body">
              <form @click.prevent="formSubmit">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    value="hello@example.com"
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-success btn-block">
                    Reset
                  </button>
                </div>
              </form>
              <div class="new-account mt-3">
                <p class="mb-1">Don't Received?</p>
                <router-link class="text-primary" to="reset"
                  >Resend
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reset",
  methods: {
    formSubmit() {
      this.$router.push("/signin");
    },
  },
};
</script>
