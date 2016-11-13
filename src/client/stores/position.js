import { createStore } from 'redux';

export default createStore((state, action) => {
  const { type, position } = action;
  switch (type) {
    case 'UPDATE':
      const { coords: { latitude, longitude }, timestamp } = position;
      return { latitude, longitude, timestamp };
    default:
      return state;
  }
});
