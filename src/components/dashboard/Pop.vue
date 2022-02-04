<template>
  <div>
    <div class="mfp-bg mfp-ready"></div>
    <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready">
      <div class="mfp-container mfp-s-ready mfp-iframe-holder">
        <div class="mfp-content">
          <div class="mfp-iframe-scaler">
            <button
              title="Close (Esc)"
              type="button"
              class="mfp-close"
              @click="closeFuntion"
              style="width:20px"
            >
              ×</button
            ><iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IjzUwnqWc5Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="mfp-preloader">Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    closeFuntion: { type: Function },
  },
  mounted() {
    this.closeFuntion();
  },
};
</script>
