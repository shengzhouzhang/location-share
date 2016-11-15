import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import withStyles from 'react-css-modules';
import IconEvent from 'material-ui/svg-icons/notification/event-available';
import IconMap from 'material-ui/svg-icons/maps/map';
import Header from './Header';
import AlertPage from './AlertPage';
import MapPage from './MapPage';
import styles from './App.scss';

const PAGES = [
  { index: 0, name: 'Events', icon: <IconEvent /> },
  { index: 1, name: 'Map', icon: <IconMap /> },
  { index: 2, name: 'Account', icon: <IconEvent /> },
];

class App extends Component {
  static propTypes = {
    pageIndex: PropTypes.number,
  }
  static defaultProps = {
    pageIndex: 0,
  }
  state = {
    page: PAGES[this.props.pageIndex],
  }
  tabChangeHandler = (tabIndex) => {
    this.setState({ page: _.find(PAGES, page => page.index === tabIndex) });
  }
  render() {
    const { page } = this.state;
    return (
      <div styleName="app">
        <Header
          tabIndex={page.index}
          title={page.name}
          icon={page.icon}
          onTabChange={this.tabChangeHandler}
        />
        { page.index === 0 ? <AlertPage /> : null }
        { page.index === 1 ? <MapPage /> : null }
      </div>
    );
  }
}

export default withStyles(App, styles);
