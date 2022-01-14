<template>
  <router-link :to="'/photo/' + id">
    <figure class="image">
      <img :src="src" alt="" />
    </figure>
  </router-link>
</template>

<script>
export default {
  name: "Image",
  props: {
    src: String,
    id: String,
  },
};
</script>

<style lang="scss" src="../styles/app.scss"></style>
