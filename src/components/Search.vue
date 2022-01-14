<template>
  <div class="search">
    <form @submit.prevent="getPhoto" action="" class="search_form">
      <input
        type="search"
        name=""
        v-model="query"
        placeholder="Search for free high resolution photos"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    async getPhoto() {
      if (this.query !== "") {
        try {
          await this.$store.dispatch("updateQuery", this.query);
          await this.$store.dispatch("fetchPhotos", {
            query: this.query,
            order_by: "latest",
            per_page: 12,
          });
        } catch (error) {
          console.log(error.response.data);
        }
      }
    },
  },
};
</script>

<style lang="scss" src="../styles/app.scss"></style>
