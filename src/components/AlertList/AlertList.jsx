import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Header, Setting } from './Alert';

const ListStyle = {
  backgroundColor: '#fff',
  borderTop: '1px solid rgb(224, 224, 224)',
  borderBottom: '1px solid rgb(224, 224, 224)',
};

export default function AlertList() {
  return (
    <div styleName="alert-list">
      <List style={ListStyle}>
        <ListItem
          primaryText={<Header />}
          secondaryText={<Setting />}
        />
        <Divider />
        <ListItem
          primaryText={<Header />}
          secondaryText={<Setting />}
        />
      </List>
    </div>
  );
}
