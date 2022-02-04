<template>
  <div class="cookie_alert" v-show="show">
    <div class="alert alert-light fade show">
      <p>
        We use cookies to enhance your experience. By using Treemium , you agree
        to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
      </p>
      <button
        class="btn btn-success btn-block"
        data-dismiss="alert"
        @click="show = false"
      >
        Accept
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
