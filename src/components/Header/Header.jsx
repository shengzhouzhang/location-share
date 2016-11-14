import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

export default class Header extends Component {
  static propTypes = {
    onLeftIconButtonTouchTap: PropTypes.func.isRequired,
  }
  leftButtonTouchTapHandler = (...args) => {
    this.props.onLeftIconButtonTouchTap(...args);
  }
  render() {
    return (
      <header styleName="header">
        <AppBar
          title="Alerts"
          iconElementRight={<IconButton><ActionSearch /></IconButton>}
          onLeftIconButtonTouchTap={this.leftButtonTouchTapHandler}
        />
      </header>
    );
  }
}
