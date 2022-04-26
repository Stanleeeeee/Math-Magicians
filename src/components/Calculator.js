/* eslint-disable */
import React from "react";
import Display from "./Display";
import ButtonsContainer from "./Buttons";

/* Calculator container component */

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <Display />
        <ButtonsContainer />
      </div>
    );
  }
}
