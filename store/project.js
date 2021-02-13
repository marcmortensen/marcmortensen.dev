export const state = () => ({
  name: '',
});

export const mutations = {
  setName(state, name) {
    state.name = name;
  },
};

export const getters = {
  getName: (state) => state.name,
};
