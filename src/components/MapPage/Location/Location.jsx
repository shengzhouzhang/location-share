import React from 'react';

export default function Location() {
  return (
    <div styleName="location">
      <div styleName="location__info">
        <h2>Flinders Street Station</h2>
        <button>Star</button>
      </div>
      <div styleName="location__info">
        <span>Send notification to</span>
        <span>Grace</span>
      </div>
      <div styleName="location__info">
        <span>When</span>
        <button>Arrive</button>
        <button>Leave</button>
      </div>
    </div>
  );
}
