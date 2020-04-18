import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as THREE from "three";
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
                    <Row>
                        <h1>Pierson Brannan</h1>
                    </Row>

                    <Row>
                        <p>
                            I'm a software developer in the U.S. Before coding,
                            I was a professional tuba player, performing gigs
                            internaionally full-time. I was in the U.S. Marines,
                            and love aquascaping (aquariums with a focus of
                            landscape and plats)
                        </p>
                    </Row>

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

        /*
        
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        */
    }
}

export default Home;
