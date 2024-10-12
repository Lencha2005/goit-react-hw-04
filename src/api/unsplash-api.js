import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';

export async function fetchImages(searchValue, page){
    const axiosOptions = {
        params: {
            client_id: 'Z02RgsWxp9wYhbzY10H-LRHgjPYDmIvriueEpETzziw',
            query: searchValue,
            page: page,
            per_page: 10,
            orientation: 'landscape',
        }
    }
        return axios.get('search/photos', axiosOptions);

}