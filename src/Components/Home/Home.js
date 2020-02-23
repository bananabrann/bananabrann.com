import React from "react"
import { Link } from "react-router-dom"
import "./Home.scss"

import Break from "../Break/Break"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const DOCUMENT_TITLE = "bananabrann - Home"
const bank = ["Enjoys bananas so much he branded himself with it",
              "Doesn't own a banana plantation",
              "Did you know? Natural bananas have seeds, and are totally grose",
              "Now plays clarinet!"
]

class Home extends React.Component {
  constructor() {
    super();
    this.state = { 
      greetingMessage: "Self-taught software developer",
      previousGreetingMessage: null
    };
    this.updateRandomGreetingMessage = this.updateRandomGreetingMessage.bind(this)
  }

  render() {
    return (
      <div className="Home">
        <Container>
          <Row>
            <Col>
              <Row>
                <div id="homepage-header">
                  <h1>Brannan</h1>
                  <h2 id="homepage-message"><b></b>{this.state.greetingMessage}</h2> 
                </div>
              </Row>
            </Col>
          </Row>
          
          <Row>
            <Break />
          </Row>

          <Row>
            <Col lg={3}>
              <Row id="media-links">
                <a href="https://www.linkedin.com/in/pbrann/">
                  <i class="fab fa-linkedin-in fa-2x"></i>
                </a>
                <a href="https://www.github.com/bananabrann">
                  <i class="fab fa-github-alt fa-2x"></i>
                </a>
                <a href="https://stackoverflow.com/users/11057120/bananabrann?tab=profile">
                  <i class="fab fa-stack-overflow fa-2x"></i>
                </a>
              </Row>
              <Row className="left-nav-item"><p>Resume</p></Row>
              <Row className="left-nav-item"><p>Lab</p></Row>
            </Col>

            <Col id="home-content-row">
              <h3>About</h3>
              <p>My name is Pierson Brannan, and I'm a self-taught developer, prior U.S. Marine, and tuba player from West Texas.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  updateRandomGreetingMessage() {
    let newMessage = bank[Math.floor(Math.random()*bank.length)] 
    while(newMessage == this.state.previousGreetingMessage) newMessage = bank[Math.floor(Math.random()*bank.length)]
    this.setState({
      previousGreetingMessage: this.state.greetingMessage,
      greetingMessage: newMessage
    })
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE
    
    this.timeout = setInterval(() => {
      this.updateRandomGreetingMessage()
    }, 4200);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

export default Home
