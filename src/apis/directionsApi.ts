import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoicGZlbGl1IiwiYSI6ImNsZ20wdGw0aTAxYnAzZW8yMjBrM2VpaTMifQ.XXe7WnXpinnw-wZtNSpcfw'
    }
});


export default directionsApi;