import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import HomeIcon from 'material-ui/svg-icons/action/home';
import MapIcon from 'material-ui/svg-icons/maps/place';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';

export default function Navigations(props) {
  return (
    <Tabs
      onChange={props.onChange}
      value={props.tabIndex}
    >
      <Tab icon={<HomeIcon />} value={0} />
      <Tab icon={<MapIcon />} value={1} />
      <Tab icon={<AccountIcon />} value={2} />
    </Tabs>
  );
}

Navigations.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
