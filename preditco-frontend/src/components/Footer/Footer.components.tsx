import { Container, ListGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as InfosenseLogo } from "../../assets/logos/logo-infosense.svg";
import { ReactComponent as PredictoLogo } from "../../assets/logos/logo-predicto.svg";
import { ReactComponent as GitHubLogo } from "../../assets/logos/gitHub.svg";
import { ReactComponent as ITSLogo } from "../../assets/logos/logo-its.svg";
import { Link } from "react-router-dom";
import "./Footer.scss";

const FooterCustom = () => {
  return (
    <footer>
    <hr></hr>
      {/* FOOTER */}
      <Container fluid className="mt-4 bg-white">
        <div className="w-xxl-80 mx-auto">

          {/* ROWS */}
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-4 m-4">
            {/* 1° column: logo predicto */}
            <Col className="mt-2 mb-2">
              <div>
                <InfosenseLogo className="w-75" />
                <PredictoLogo className="w-sm-75 w-md-100" />
              </div>
              <div className="d-flex justify-content-left mt-4">
                <a href="#" target="_blank" className="w-50  ms-2"> <ITSLogo className="w-100" /></a>
              </div>
              <div className="d-flex justify-content-left mt-4"><a href="#" target="_blank" className="w-25"><GitHubLogo className="w-75"/></a></div>
              
            </Col>

            {/* 2° column: simple explain predicto */}
            <Col className="mt-2 mb-2">
              <h4 className="text-center">PREDICTO</h4>
              <p className="m-4">
              Discover the future of tourism with our data analysis and prediction app.
              </p>
            </Col>

            {/* 3° column: small link for navigate through the app */}
            <Col className="mt-2 mb-2">
              <h4 className="text-center">APP</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent">
                  <Link className="link-footer" to="/home">
                    Home
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent">
                  <Link className="link-footer" to="/statistics">
                    Statistic
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent">
                  <Link className="link-footer" to="/predictions">
                    Prediction
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            {/* 4° column: predicto products */}
            <Col className="mt-2 mb-2">
              <h4 className="text-center">LEGACY</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-transparent"><Link to='/terms' target="_parent" className="link-footer">Terms of use</Link></ListGroup.Item>
                <ListGroup.Item className="bg-transparent"><Link to='/privacy'target="_parent" className="link-footer">Privacy</Link></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          {/* FOOTER */}
          <div className="text-muted text-center m-2">
            © Infosense, 2023. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterCustom;
