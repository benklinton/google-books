import axios from 'axios';

const APIKEY = ':keyes&key=AIzaSyAkejbU5OjTEO_4P-u-p8ioRoSqzIwUhbo';
const URL = 'https://www.googleapis.com/books/v1/volumes?q='

export default {
    search: function(query) {
        return axios.get(URL + query + APIKEY);
    }
};