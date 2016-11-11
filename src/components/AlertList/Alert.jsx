import React from 'react';
import withStyles from 'react-css-modules';
import styles from './Alert.scss';

function Alert() {
  return (
    <div styleName="alert">
      <div styleName="alert__info">
        <h5 styleName="alert__location">Office</h5>
        <span styleName="alert__recipient">Grace</span>
      </div>
      <div styleName="alert__info">
        <span styleName="alert__label">when</span>
        <button styleName="alert__button">Arrive</button>
        <button styleName="alert__button">Leave</button>
        <button styleName="alert__button">On</button>
      </div>
    </div>
  );
}

export default withStyles(Alert, styles);
