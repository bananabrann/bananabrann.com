import React from "react";
import "./GrandparentsTV.css";

const DOC_TITLE = "Brannan TV";

class GrandparentsTV extends React.Component {
  // TODO: Do I need this?
  constructor() {
    super();
    this.state = {
      someKey: "someValue"
    };
  }

  render() {
    return (
      <div id="g-tv">
        <p>Hello grandma and grandpa!</p>
        <div id="g-tv-main-area">
            <div className="tile" id="tile-youtube">Youtube</div>
            <div className="tile" id="tile-youtube">Netflix</div>
        </div>
        <div id="g-tv-secondary-area">
            <div className="tile" id="tile-wikipedia">Wiki</div>
            <div className="tile" id="tile-google-maps">Google Maps</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.title = DOC_TITLE;
  }
}

export default GrandparentsTV;
