import React from 'react';
import AlertList from '../AlertList';
import LocationList from '../LocationList';

export default function AlertPage() {
  return (
    <div styleName="page--alert-page">
      <AlertList />
      <LocationList />
    </div>
  );
}
