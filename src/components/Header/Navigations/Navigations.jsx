import React from 'react';

export default function Navigations(props) {
  return (
    <div className={props.className} />
  );
}

Navigations.propTypes = {
  className: React.PropTypes.string,
};
