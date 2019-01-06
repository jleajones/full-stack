import React from 'react';
import API from '../../api';

class TestComponent extends React.Component {
  componentDidMount() {
    API.get(`api/v1/health-check`).then(resp => {
      console.log(resp);
    });
  }

  render() {
    return (
      <div>
        <span>Test</span> I'm async, but i am ready
      </div>
    );
  }
}

export default TestComponent;
