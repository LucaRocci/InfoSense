import { Card, Container, ListGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as InfosenseLogo } from "../../assets/logos/logo-infosense.svg";
import { ReactComponent as PredictoLogo } from "../../assets/logos/logo-predicto.svg";
import { Github } from "react-bootstrap-icons";

const FooterCustom = () => {
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header className="text-center m-2">
            <InfosenseLogo style={{ width: "25vh" }} />
          </Card.Header>

          <Card.Body>
            <Row>
              <Col xs="6" className="m-2">
                <Card.Title className="text-center">
                  <PredictoLogo style={{ width: "15vh" }}/>
                </Card.Title>
                <div className="container d-flex justify-content-center mt-4">
                  <Github style={{ width: "5vh" }} />
                </div>
              </Col>

              <Col className="m-2">
                <Card.Title className="text-center">PREDICTO</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Col>

              <Col className="m-2">
                <Card.Title className="text-center">APP</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Home</ListGroup.Item>
                  <ListGroup.Item>Statistic</ListGroup.Item>
                  <ListGroup.Item>Prediction</ListGroup.Item>
                </ListGroup>
              </Col>

              <Col className="m-2">
                <Card.Title className="text-center">PRODUCT</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Predicto</ListGroup.Item>
                  <ListGroup.Item>Stay Tuned</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>

          <Card.Footer className="text-muted text-center m-2">
            © Infosense, 2022. All rights reserved.
          </Card.Footer>
          {/* <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
      </Container>
    </>
  );
};

export default FooterCustom;
