import React from 'react';

export default function Navigations() {
  return (
    <nav styleName="navigations">
      <a styleName="navigations__tab">Alerts</a>
      <a styleName="navigations__tab">Map</a>
      <a styleName="navigations__tab">Account</a>
    </nav>
  );
}

Navigations.propTypes = {
  className: React.PropTypes.string,
};
