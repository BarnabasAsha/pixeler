<template>
  <section class="gallery">
    <Image
      v-for="photo in photos"
      :key="photo.id"
      :src="photo.urls.regular"
      :id="photo.id"
    />
  </section>
</template>

<script>
import Image from "./Image.vue";

export default {
  name: "Gallery",
  components: {
    Image,
  },
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" src="../styles/app.scss"></style>
