<template>
  <layout :active="4" :title="true">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-md-4">
            <div class="card settings_menu">
              <div class="card-header">
                <h4 class="card-title">Settings</h4>
              </div>
              <div class="card-body">
                <ul>
                  <li class="nav-item">
                    <router-link
                      to="/settings"
                      class="nav-link"
                      :class="active === 1 && 'active'"
                    >
                      <i class="mdi mdi-account"></i>
                      <span>Edit Profile</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/settings-preferences"
                      class="nav-link"
                      :class="active === 2 && 'active'"
                    >
                      <i class="la la-cog"></i>
                      <span>Preferences</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/settings-security"
                      class="nav-link"
                      :class="active === 3 && 'active'"
                    >
                      <i class="la la-lock"></i>
                      <span>Security</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/settings-account"
                      class="nav-link"
                      :class="active === 4 && 'active'"
                    >
                      <i class="la la-university"></i>
                      <span>Linked Account</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-md-8">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../Layout";
export default {
  name: "SettingLayout",
  components: {
    Layout,
  },
  props: {
    active: Number,
  },
};
</script>
