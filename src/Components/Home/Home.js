import React from "react"
import { Link } from "react-router-dom"

import "./Home.scss"
import Break from "../Break/Break"

import Alert from "react-bootstrap/Alert"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const LINK_RESUME = "/resume"
const DOCUMENT_TITLE = "bananabrann - Home"
const bank = [
  "Enjoys bananas so much he branded himself with it",
  "Doesn't own a banana plantation",
  "Did you know? Natural bananas have seeds, and are totally grose",
  "Now plays clarinet!"
]

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      greetingMessage: "Self-taught software developer",
      previousGreetingMessage: null,
      displayAlert: false
    }
    // prettier-ignore
    this.updateRandomGreetingMessage = this.updateRandomGreetingMessage.bind(this)
    // prettier-ignore
    this.handleNotAvailableLinkClick = this.handleNotAvailableLinkClick.bind(this)
  }

  render() {
    let alert

    if (this.state.displayAlert) {
      alert = (
        <Alert
          variant="warning"
          onClose={() => this.setState({ displayAlert: false })}
          dismissible
        >
          <Alert.Heading><i class="fas fa-wrench"></i> Under construction</Alert.Heading>
          <p>
            This section is a Work In Progress, and unavailable at this time. Be sure and come back!
          </p>
        </Alert>
      )
    }

    return (
      <div className="Home">
        {alert}
        <Container>
          <Row>
            <Col>
              <Row>
                <div id="homepage-header">
                  <h1>Brannan</h1>
                  <h2 id="homepage-message">
                    <b></b>
                    {this.state.greetingMessage}
                  </h2>
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
                  <i class="fab fa-github fa-2x"></i>
                </a>
                <a href="https://stackoverflow.com/users/11057120/bananabrann?tab=profile">
                  <i class="fab fa-stack-overflow fa-2x"></i>
                </a>
              </Row>

              <Row className="left-nav-item">
                <Link to={LINK_RESUME}>
                  <p className="link link-watercourse">Resume</p>
                </Link>
              </Row>

              <Row className="left-nav-item">
                <a onClick={this.handleNotAvailableLinkClick}>
                  <p className="link not-available">Software Showcase</p>
                </a>
              </Row>

              <Row className="left-nav-item">
                <a onClick={this.handleNotAvailableLinkClick}>
                  <p className="link not-available">Visit Tuba Profile</p>
                </a>
              </Row>
            </Col>

            <Col id="home-content-row">
              <h3>About</h3>
              <p>
                I'm <b>Pierson Brannan</b>, and I'm a self-taught developer,
                prior U.S. Marine, and tuba player from West Texas. I came to
                Washington D.C. when landing a full-time professional tuba
                player position with "The Commandant's Own", the United States
                Marine Drum & Bugle Corps. It was a great experience, performing
                for some of the America's highest ranking officials and at
                venues I'll never forget, but I've since left, and have stuck
                around the Washington area.
              </p>
              <br />
              <p>
                My career has been working on whatever needs to be worked on.
                For the past 6 months however, I've been an automation developer
                –making programs that automate non-programmer's tasks. I program
                my automation scripts in Python and Bash, while doing web
                development work in primarily React and Django.
              </p>

              <Row id="techstack-icons" className="center-me">
                <i class="fab fa-js fa-2x"></i>
                <i class="fas fa-terminal fa-2x"></i>
                <i class="fab fa-python fa-2x"></i>
                <i class="fab fa-java fa-2x"></i>
                <i class="fab fa-sass fa-2x"></i>
                <i class="fab fa-react fa-2x"></i>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  handleNotAvailableLinkClick() {
    this.setState({
      displayAlert: true
    })
  }

  updateRandomGreetingMessage() {
    let newMessage = bank[Math.floor(Math.random() * bank.length)]
    while (newMessage == this.state.previousGreetingMessage)
      newMessage = bank[Math.floor(Math.random() * bank.length)]
    this.setState({
      previousGreetingMessage: this.state.greetingMessage,
      greetingMessage: newMessage
    })
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE

    this.timeout = setInterval(() => {
      this.updateRandomGreetingMessage()
    }, 4200)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
}

export default Home
