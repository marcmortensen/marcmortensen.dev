export const state = () => ({
  isAtTop: true,
});

export const mutations = {
  setIsAtTop(state, isAtTop) {
    state.isAtTop = isAtTop;
  },
};

export const getters = {
  getIsAtTop: (state) => state.isAtTop,
};
