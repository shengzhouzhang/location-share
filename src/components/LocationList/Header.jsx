import React from 'react';
import withStyles from 'react-css-modules';
import styles from './Header.scss';

function Header() {
  return (
    <h3 styleName="location-list__header">
      Saved Locations
    </h3>
  );
}

export default withStyles(Header, styles);
