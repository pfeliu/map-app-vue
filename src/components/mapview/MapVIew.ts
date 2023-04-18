import mapboxgl from "mapbox-gl";
import { usePlacesStore, useMapStore } from "@/composables";
import { defineComponent, ref, onMounted, watch } from "vue";

export default defineComponent({
  name: "MapView",
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { isUserLocationReady, userLocation } = usePlacesStore();

    const {setMap} = useMapStore()

    const initMap = async () => {
      if (!mapElement.value) throw new Error("Div Element no exits");
      if (!userLocation.value) throw new Error("user location no existe");

      await Promise.resolve();
      const map = new mapboxgl.Map({
        container: mapElement.value, // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 9, // starting zoom
      });

      const myLocationPopup = new mapboxgl.Popup()
      .setLngLat( userLocation.value )
      .setHTML(`
        <h4>I'm here</h4>
        <p>El Médano</p>
      `);

      const myLocationMarker = new mapboxgl.Marker().setLngLat(userLocation.value).setPopup(myLocationPopup).addTo(map)

      setMap(map)
    };

    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
