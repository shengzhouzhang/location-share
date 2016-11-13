import React from 'react';
import Map from './Map';
import Location from './Location';

export default function AlertPage() {
  return (
    <div styleName="page--map-page">
      <Map />
      <Location />
    </div>
  );
}
