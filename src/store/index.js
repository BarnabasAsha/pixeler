import { createStore } from "vuex";
import photos from "./modules/photos";

export default createStore({
  modules: {
    photos,
  },
});
