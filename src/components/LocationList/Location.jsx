import React from 'react';
import withStyles from 'react-css-modules';
import styles from './Location.scss';

function Location() {
  return (
    <div styleName="location-list__location">
      Hopper Crossing
    </div>
  );
}

export default withStyles(Location, styles);
