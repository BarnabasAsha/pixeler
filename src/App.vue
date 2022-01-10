<template>
  <Header />
  <Search />
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    Header,
    Search,
  },
};
</script>

<style lang="scss" src="./styles/app.scss"></style>
