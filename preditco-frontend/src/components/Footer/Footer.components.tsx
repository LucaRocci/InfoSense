import { Card, Container, ListGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as InfosenseLogo } from "../../assets/logos/logo-infosense.svg";
import { ReactComponent as PredictoLogo } from "../../assets/logos/logo-predicto.svg";
import { Github } from "react-bootstrap-icons";

const FooterCustom = () => {
  return (
    <>
      {/* FOOTER CARD */}
      <Card className="m-3">
        <Container fluid>
          {/* HEADER */}
          {/* Logo Infosense */}
          <Card.Header className="text-center m-2 bg-white">
            <InfosenseLogo style={{ width: "25vh" }} />
          </Card.Header>

          {/* BODY */}
          <Card.Body>
            <Row className="d-flex align-items-start">
              {/* 1° column: logo predicto */}
              <Col xs="5" className="m-2">
                <Card.Title className="text-center">
                  <PredictoLogo style={{ width: "15vh" }} />
                </Card.Title>
                <div className="d-flex justify-content-center mt-4">
                  <Github style={{ width: "5vh" }} />
                </div>
              </Col>

              {/* 2° column: simple explain predicto */}
              <Col className="m-2">
                <Card.Title className="text-center">PREDICTO</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Col>

              {/* 3° column: small link for navigate through the app */}
              <Col className="m-2">
                <Card.Title className="text-center">APP</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Home</ListGroup.Item>
                  <ListGroup.Item>Statistic</ListGroup.Item>
                  <ListGroup.Item>Prediction</ListGroup.Item>
                </ListGroup>
              </Col>

              {/* 4° column: predicto products */}
              <Col className="m-2">
                <Card.Title className="text-center">PRODUCT</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Predicto</ListGroup.Item>
                  <ListGroup.Item>Stay Tuned</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>

          {/* FOOTER */}
          <Card.Footer className="text-muted text-center m-2">
            © Infosense, 2022. All rights reserved.
          </Card.Footer>
        </Container>
      </Card>
    </>
  );
};

export default FooterCustom;
