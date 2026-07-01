import React from "react";
import "bootswatch/dist/cosmo/bootstrap.min.css"; // Added this :boom:
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faPatreon } from "@fortawesome/free-brands-svg-icons";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/larry.png";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Carousel from "react-bootstrap/Carousel";
import {
  faMoon,
  faSun,
  faPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import helpContent from "./helpContent.json";

const dSort = (a: any, b: any) => {
  if (a > b) return +1;
  if (a < b) return -1;
  return 0;
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const GamesCarousel = () => {
    return !helpContent ? (
      <></>
    ) : (
      <Carousel>
        {Object.entries(helpContent)
          .filter(
            ([game, item]: any) =>
              item.active === null || item.active !== false,
          )
          .sort((a, b) => {
            return dSort(a[0], b[0]);
          })
          .map(([game, item]: any) => {
            return (
              <Carousel.Item>
                <Image
                  className="img-fluid"
                  src={`/img/games/${game}.${!item.gif ? "png" : "gif"}`}
                />
                <Carousel.Caption
                  className={
                    !darkMode ? "rounded text-dark" : "rounded text-light"
                  }
                  style={{ backgroundColor: "rgba(52, 52, 52, 0.8)" }}
                >
                  <h3>{!item.nicename ? game : item.nicename}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    );
  };

  const TopGGBadge = () => {
    return (
      <span>
        <a href="https://top.gg/bot/1026495225759277146">
          <img
            src="https://top.gg/api/widget/servers/1026495225759277146.svg"
            alt="Server Count"
          />
        </a>
        <a href="https://top.gg/bot/1026495225759277146">
          <img
            src="https://top.gg/api/widget/upvotes/1026495225759277146.svg"
            alt="Vote Count"
          />
        </a>
      </span>
    );
  };

  const UptimeBadge = () => {
    return (
      <iframe
        title="Larry Status"
        src={`https://larrygames.betteruptime.com/badge?theme=${!darkMode ? "light" : "dark"}`}
        width={250}
        height={30}
        style={{ colorScheme: "normal" }}
      ></iframe>
    );
  };
  const Privacy = () => {
    return (
      <>
        <h5 id="privacy">Privacy Policy</h5>
        <p>
          The use of this application ("Bot") in a server requires the
          collection of some specific user data ("Data"). The Data collected
          includes, but is not limited to Discord user ID values. Use of the Bot
          is considered an agreement to the terms of this Policy.
        </p>
        <h6>Access to Data</h6>
        <p>
          Access to Data is only permitted to Bot's developers, and only in the
          scope required for the development, testing, and implementation of
          features for Bot. Data is not sold, provided to, or shared with any
          third party, except where required by law or a Terms of Service
          agreement.
        </p>
        <h6>Data Storage</h6>
        <p>
          Data is stored in a MySQL database hosted by Pebblehost. The database
          is secured to prevent external access, however no guarantee is
          provided and the Bot owners assume no liability for the unintentional
          or malicious breach of Data. In the event of an unauthorised Data
          access, users will be notified through the Discord client application.
        </p>
        <h6>User Rights</h6>
        <p>
          At any time, you have the right to request to view the Data pertaining
          to your Discord account. You may submit a request through the Larry
          Games support server. You have the right to request the removal of
          relevant Data.
        </p>
        <h6>Underage Users</h6>
        <p>
          The use of the Bot is not permitted for minors under the age of 13, or
          under the age of legal consent for their country. This is in
          compliance with the
          <a href="https://discord.com/terms">Discord Terms of Service</a>. No
          information will be knowingly stored from an underage user. If it is
          found out that a user is underage we will take all necessary action to
          delete the stored data.
        </p>
        <h6>Questions</h6>
        <p>
          If you have any questions or are concerned about what data might be
          being stored from your account, ask in the
          <a href="https://discord.gg/r9WZ4ywbEx">Larry Games support server</a>
          . For more information check the
          <a href="https://discord.com/terms">Discord Terms of Service</a>.
        </p>
      </>
    );
  };

  const TermsConditions = () => {
    return (
      <>
        <h5 id="conditions">Conditions</h5>
        <p>
          General conditions regarding <strong>Larry Games</strong>:
        </p>
        <ul>
          <li>
            Our terms and conditions apply to each and every user of
            <strong>Larry Games</strong>.
          </li>
          <li>
            By inviting <strong>Larry Games</strong> to your server, you agree
            to these terms of service and the future terms which we may add
            after a notice.
          </li>
        </ul>

        <hr />

        <h5 id="terms">Terms of Use</h5>
        <ol>
          <li>
            Intentional command spam or attempts to crash the bot should not be
            made.
          </li>
          <li>
            <strong>Larry Games</strong> should not be used in bot spam servers
            which cause command spam.
          </li>
          <li>
            The <strong>Larry Games</strong> team reserves the rights to
            prohibit any server or user from using
            <strong>Larry Games</strong>.
          </li>
          <li>
            The <strong>Larry Games</strong> team have the rights to update
            terms of service anytime with a notice in the support server (Larry
            Land).
          </li>
        </ol>
      </>
    );
  };

  const LarryNav = () => {
    return (
      <>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="Larry"
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
              />{" "}
              <h1 className="d-inline-block">Larry Games</h1>
            </Navbar.Brand>
            <TopGGBadge />
            <UptimeBadge />
          </Container>
        </Navbar>
      </>
    );
  };

  const InviteButtons = () => {
    return (
      <Row className="p-3 text-center justify-content-center">
        <Col md={8} sm={12}>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="primary"
              size="lg"
              href="https://discord.com/oauth2/authorize?client_id=1026495225759277146"
            >
              <FontAwesomeIcon icon={faPlus} /> Invite Larry
            </Button>
            <Button
              variant="success"
              size="lg"
              href="https://top.gg/bot/1026495225759277146/vote"
            >
              <FontAwesomeIcon icon={faCheck} /> Vote
            </Button>
            <Button
              variant="warning"
              size="lg"
              href="https://patreon.com/larrygamesbot"
            >
              <FontAwesomeIcon icon={faPatreon} /> Patreon
            </Button>
            <Button
              variant="primary"
              size="lg"
              href="https://discord.gg/r9WZ4ywbEx"
            >
              <FontAwesomeIcon icon={faDiscord} /> Join Larry Land
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    );
  };

  const toggleMode = (e: any) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const [showModal, setShowModal] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const toggleModal = (privacy = false) => {
    setShowPrivacy(privacy);
    setShowModal(!showModal);
  };
  const doModalLink = (e: any, privacy = false) => {
    e.preventDefault();
    toggleModal(privacy);
  };
  return (
    <>
      <Helmet
        bodyAttributes={{ "data-bs-theme": !darkMode ? "light" : "dark" }}
      ></Helmet>
      <LarryNav />
      <React.StrictMode>
        <Container>
          <Row className="justify-content-center p-3">
            <Col md={8} sm={12}>
              <Card border="primary">
                <Row>
                  <Col md={4}>
                    <Card.Img
                      variant="rounded-start img-fluid"
                      src="https://larrygames.pages.dev/img/larryland/welcome.png"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>Who is Larry?</Card.Title>
                      <Card.Text>
                        Host Discord game nights easily with Larry Games, a
                        group game bot with various unique games!
                        <br />
                        <br />
                        <b>With Larry you can...</b>
                        <br />
                        <ul>
                          <li>
                            Host games and give out your own server rewards,
                          </li>
                          <li>Encourage chat and activity,</li>
                          <li>have fun!</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <InviteButtons />
          <Row className="justify-content-center p-3">
            <Col md={8} sm={12}>
              <Card border="danger">
                <Row>
                  <Col md={4} className="d-md-none">
                    <Card.Img
                      variant="rounded-start img-fluid"
                      src="https://larrygames.pages.dev/img/larryland/hosting.png"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>Larry's Games</Card.Title>
                      <Card.Text>
                        <GamesCarousel />
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md={4} className="d-none d-md-block">
                    <Card.Img
                      variant="rounded-start img-fluid"
                      src="https://larrygames.pages.dev/img/larryland/hosting.png"
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <InviteButtons />
          <Row className="justify-content-center p-3">
            <Col md={8} sm={12}>
              <Card border="warning">
                <Row>
                  <Col md={4}>
                    <Card.Img
                      variant="rounded-start img-fluid"
                      src="https://larrygames.pages.dev/img/werewolf/villager.png"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>Larry Land Exclusives</Card.Title>
                      <Card.Text>
                        Join LarryLand to try new games in development, get
                        support with Larry, as well as other activities such as:
                        <br />
                        <ul>
                          <li>LarryLand Casino</li>
                          <li>Larry Farming</li>
                          <li>Larry Fishing</li>
                          <li>Larry Mega Store</li>
                          <li>and more!</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <InviteButtons />
          <Row className="justify-content-center p-3">
            <Col md={8} sm={12}>
              <Card border="light">
                <Row>
                  <Col md={4} className="d-md-none">
                    <Card.Img
                      variant="rounded-start img-fluid"
                      src="https://larrygames.pages.dev/img/1771669154004_1.png"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>Larry Coin</Card.Title>
                      <Card.Text>
                        <p>
                          Larry Coin is Larry's in-game currency. Members can
                          spend Larry Coin on costmetics and other ways to make
                          Larry more enjoyable.
                        </p>
                        <p>
                          Become a Larry Partner and your members can earn coin
                          faster!
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md={4} className="d-none d-md-block">
                    <Card.Img
                      variant="rounded-start img-fluid"
                      src="https://larrygames.pages.dev/img/1771669154004_1.png"
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <InviteButtons />
          <Row className="justify-content-center p-3">
            <Col md={8} sm={12}>
              <Card border="danger">
                <Row>
                  <Col md={4}>
                    <Card.Img
                      variant="rounded-start img-fluid"
                      src="https://larrygames.pages.dev/img/larryland/patreon.png"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>Supporting Larry</Card.Title>
                      <Card.Text>
                        <p>
                          <b>
                            Larry's games are free to play and always will be.
                          </b>
                        </p>
                        <p>
                          To keep Larry free for everyone,{" "}
                          <b>Voting on Top.GG</b>, subscribing to{" "}
                          <b>Larry's Patreon</b> and <b>Server Boosting</b> are
                          the best ways to help promote and support Larry. All
                          funds raised go towards hosting services as well as
                          Nitro giveaways and more.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <InviteButtons />
        </Container>

        <Navbar className="p-3 bg-body-tertiary">
          <Container fluid>
            <Col md={6} sm={12}>
              <small>
                <a
                  href="/"
                  className="text-decoration-none text-muted"
                  onClick={(e) => doModalLink(e, false)}
                >
                  Terms & Conditions
                </a>
              </small>
              <br />
              <small>
                <a
                  href="/"
                  className="text-decoration-none text-muted"
                  onClick={(e) => doModalLink(e, true)}
                >
                  Privacy Policy
                </a>
              </small>
            </Col>
            <Col md={6} sm={12} className="text-end text-muted">
              <small>
                &copy; 2022-2026 by{" "}
                <span className="font-monospace">@re-mark-able</span>
              </small>{" "}
              <a href="/" onClick={(e) => toggleMode(e)}>
                <FontAwesomeIcon icon={!darkMode ? faSun : faMoon} />
              </a>
            </Col>
          </Container>
        </Navbar>
        <Modal show={showModal} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {!showPrivacy ? "Terms of Use" : "Privacy Policy"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!showPrivacy ? <TermsConditions /> : <Privacy />}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => toggleModal()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.StrictMode>
    </>
  );
};

export default App;
