import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              Hey there! I'm Luke, a seasoned
              <i>
                <b className="purple"> senior software engineer </b>
              </i>
              specializing in
              <i>
                <b className="purple"> React and JavaScript </b>
              </i>with a background in full-stack development.
              <br />
              <br />
              My journey in the tech world spans over 10 years, where I've mastered the art of developing
              <i>
                <b className="purple"> responsive web interfaces and mobile applications </b>
              </i>
              using cutting-edge frameworks like
              <i>
                <b className="purple"> React Native.</b>
              </i>
              <br />
              <br />
              At Walmart, I modernized old codebases using
              <i>
                <b className="purple"> React Hook & Redux,</b>
              </i> pushing the boundaries of functionality.
              Amazon saw me managing
              <i>
                <b className="purple"> frontend </b>
              </i>
              and
              <i>
                <b className="purple"> backend</b>
              </i> projects, utilizing technologies like
              <i>
                <b className="purple"> React.js </b>
              </i>
              and
              <i>
                <b className="purple"> Node.js </b>
              </i>
              to enhance user experiences.
              <br />
              <br />
              I'm all about staying ahead in the tech game, constantly seeking innovative solutions to deliver top-tier results.
              <br />
              <br />
              I have utilized the
              <i>
                <b className="purple"> Django framework </b>
              </i>
              for
              <i>
                <b className="purple"> backend development </b>
              </i>
              , leveraging its robust features and functionality to create scalable 
              <i>
                <b className="purple"> web applications</b>
              </i>.
              <br />
              <br />
              Let's dive into our discussion and explore how my experience can align with the opportunities at your organization!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
