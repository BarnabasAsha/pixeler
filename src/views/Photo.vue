<template>
  <div class="photo_view">
    <figure class="photo_view_img">
      <div class="img_wrapper">
        <img
          src="https://images.unsplash.com/photo-1641881240474-1c00bf53f807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=329&q=80"
          alt=""
        />
      </div>
      <figcaption>
        <figure class="user">
          <div class="user_img">
            <img src="" alt="" />
          </div>
          <div class="user_name"></div>
        </figure>
      </figcaption>
    </figure>
    <router-link to="/" class="photo_view_back">
      <span class="sr-only">Back to home page</span>
      <i class="fas fa-times"></i>
    </router-link>
  </div>
</template>
