export const state = () => ({
  index: -1,
});

export const mutations = {
  setIndex(state, index) {
    state.index = index;
  },
};

export const getters = {
  getIndex: (state) => state.index,
};
