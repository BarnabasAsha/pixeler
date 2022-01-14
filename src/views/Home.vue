<template>
  <Header />
  <Search />
  <div class="query">
    <h2 v-if="query !== ''">Results for {{ query }}</h2>
  </div>
  <Loader v-if="loading" />
  <Error v-if="!allPhotos.length" />
  <Gallery :photos="allPhotos" />
  <router-view />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Gallery from "@/components/Gallery.vue";
import Loader from "@/components/Loader.vue";
import Error from "@/components/Error.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Search,
    Gallery,
    Loader,
    Error,
  },
  computed: mapGetters(["allPhotos", "loading", "query"]),
  created() {
    this.initPhotos();
  },
  methods: {
    async initPhotos() {
      try {
        await this.$store.dispatch("fetchPhotos", {
          query: "African",
          order_by: "latest",
          per_page: 12,
        });
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>

<style lang="scss" src="../styles/app.scss"></style>
