<template>
  <div class="authincation section-padding">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-xl-5 col-md-6">
          <div class="mini-logo text-center my-5">
            <img src="../assets/images/logo.png" alt="" />
          </div>
          <div class="auth-form card">
            <div class="card-header justify-content-center">
              <h4 class="card-title">Locked</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="formSubmit">
                <div class="form-group mb-4">
                  <label for="">Enter Password</label>
                  <input
                    type="password"
                    class="form-control bg-transparent rounded-0"
                    placeholder="Password"
                  />
                </div>
                <button
                  class="btn-success btn-block btn-lg border-0"
                  type="submit"
                >
                  Unlock
                </button>
              </form>
              <div class="new-account text-center mt-3">
                <router-link class="text-primary" to="reset">
                  <h5>Not Carla Pascle?</h5>
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
  methods: {
    formSubmit() {
      this.$router.push("/index");
    },
  },
};
</script>
