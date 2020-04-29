import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Home.scss";

var THREE = require("three");

function displayBackground() {
  console.log("Hello from displayBackground()");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ colo: 0x0000ff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera);
  }
  animate();
}

function Home() {
  displayBackground();

  return (
    <div className="Home">
      <h1 className="yellow">Pierson L. Brannan</h1>
      <p>
        Hi there! I'm Pierson. A Software Developer, prior U.S. Marine, former
        professional tuba player, and aquarium lover.
      </p>
      <p>
        I'm self-taught and self-made, I don't own nine tech startups, and I
        don't have an arbitrary LinkedIn job description. I like coding, and
        enjoy figuring things out.
      </p>
      <h4 className="emerald">Let's connect!</h4>
      <span id="social-media">
        <a href="https://linkedin.com/in/pbrann">
          <p>LinkedIn</p>
        </a>
        <a href="https://github.com/bananabrann">
          <p>GitHub</p>
        </a>
      </span>

      {/* <Link to="/lab">
        <h3 className="grape">Lab</h3>
      </Link> */}
    </div>
  );
}

export default Home;
