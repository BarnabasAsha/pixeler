<template>
  <Header />
  <Search />
  <Gallery :photos="allPhotos" />
  <router-view />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Gallery from "../components/Gallery.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Search,
    Gallery,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: mapGetters(["allPhotos"]),
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
        this.loading = false;
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>
