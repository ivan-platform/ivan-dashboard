<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <!-- <nav class="navbar">
            <div class="header-search d-flex align-items-center">
              <router-link class="brand-logo mr-3" to="index">
                <img src="../../assets/images/logo.png" alt="" width="30" />
              </router-link>
              <form action="#" @submit.prevent="">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2"
                      ><i class="fa fa-search"></i
                    ></span>
                  </div>
                </div>
              </form>
            </div>

            <div class="dashboard_log">
              <div class="d-flex align-items-center">
                <div
                  class="profile_log dropdown"
                  :class="show && 'show'"
                  @click.capture="show = !show"
                >
                  <div class="user" data-toggle="dropdown">
                    <span class="thumb"><i class="mdi mdi-account"></i></span>
                    <span class="name"></span>
                    <span class="arrow"><i class="la la-angle-down"></i></span>
                  </div>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    :class="show && 'show'"
                  >
                    <router-link to="accounts" class="dropdown-item">
                      <i class="mdi mdi-account"></i> Account
                    </router-link>
                    <router-link to="history" class="dropdown-item">
                      <i class="la la-book"></i> History
                    </router-link>
                    <router-link to="settings" class="dropdown-item">
                      <i class="la la-cog"></i> Setting
                    </router-link>
                    <router-link to="lock" class="dropdown-item">
                      <i class="la la-lock"></i> Lock
                    </router-link>
                    <router-link to="signin" class="dropdown-item logout">
                      <i class="la la-sign-out"></i> Logout
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </nav> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: false,
    };
  },
};
</script>
