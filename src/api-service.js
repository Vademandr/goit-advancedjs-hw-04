import axios from 'axios';
export { apiService };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '40909869-b3da28e56daa62163d671a2ba';

async function apiService(query, page, perPage) {
  const { data } = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return data;
}