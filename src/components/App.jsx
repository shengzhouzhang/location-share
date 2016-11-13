import React, { Component, PropTypes } from 'react';
import withStyles from 'react-css-modules';
import Header from './Header';
import AlertPage from './AlertPage';
import MapPage from './MapPage';
import styles from './App.scss';

class App extends Component {
  static propTypes = {
    pageName: PropTypes.string,
  }
  static defaultProps = {
    pageName: 'alert-page',
  }
  state = {
    pageName: this.props.pageName,
  };
  render() {
    const { pageName } = this.state;
    return (
      <div styleName="app">
        <Header />
        { pageName === 'alert-page' ? <AlertPage /> : null }
        { pageName === 'map-page' ? <MapPage /> : null }
      </div>
    );
  }
}

export default withStyles(App, styles);
