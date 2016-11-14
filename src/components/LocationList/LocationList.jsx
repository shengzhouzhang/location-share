import React from 'react';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RightIcon from 'material-ui/svg-icons/action/info';

const ListStyle = {
  backgroundColor: '#fff',
  borderTop: '1px solid rgb(224, 224, 224)',
  borderBottom: '1px solid rgb(224, 224, 224)',
};

export default function LocationList() {
  return (
    <div>
      <Subheader>Saved locations</Subheader>
      <List style={ListStyle}>
        <ListItem
          primaryText="Hoppper Crossing"
          rightIcon={<RightIcon />}
        />
        <Divider />
        <ListItem
          primaryText="Flinders Street Station"
          rightIcon={<RightIcon />}
        />
        <Divider />
        <ListItem
          primaryText="REA Group"
          secondaryText="511 church St, richmond vic 3121"
          rightIcon={<RightIcon />}
        />
      </List>
    </div>
  );
}
