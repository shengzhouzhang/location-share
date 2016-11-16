import React from 'react';
import Alert from './Alert';

export default function AlertList() {
  return (
    <div styleName="alert-list">
      <Alert location="Hopper Crossing" receiver="user-2" />
      <Alert location="Flinders street station" receiver="user-1" />
    </div>
  );
}
