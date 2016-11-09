import React from 'react';
import LocationSearch from './LocationSearch';
import Navigations from './Navigations';

export default function Header() {
  return (
    <header styleName="header">
      <LocationSearch />
      <Navigations />
    </header>
  );
}
