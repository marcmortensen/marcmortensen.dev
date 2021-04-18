export const state = () => ({
  scroll: false,
});

export const mutations = {
  setScroll(state, scroll) {
    state.scroll = scroll;
  },
};

export const getters = {
  getScroll: (state) => state.scroll,
};
