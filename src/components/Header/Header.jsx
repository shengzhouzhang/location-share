import React, { PropTypes } from 'react';
import LocationSearch from './LocationSearch';
import Navigations from './Navigations';

export default function Header(props) {
  return (
    <header styleName="header">
      <LocationSearch />
      <Navigations onTabClick={props.onTabClick} />
    </header>
  );
}

Header.propTypes = {
  onTabClick: PropTypes.func.isRequired,
};
