import axios from 'axios';
// https://pixabay.com/api/?key=32179167-903c9e169edcad7e661a9574c&q=yellow+flowers&image_type=photo&pretty=true

const API_KEY = '32179167-903c9e169edcad7e661a9574c';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = query => {
  return axios
    .get('', {
      params: {
        q: query,
        page: 1,
        per_page: 12,
        key: API_KEY,
      },
    })
    .then(response => response.data);
};
