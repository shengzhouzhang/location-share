import React, { PropTypes } from 'react';
import withStyles from 'react-css-modules';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import AlarmIcon from 'material-ui/svg-icons/action/alarm';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';
import styles from './Alert.scss';

function Alert({ location, receiver }) {
  return (
    <Card style={{ margin: '8px' }}>
      <CardHeader
        title={location}
        avatar={<IconButton style={{ padding: '13px 0', width: '24px' }}><AlarmIcon /></IconButton>}
        style={{ padding: '0 16px', lineHeight: '50px', height: '50px' }}
      />
      <CardActions style={{ padding: '16px' }}>
        <SelectField
          floatingLabelText="Send notification to"
          value={receiver}
          fullWidth
          style={{ margin: '-20px 0 8px 0' }}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem value="user-1" primaryText="Me" />
          <MenuItem value="user-2" primaryText="Grace" />
        </SelectField>
        <Subheader style={{ padding: 0, fontSize: '10.5px', lineHeight: '28px' }}>When</Subheader>
        <div style={{ display: 'flex', marginBottom: '8px' }}>
          <Checkbox label="Enter" style={{ width: 'auto', display: 'flex', flex: '1 0 0' }} />
          <Checkbox label="Leave" style={{ width: 'auto', display: 'flex', flex: '1 0 0' }} />
        </div>
      </CardActions>
      <Divider />
      <CardActions style={{ padding: '8px 16px' }}>
        <Toggle label=" " labelStyle={{ fontSize: '12px' }} />
      </CardActions>
    </Card>
  );
}

Alert.propTypes = {
  location: PropTypes.string.isRequired,
  receiver: PropTypes.string.isRequired,
};

export default withStyles(Alert, styles);
