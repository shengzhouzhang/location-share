import React from 'react';
import LocationSearch from './LocationSearch';
import Navigations from './Navigations';

export default function Header() {
  return (
    <div styleName="header">
      <LocationSearch />
      <Navigations />
    </div>
  );
}
