import React from 'react';
import Header from '../Header';
import AlertList from '../AlertList';
import LocationList from '../LocationList';

export default function AlertPage() {
  return (
    <div styleName="page--alert-page">
      <Header />
      <AlertList />
      <LocationList />
    </div>
  );
}
