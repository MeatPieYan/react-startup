import React from 'react';


class TestComp extends React.Component {
  static loadInitialData() {
    console.log('123aaa')
  }

  render() {
    return (
      <div>
        <h2>aaa</h2>
      </div>
    )
  }
}

export default TestComp;