import React from 'react';
import Header from '../Header';
import Map from './Map';
import Location from './Location';

export default function AlertPage() {
  return (
    <div styleName="page--map-page">
      <Header />
      <Map />
      <Location />
    </div>
  );
}
