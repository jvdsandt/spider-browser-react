import React from "react";

class ClassInstSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.switch = this.switch.bind(this);
  }

  switch() {
    this.props.onSwitch();
  }

  render() {
    if (this.props.instanceSide) {
      return (
        <div>
          <strong>Inst. Side</strong>{" "}
          <button onClick={e => this.switch()}>Class Side</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={e => this.switch()}>Inst. Side</button>{" "}
          <strong>Class Side</strong>
        </div>
      );
    }
  }
}

export default ClassInstSwitch;
