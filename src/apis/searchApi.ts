import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoicGZlbGl1IiwiYSI6ImNsZ20wdGw0aTAxYnAzZW8yMjBrM2VpaTMifQ.XXe7WnXpinnw-wZtNSpcfw'
    }
});


export default searchApi;