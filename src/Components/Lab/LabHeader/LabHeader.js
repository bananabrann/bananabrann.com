import React from "react";

class LabHeader extends React.Component {
  render() {
    return (<div>LAB HEADER</div>);
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    });
  }
}

export default LabHeader;
