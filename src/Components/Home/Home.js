import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Home.scss";

const LINK_RESUME = "/resume";
const DOCUMENT_TITLE = "bananabrann - Home";

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="Home">
                <Container fluid>
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
                </Container>
            </div>
        );
    }

    componentDidMount() {
        document.title = DOCUMENT_TITLE;
    }
}

export default Home;
