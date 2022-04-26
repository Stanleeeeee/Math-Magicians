import React from 'react';

/* Buttons container component */
export default class ButtonsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const buttons = [
      'AC',
      '+/-',
      '%',
      '÷',
      7,
      8,
      9,
      'x',
      4,
      5,
      6,
      '-',
      1,
      2,
      3,
      '+',
      0,
      '.',
      '=',
    ];

    return (
      <div className="buttons-container">
        {buttons.map((button) => (
          <button type="button" key={button}>
            {button}
          </button>
        ))}
      </div>
    );
  }
}
