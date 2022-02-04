<template>
  <div id="main-wrapper" class="show">
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
              <div class="card-body">
                <router-link class="page-back text-muted" to="otp-1"
                  ><span><i class="fa fa-angle-left"></i></span>
                  Back</router-link
                >
                <h3 class="text-center">OTP Verification</h3>
                <p class="text-center mb-5">
                  We will send one time code on this number
                </p>
                <form @submit.prevent="onSubmit">
                  <div class="form-group">
                    <label>Your OTP Code</label>
                    <input
                      type="text"
                      class="form-control text-center font-weight-bold"
                      value="11 22 33"
                    />
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-success btn-block">
                      Verify
                    </button>
                  </div>
                </form>
                <div class="info mt-3">
                  <p class="text-muted">
                    You dont recommended to save password to browsers!
                  </p>
                </div>
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
  methods: {
    onSubmit() {
      this.$router.push("/index");
    },
  },
};
</script>
