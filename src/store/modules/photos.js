import api from "../../api";

const state = {
  photos: [],
  loading: true,
  Query: "",
};

const getters = {
  allPhotos: (state) => state.photos,
  loading: (state) => state.loading,
  query: (state) => state.query,
};

const actions = {
  async fetchPhotos({ commit }, params) {
    commit("resetPhotos");
    const { data } = await api.get("/search/photos", {
      params,
    });
    commit("setPhotos", data.results);
  },
  updateQuery({ commit }, params) {
    commit("setQuery", params);
  },
};

const mutations = {
  resetPhotos(state) {
    state.photos = [];
    state.query = "";
    state.loading = true;
  },
  setPhotos(state, payload) {
    state.photos = payload;
    state.loading = false;
  },
  setQuery(state, payload) {
    state.query = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
