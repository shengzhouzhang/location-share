import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';

export default function Sidebar({ show, toggleSidebar }) {
  return (
    <Drawer
      docked={false}
      width={230}
      open={show}
      onRequestChange={toggleSidebar}
    >
      <MenuItem onTouchTap={toggleSidebar} leftIcon={<HomeIcon />}>Home</MenuItem>
      <MenuItem onTouchTap={toggleSidebar} leftIcon={<SearchIcon />}>Location Search</MenuItem>
      <MenuItem onTouchTap={toggleSidebar} leftIcon={<AccountIcon />}>Account</MenuItem>
    </Drawer>
  );
}

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};
