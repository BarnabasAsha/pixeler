import api from "../../api";

const state = {
  photos: [],
};

const getters = {
  allPhotos: (state) => state.photos,
};

const actions = {
  async fetchPhotos({ commit }, params) {
    const { data } = await api.get("/search/photos", {
      params,
    });
    commit("setPhotos", data.results);
  },
};

const mutations = {
  resetPhotos(state) {
    state.photos = [];
  },
  setPhotos(state, payload) {
    state.photos = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
