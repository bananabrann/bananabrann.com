import React from 'react';
import { Link } from "react-router-dom";

const RESUME_PATH = "/resume";
const LABS_PATH = "/labs";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <div className="Home">
            <div className="home-right-area">
                <Link to={RESUME_PATH}>
                    <div className="home-nav-box-area">
                        <h3>Resume</h3>
                        <p>View or download resume</p>
                    </div>
                </Link>
                <Link to={LABS_PATH}>
                    <div className="home-nav-box-area">
                        <h3>Lab</h3>
                        <p>View projects and works</p>
                    </div>
                </Link>
            </div>
        </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Home;
