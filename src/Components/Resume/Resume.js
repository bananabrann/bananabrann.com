import React from "react";
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Resume.scss";

const DOCUMENT_TITLE = "bananabrann - Resume";
const HOME_PATH = "/";

class Resume extends React.Component {
    render() {
        return (
            <div className="Resume">
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
                            <h3>Experience</h3>
                            <h4>Black Willow, Inc.</h4>
                            {/* TODO: Make an h5 */}
                            <h5>Web Developer - Frontend and API Gateway</h5>
                            <p>March 2020 to April 2020</p>
                            <ul>
                                <li><p>
                                    - Reworked Black Willow's website using Pug, 
                                    Bootstrap, and a little bit of SCSS, with 
                                    compiling automation with shell scripts.
                                </p></li>
                                <li><p>
                                    - Worked on a Kong API Gateway authentication 
                                    plugin using Lua, Docker, and LDAP (Lightweight
                                    Directory Access Protocol)
                                </p></li>
                            </ul>
                            
                            <br />
                            
                            <h5>Software Developer - Automation and Qlik Sense</h5>
                            <p>April 2019 to March 2020</p>
                            <ul>
                                <li><p>
                                    - Developed and integrated a custom front-end 
                                    dark mode extension using CSS, JavaScript.
                                </p></li>
                                <li><p>
                                    - Automated the data cleaning and handling of 
                                    data prior to entering a Qlik application
                                    with Bash, Python, and the Qlik Sense Data
                                    Load Script to produce a clean, effective data
                                    model.
                                </p></li>
                                <li><p>
                                    Successfully deployed a Qlik application to
                                    government servers.
                                </p></li>
                            </ul>

                            <br />

                            <h4>U.S. Marines</h4>
                            <h5>Corporal, Professional Tuba Player</h5>
                            <p>November 2014 to November 2018</p>

                            <br />

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
