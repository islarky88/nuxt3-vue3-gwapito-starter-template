import { defineStore } from 'pinia';

interface AuthInfo {
  id: number;
  token: string;
  username: string;
}

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => {
    return {
      user: null as AuthInfo | null,
      token: null as string | null,
    };
  },
  actions: {
    // setUserFromToken(token: string) {
    //   const { userId, username } = jwt.decode(token);
    //   this.user = { id: userId, token: token, username };
    // },
    logout() {
      localStorage.removeItem('token');
      this.user = null;
      this.token = null;
    },
  },
  getters: {
    isAuth: (state) => state.token,
    test: (state) => 'test getter',
  },
});
