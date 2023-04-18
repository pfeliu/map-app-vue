import  mapboxgl  from 'mapbox-gl';
export interface MapState {
  distance?: number,
  duration?: number
  map?: mapboxgl.Map;
  markers: mapboxgl.Marker[],
}

function state(): MapState {
  return {
    distance: undefined,
    duration: undefined,
    map: undefined,
    markers: [],
  };
}

export default state;
