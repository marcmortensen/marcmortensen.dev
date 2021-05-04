export const state = () => ({
  name: '',
  header: {
    imagePath: '',
    alt: '',
  },
});

export const mutations = {
  setName(state, name) {
    state.name = name;
  },
  setHeader(state, header) {
    state.header = header;
  },
};

export const getters = {
  getName: (state) => state.name,
  getHeader: (state) => state.header,
};
