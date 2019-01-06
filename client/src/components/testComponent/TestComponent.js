import React from 'react';
import axios from 'axios';

class TestComponent extends React.Component {
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_BASEURL}api/v1/health-check`)
      .then(resp => {
        console.log(resp);
      });
  }

  render() {
    return <div>I'm async, but i am ready</div>;
  }
}

export default TestComponent;
