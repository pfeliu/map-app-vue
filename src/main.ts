import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoicGZlbGl1IiwiYSI6ImNsZ20wdGw0aTAxYnAzZW8yMjBrM2VpaTMifQ.XXe7WnXpinnw-wZtNSpcfw';

if (!navigator.geolocation) {
  alert("Browser do not support geolocation");
  throw new Error("Browser do not support geolocation");
}

createApp(App).use(store).use(router).mount("#app");
