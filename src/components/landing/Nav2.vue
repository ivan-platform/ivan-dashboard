<template>
  <div class="header landing_page">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <nav
            class="navbar navbar-expand-lg navbar-light px-0 justify-content-between"
          >
            <router-link class="navbar-brand" to="landing"
              ><img src="../../assets/images/logo.png" alt="" />
              <span>Treemium </span></router-link
            >

            <div class="dashboard_log">
              <div class="d-flex align-items-center">
                <div class="header_auth">
                  <router-link to="/signin" class="btn btn-success  mx-2"
                    >Sign In</router-link
                  >
                  <router-link
                    to="/signup"
                    class="btn btn-outline-primary  mx-2"
                    >Sign Up</router-link
                  >
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav2",
};
</script>
