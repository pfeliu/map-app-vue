<template>
  <button
    v-if="isBtnReady"
    class="btn btn-primary"
    @click="onMyLocationCLicked"
  >
    Go to my location
  </button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from "@/composables";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "MyLocationBtn",
  setup() {
    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { map, isMapReady } = useMapStore();
    return {
      isBtnReady: computed<boolean>(
        () => isUserLocationReady.value && isMapReady
      ),
      onMyLocationCLicked: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 10,
        });
      },
    };
  },
});
</script>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
}
</style>
