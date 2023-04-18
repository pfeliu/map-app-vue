<script lang="ts" src="./MapVIew.ts"></script>

<template>
    <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Wait please</h3>
            <span>Locating...</span>
        </div>
    </div>

    <div v-show="isUserLocationReady" class="map-container" ref="mapElement">

    </div>
 
</template>

<style scoped>

.map-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    
}
.loading-map {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 9999;
}
</style>
