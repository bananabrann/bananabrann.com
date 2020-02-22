import React from "react"
import { Link } from "react-router-dom"
import "./Home.scss"

import Break from "../Break/Break"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const DOCUMENT_TITLE = "bananabrann - Home"

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Container>
          <Row>
            <Col>
              <Row>
                <div id="homepage-header">
                  <h1>Bananabrannan</h1>
                  <h2><b>PIERSON L. BRANNAN</b> - Enjoys Bananas So Much He Branded Himself With It</h2> 
                </div>
              </Row>
              <Row id="media-links">
                <a href="https://www.linkedin.com/in/pbrann/">
                  <i class="fab fa-linkedin-in fa-3x"></i>
                </a>
                <a href="https://www.github.com/bananabrann">
                  <i class="fab fa-github-alt fa-3x"></i>
                </a>
                <a href="https://stackoverflow.com/users/11057120/bananabrann?tab=profile">
                  <i class="fab fa-stack-overflow fa-3x"></i>
                </a>
              </Row>
            </Col>
          </Row>
          <Row>
            <Break />
          </Row>
        </Container>

        {/* <div id="lower">
          <a href="https://www.linkedin.com/in/pbrann/">
            <i class="fab fa-linkedin-in fa-3x"></i>
          </a>
          <a href="https://www.github.com/bananabrann">
            <i class="fab fa-github-alt fa-3x"></i>
          </a>
          <a href="https://stackoverflow.com/users/11057120/bananabrann?tab=profile">
            <i class="fab fa-stack-overflow fa-3x"></i>
          </a>
        </div> */}
      </div>
    )
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE
  }
}

export default Home
