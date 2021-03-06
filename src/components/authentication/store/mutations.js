import { setIsAuthenticated, signIn, signOut } from './mutationTypes';

export default {
  [setIsAuthenticated](state, payload) {
    state.isAuthenticated = payload;
  },
  [signIn](state, payload) {
    state.user = payload;
    state.isAuthenticated = true;
  },
  [signOut](state) {
    state.user = null;
    state.isAuthenticated = false;
  },
};
