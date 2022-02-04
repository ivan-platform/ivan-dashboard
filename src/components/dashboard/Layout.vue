<template>
  <div id="main-wrapper" class="show">
    <Header />
    <sidebar v-bind:active="active" />

    <page-title v-if="title" />

    <slot />
  </div>
</template>

<script>
import Header from "./Header.vue";
import PageTitle from "./PageTitle.vue";
import Sidebar from "./Sidebar.vue";
export default {
  components: { Sidebar, Header, PageTitle },
  props: {
    active: Number,
    title: Boolean,
  },
};
</script>
