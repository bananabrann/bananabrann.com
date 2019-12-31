import React from "react";
import "./GrandparentsTV.css";
import picGMaps from "../../img/g-tv/google-maps.png";
import picNetflix from "../../img/g-tv/netflix.png";
import picWikipedia from "../../img/g-tv/wikipedia.png";
import picYoutube from "../../img/g-tv/youtube.png";

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
            <div className="tile" id="tile-youtube"><h4>Youtube</h4></div>
            <div className="tile" id="tile-netflix"><h4>Netflix</h4></div>
        </div>
        <div id="g-tv-secondary-area">
            <div className="tile" id="tile-wikipedia"><h5>Wikipedia</h5></div>
            <div className="tile" id="tile-google-maps"><h5>Google Maps</h5></div>
        </div>
        <div id="g-tv-help">Help Me!</div>
      </div>
    );
  }

  componentDidMount() {
    document.title = DOC_TITLE;
  }
}

export default GrandparentsTV;
