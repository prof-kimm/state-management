import Axios from 'axios';

const AuthService = {
  async login(credentials) {
    return await Axios.post('http://localhost:3000/auth/login', credentials)
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          const { payload } = response.data;
          return payload;
        }
      });
  },

  async setHeader(access_token) {
    Axios.defaults.headers.common['Authorization'] = access_token;
  },

  async storeToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  },

  async storeUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  },
};

export default AuthService;