import React from 'react';
import LocationSearch from './LocationSearch';
import Navigations from './Navigations';

export default function Header() {
  return (
    <div styleName="header">
      <LocationSearch styleName="header__location-search" />
      <Navigations styleName="header__navigations" />
    </div>
  );
}
