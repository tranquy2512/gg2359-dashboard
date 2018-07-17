import axios from "axios";


axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://fortwallet.didynwcwrw.ap-southeast-1.elasticbeanstalk.com/adminPanel/' : 'http://fortwallet.didynwcwrw.ap-southeast-1.elasticbeanstalk.com/adminPanel/';
class BaseService {

  get(url, config) {
    return axios.get(url, config);
  }

  post(url, data, config) {
    return axios.post(url, data, config);
  };

  put(url, data, config) {
    return axios.put(url, data, config);
  };

  delete(url, config) {
    return axios.delete(url, config);
  };

  getOptions() {
    return {
      headers: { Authorization: localStorage.getItem("token") }
    };
  };
}

export default new BaseService();