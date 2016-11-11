import React from 'react';
import Header from './Header';
import Location from './Location';

export default function LocationList() {
  return (
    <div styleName="location-list">
      <Header />
      <Location />
      <Location />
    </div>
  );
}
