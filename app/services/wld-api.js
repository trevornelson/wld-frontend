import axios from 'axios';

class WldApi {
  constructor() {
    if(!WldApi.instance) {
      this.baseURL = 'https://wld-backend.herokuapp.com';
      //this.baseURL = 'http://localhost:3001';
      this.token = localStorage.getItem('token');

      WldApi.instance = this;
    }

    return WldApi.instance;
  }

  setToken(token) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  destroyToken() {
    localStorage.removeItem('token');
    this.token = null;
  }

  configs(opts = {}) {
    return Object.assign({}, {
      'headers': {
        'Authorization': this.token
      }
    }, opts);
  }

  get(path, opts = {}) {
    return axios.get(
      this.baseURL + path,
      this.configs(opts)
    );
  }

  put(path, data = {}, opts = {}) {
    return axios.put(
      this.baseURL + path,
      data,
      this.configs(opts)
    );
  }

  post(path, data = {}, opts = {}) {
    return axios.post(
      this.baseURL + path,
      data,
      this.configs(opts)
    );
  }

  delete(path, opts = {}) {
    return axios.delete(
      this.baseURL + path,
      this.configs(opts)
    );
  }
}

const instance = new WldApi();

export default instance;

