import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import Break from "../Break/Break";

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DOCUMENT_TITLE = "bananabrann - Home";
// FIXME - Links append to local instead of redirect.
const LINK_DEBBIE = "https://github.com/bananabrann/debbie"
const LINK_RESUME = "/resume";
const LINK_GTV = "http://gtv.bananabrann.com";
const LINK_TRADERS ="http://traders.bananabrann.com";

const bank = [
    "Enjoys bananas so much he branded himself with it",
    "Doesn't own a banana plantation",
    "Did you know? Natural bananas have seeds, and are totally gross",
    "Now plays clarinet!"
];

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            greetingMessage: "Self-taught software developer",
            previousGreetingMessage: null,
            displayAlert: false
        };
        // prettier-ignore
        this.updateRandomGreetingMessage = this.updateRandomGreetingMessage.bind(this)
        // prettier-ignore
        this.handleNotAvailableLinkClick = this.handleNotAvailableLinkClick.bind(this)
    }

    render() {
        let alert;

        if (this.state.displayAlert) {
            alert = (
                <Alert
                    variant="warning"
                    onClose={() => this.setState({ displayAlert: false })}
                    dismissible
                >
                    <Alert.Heading>
                        <i class="fas fa-wrench"></i> Under construction
                    </Alert.Heading>
                    <p>
                        This section is a Work In Progress, and unavailable at
                        this time. Be sure and come back!
                    </p>
                </Alert>
            );
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
                        <Col xl={3}>
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

                            <Row id="left-nav-area">
                                <Col>
                                    <Row className="left-nav-item">
                                        <Link to={LINK_RESUME}>
                                            <h4 className="link">
                                                View Resume
                                            </h4>
                                        </Link>
                                    </Row>

                                    <Row className="left-nav-item">
                                        <a href={LINK_GTV}>
                                            <h4 className="link">
                                                Grandparents-TV
                                            </h4>
                                        </a>
                                    </Row>

                                    {/* <Row className="left-nav-item">
                                        <a href={LINK_TRADERS}>
                                            <h4 className="link">
                                                Traders of the North
                                            </h4>
                                        </a>
                                    </Row>

                                    <Row className="left-nav-item">
                                        <a href={LINK_DEBBIE}>
                                            <h4 className="link">
                                                Debbie the Robot
                                            </h4>
                                        </a>
                                    </Row>

                                    <Row className="left-nav-item">
                                        <h4 onClick={this.handleNotAvailableLinkClick}>
                                            <p className="link not-available">
                                                Kong LDAP Auth Plugin
                                            </p>
                                        </h4>
                                    </Row> */}
                                </Col>
                            </Row>
                        </Col>

                        <Col id="home-content-row">
                            <h3>About</h3>
                            <p>
                                I'm <b>Pierson Brannan</b>, a software developer
                                in the United States. Prior to coding, I
                                traveled the U.S. and Europe for four years
                                playing tuba professionally at some pretty big
                                gigs. I was in the U.S. Marines, and am into the
                                hobby of growing and presenting live aquatic
                                plants called aquascaping.
                            </p>
                            <br />
                            <p>
                                I've mostly done front-end web development and
                                making JavaScript extensions for a business
                                intelligence software called Qlik. The majority
                                of my experience is byfar React and web styling
                                (specifically SCSS), though recently I've been
                                working with Lua and Kong API Gateway at work.
                            </p>
                            <br />
                            <p>
                                For a full list of technologies and languages I
                                can work with, please see my Resume.
                            </p>

                            {/* <h3>Works</h3>
                            <h4>Traders of the North</h4>
                            <p>React, JavaScript ES6, SCSS, Shell</p>
                            <br />
                            <p>The longboat</p> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    handleNotAvailableLinkClick() {
        this.setState({
            displayAlert: true
        });
    }

    updateRandomGreetingMessage() {
        let newMessage = bank[Math.floor(Math.random() * bank.length)];
        while (newMessage == this.state.previousGreetingMessage)
            newMessage = bank[Math.floor(Math.random() * bank.length)];
        this.setState({
            previousGreetingMessage: this.state.greetingMessage,
            greetingMessage: newMessage
        });
    }

    componentDidMount() {
        document.title = DOCUMENT_TITLE;

        this.timeout = setInterval(() => {
            this.updateRandomGreetingMessage();
        }, 4200);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
}

export default Home;
