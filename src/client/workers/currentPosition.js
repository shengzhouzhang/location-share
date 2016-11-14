import Geolocation from '../utils/geolocation';
import positionStore from '../stores/position';

const geolocation = new Geolocation();

geolocation.startWatch((position) => {
  positionStore.dispatch({ type: 'UPDATE', position });
});
