import React from 'react';

const DOCUMENT_TITLE = "BananaBrann.com - Resume";

class Resume extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE;
  }
}

export default Resume;