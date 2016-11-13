import React, { Component, PropTypes } from 'react';
import Promise from 'bluebird';
import { PositionType } from '../../PropTypes';

function getLocation(position) {
  return Promise.resolve(position);
}

export default class Map extends Component {
  static propTypes = {
    position: PropTypes.shape(PositionType).isRequired,
  }
  componentDidMount() {
    this.loadMap(this.props.position);
  }
  loadMap = (position) => {
    const map = new google.maps.Map(this.container, { zoom: 12 });
    return getLocation(position)
      .then(({ latitude, longitude }) => new google.maps.LatLng(latitude, longitude))
      .then(currentLocation => map.setCenter(currentLocation));
  }
  render() {
    return (
      <div styleName="map" ref={(c) => { this.container = c; }} />
    );
  }
}
