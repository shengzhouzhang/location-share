import React from 'react';
import Header from './Header';
import Alert from './Alert';

export default function AlertList() {
  return (
    <div styleName="alert-list">
      <Header />
      <Alert />
      <Alert />
    </div>
  );
}
