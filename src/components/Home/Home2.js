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
              specializing in responsive web interfaces, cross-platform mobile
              apps, and powerful backend systems.
              <br />
              <br />
              My expertise lies in JavaScript frameworks like
              <i>
                <b className="purple">
                  {" "}
                  React.js, React Native, Node.js, Vue.js and Angular.js.{" "}
                </b>
              </i>
              Throughout my career, I've had the opportunity to lead projects at
              big names like Walmart and Amazon, where I handled everything from
              frontend development with{" "}
              <i>
                <b className="purple">React and Next.js</b>
              </i>{" "}
              to backend systems with{" "}
              <i>
                <b className="purple">Node.js and GraphQL.</b>
              </i>{" "}
              <br />
              <br />
              I'm well-versed in integrating third-party APIs, enhancing app
              functionality, and conducting extensive testing to squash bugs
              before they hit production.
              <br />
              <br />
              Let's dive into our discussion and explore how my experience can
              align with the opportunities at your organization!
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
                  href="https://github.com/lukeDev19"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/luke-ford-118386303"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
