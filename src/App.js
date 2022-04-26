import React from 'react';
import Calculator from './components/Calculator';

export default class CalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}
