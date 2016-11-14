import React, { Component, PropTypes } from 'react';
import withStyles from 'react-css-modules';
import Header from './Header';
import Sidebar from './Sidebar';
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
    showSidebar: false,
  };
  tabClickHandler = (pageName) => {
    this.setState({ pageName });
  }
  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  }
  render() {
    const { pageName } = this.state;
    return (
      <div styleName="app">
        <Header onLeftIconButtonTouchTap={this.toggleSidebar} />
        <Sidebar show={this.state.showSidebar} toggleSidebar={this.toggleSidebar} />
        { pageName === 'alert-page' ? <AlertPage /> : null }
        { pageName === 'map-page' ? <MapPage /> : null }
      </div>
    );
  }
}

export default withStyles(App, styles);
