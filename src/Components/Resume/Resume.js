import React from "react";
import Header from "../Header/Header";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Resume.scss";

const DOCUMENT_TITLE = "bananabrann - Resume";
const HOME_PATH = "/";

class Resume extends React.Component {
    constructor() {
        super();
        this.state = {
            displayAlert: true
        }
    }

    render() {
        let alert;

        if (this.state.displayAlert) {
            alert = (
                <Alert
                    variant="info"
                    onClose={() => this.setState({ displayAlert: false })}
                    dismissible
                >
                    <Alert.Heading>
                        <i class="fas fa-newspaper"></i> Want more info?
                    </Alert.Heading>
                    <p>
                        The online resume is intended for a brief overview
                        of my career, not as a subsitution for an actual
                        resume. To view my resume in its fullest details, 
                        please email me at <b>plbrannan95@gmail.com</b>
                    </p>
                </Alert>
            );
        }

        return (
            <div className="Resume">
                {alert}
                <Container>
                    <Row>
                        <Col>
                            <p><b>Phone Number Hidden Online</b></p>
                            <p><b>Email: plbrannan95@gmail.com</b></p>
                            <p><b>U.S. Natural Born Citizen</b></p>
                            <p><b>Holds Active Clearances</b></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* SECTION */}
                            <h3>Experience</h3>
                            <h4>Black Willow, Inc.</h4>
                            {/* TODO: Make an h5 */}
                            <h5>Web Developer - Frontend and API Gateway</h5>
                            <p>March 2020 to April 2020</p>
                            <p>React, SCSS, Kong API Gateway, Lua, LDAP</p>
                            <br />
                            
                            <h5>Software Developer - Automation and Qlik Sense</h5>
                            <p>April 2019 to March 2020</p>
                            <p>Python, Bash, Qlik Sense, SQL</p>

                            <br />

                            <h4>U.S. Marines</h4>
                            <h5>Corporal, Professional Tuba Player</h5>
                            <p>November 2014 to November 2018</p>

                            <br />

                            {/* SECTION */}
{/* 
                            <h3>Certification</h3>
                            <h4>AWS Cloud Practitioner</h4>
                            <p>Cert #333333333</p>
                            <br />
                            <h4>Security+</h4>
                            <p>Cert #444-FFF</p>

                            <br /> */}

                            {/* SECTION */}
                            <h3>Education</h3>
                            <h4>B.S. Software Engineering</h4>
                            <p>Arizona State University, October 2019 to Present</p>

                            <br />

                            <h4>C.S.C. Web Development</h4>
                            <p>General Assembly Coding Bootcamp, October 2018 to March 2019</p>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    componentDidMount() {
        document.title = DOCUMENT_TITLE;
    }
}

export default Resume;
