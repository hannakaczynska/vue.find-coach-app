import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters,
  actions,
  mutations,
};
