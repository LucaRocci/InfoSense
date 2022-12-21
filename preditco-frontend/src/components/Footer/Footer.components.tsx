import { Container, ListGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as InfosenseLogo } from "../../assets/logos/logo-infosense.svg";
import { ReactComponent as PredictoLogo } from "../../assets/logos/logo-predicto.svg";
import { Github } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./Footer.scss";

const FooterCustom = () => {
  return (
    <>
      {/* FOOTER */}
      <Container fluid className="mt-4">
        <div className="w-xxl-80 mx-auto">

          {/* ROWS */}
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-4 m-4">
            {/* 1° column: logo predicto */}
            <Col className="mt-2 mb-2">
              <div>
                <InfosenseLogo className="w-100" />
                <PredictoLogo className="w-75" />
              </div>
              <div className="d-flex justify-content-left mt-4">
                <Github className="footer-svg-github" />
              </div>
            </Col>

            {/* 2° column: simple explain predicto */}
            <Col className="mt-2 mb-2">
              <h4 className="text-center">PREDICTO</h4>
              <p className="m-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </Col>

            {/* 3° column: small link for navigate through the app */}
            <Col className="mt-2 mb-2">
              <h4 className="text-center">APP</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Link className="link-footer" to="/home">
                    Home
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link className="link-footer" to="/statistics">
                    Statistic
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link className="link-footer" to="/predictions">
                    Prediction
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            {/* 4° column: predicto products */}
            <Col className="mt-2 mb-2">
              <h4 className="text-center">PRODUCT</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>Predicto</ListGroup.Item>
                <ListGroup.Item>Stay Tuned</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          {/* FOOTER */}
          <div className="text-muted text-center m-2">
            © Infosense, 2022. All rights reserved.
          </div>
        </div>
      </Container>
    </>
  );
};

export default FooterCustom;
