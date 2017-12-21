import React from 'react';
// import 'isomorphic-fetch';
import { connect } from 'react-redux';

import { PieComponent, pieConnect } from 'za-piehelper';

import * as action from './action';
import rootSaga from '../../rootSaga';

class TestComp extends PieComponent {
  static loadInitialData(store) {
    return super.loadInitData(store, rootSaga, action.testAction);
  }

  componentDidMount() {
    this.props.testAction();
  }

  render() {
    return (
      <div>
        <h2>{this.props.test}</h2>
      </div>
    );
  }
}

export default pieConnect(
  state=>({test: state.reducer.test.text})
)(TestComp);
