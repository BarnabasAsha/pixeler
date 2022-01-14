<template>
  <div class="photo_view">
    <figure class="photo_view_img">
      <div class="img_wrapper">
        <img :src="getPhoto ? getPhoto.urls.regular : ''" alt="" />
      </div>
      <figcaption>
        <figure class="user">
          <div class="user_img">
            <img
              :src="getPhoto ? getPhoto.user.profile_image.small : ''"
              alt=""
            />
          </div>
          <div class="user_name">{{ getPhoto ? getPhoto.user.name : "" }}</div>
        </figure>
      </figcaption>
    </figure>
    <router-link to="/" class="photo_view_back">
      <span class="sr-only">Back to home page</span>
      <i class="fas fa-times"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Photo",
  computed: {
    id() {
      return this.$route.params.id;
    },
    getPhoto() {
      const photoProxy = this.$store.state.photos;
      const photos = JSON.parse(JSON.stringify(photoProxy));
      return photos.photos.filter((photo) => photo.id === this.id)[0];
    },
  },
  created() {
    if (!this.getPhoto) {
      this.$router.push("/pageNotFound");
    }
  },
};
</script>

<style lang="scss" src="../styles/app.scss"></style>
