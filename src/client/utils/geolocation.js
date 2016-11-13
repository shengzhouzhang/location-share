
export function getCurrentPosition(...args) {
  navigator.geolocation.getCurrentPosition(...args);
}

export function watchPosition(...args) {
  navigator.geolocation.watchPosition(...args);
}

export function clearWatch(...args) {
  navigator.geolocation.clearWatch(...args);
}

export default class Geolocation {
  instanceId = undefined
  startWatch = (func) => {
    this.instanceId = watchPosition(func);
  }
  stopWatch = () => {
    clearWatch(this.instanceId);
  }
}
