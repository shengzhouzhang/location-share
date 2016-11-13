import React, { Component, PropTypes } from 'react';

export default class Navigations extends Component {
  static propTypes = {
    onTabClick: PropTypes.func.isRequired,
  };
  toAlertPage = (event) => {
    event.preventDefault();
    this.props.onTabClick('alert-page');
  }
  toMapPage = (event) => {
    event.preventDefault();
    this.props.onTabClick('map-page');
  }
  render() {
    return (
      <nav styleName="navigations">
        <button styleName="navigations__tab" onClick={this.toAlertPage}>Alerts</button>
        <button styleName="navigations__tab" onClick={this.toMapPage}>Map</button>
        <button styleName="navigations__tab">Account</button>
      </nav>
    );
  }
}
