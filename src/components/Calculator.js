import React from 'react';
import Display from './Display';
import ButtonsContainer from './Buttons';

/* Calculator container component */

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Display />
        <ButtonsContainer />
      </div>
    );
  }
}
