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
            <div className="tile t-out" id="tile-youtube">
                <a href="https://www.youtube.com">
                    <img src={picYoutube} />
                </a>
            </div>
            <div className="tile t-out" id="tile-netflix"><img src={picNetflix} /></div>
        </div>
        <div id="g-tv-secondary-area">
            <div className="tile t-out" id="tile-wikipedia"><img src={picWikipedia} /></div>
            <div className="tile t-out" id="tile-google-maps"><img src={picGMaps} /></div>
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
