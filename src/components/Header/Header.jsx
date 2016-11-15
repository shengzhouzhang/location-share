import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Tabs from './Tabs';

const IconStyle = {
  margin: '0px',
};

export default function Header(props) {
  return (
    <header styleName="header">
      <AppBar
        title={props.title}
        styleName="header__app-bar"
        iconElementLeft={<IconButton>{props.icon}</IconButton>}
        iconElementRight={<IconButton><ActionSearch /></IconButton>}
        zDepth={0}
        iconStyleLeft={IconStyle}
        iconStyleRight={IconStyle}
      />
      <Tabs
        onChange={props.onTabChange}
        tabIndex={props.tabIndex}
      />
    </header>
  );
}

Header.propTypes = {
  onTabChange: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
