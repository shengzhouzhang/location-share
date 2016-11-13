import React, { Component } from 'react';
import Map from './Map';
import Location from './Location';
import positionStore from '../../client/stores/position';

export default class AlertPage extends Component {
  state = {
    position: positionStore.getState(),
  }
  componentDidMount() {
    this.subscribePositionStore();
  }
  componentWillUnMount() {
    this.unsubscribePositionStore();
  }
  subscribePositionStore = () => {
    this.unsubscribePositionStore = positionStore.subscribe(() => {
      this.setState({ position: positionStore.getState() });
    });
  }
  render() {
    const { position } = this.state;
    return (
      <div styleName="page--map-page">
        { position ? <Map position={position} /> : null }
        <Location />
      </div>
    );
  }
}
