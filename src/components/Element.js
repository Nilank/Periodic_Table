import React, { Component } from "react";
import { elements } from "./seed";

export default class Element extends Component {
  state = {
    hover: false
  };

  infoBox = e => {
    this.props.showInfo(this.props.num);
  };

  onMouseEnter = e => {
    this.setState({ hover: true });
  };

  onMouseLeave = e => {
    this.setState({ hover: false });
  };

  render() {
    let { num } = this.props;
    let element = elements[num];
    return (
      <div
        title={element.name}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.infoBox}
        className={`element element-${num} ${element.category} ${
          this.state.hover ? "active" : ""
        }`}
      >
        <div className="number">{element.number}</div>
        <div className="symbol">{element.symbol}</div>
        <div className="element-name">{element.name}</div>
      </div>
    );
  }
}
