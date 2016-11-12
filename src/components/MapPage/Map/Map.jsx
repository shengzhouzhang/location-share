import React, { Component } from 'react';

function getCurrentPosition() {
  const geolocation = window.navigator.geolocation;
  return new Promise((resolve, reject) => {
    if (!geolocation) { return reject(); }
    return geolocation.getCurrentPosition(resolve);
  });
}

export default class Map extends Component {
  componentDidMount() {
    this.loadMap();
  }
  loadMap() {
    const container = this.map;
    const map = new google.maps.Map(container, { zoom: 12 });
    getCurrentPosition()
      .then(({ coords }) => new google.maps.LatLng(coords.latitude, coords.longitude))
      .then(currentLocation => map.setCenter(currentLocation));
  }
  render() {
    return (
      <div styleName="map" ref={(c) => { this.map = c; }} />
    );
  }
}
