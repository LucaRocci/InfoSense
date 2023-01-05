import "./home.scss";
import Container from "react-bootstrap/Container";
import { ReactComponent as Logo } from "../../assets/logos/logo-short-predicto.svg";
import { ReactComponent as AnimationWave } from "../../assets/animation/home-wave-animation.svg";
import { ReactComponent as StaticWave } from "../../assets/animation/home-wave-static.svg";
import { ReactComponent as CardAnimationFirst } from "../../assets/animation/card-animation-first.svg";
import { ReactComponent as CardAnimationSecond } from "../../assets/animation/card-animation-second.svg";
import Button from "react-bootstrap/Button";
import avatarSara from "../../assets/images/avatar-sara.svg";
import avatarSaraHover from "../../assets/images/avatar-sara-hover.svg";
import avatarLuca from "../../assets/images/avatar-luca.svg";
import avatarPietro from "../../assets/images/avatar-pietro.svg";
import avatarSimone from "../../assets/images/avatar-simone.svg";
import avatarGabriele from "../../assets/images/avatar-gabriele.svg";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import FooterCustom from "../../components/Footer/Footer.components";

interface Worker {
  src: string;
  srcHover: string;
  name: string;
  field: string;
}

const workers: Worker[] = [
  {
    src: `${avatarGabriele}`,
    srcHover: `${avatarSaraHover}`,
    name: "Gabriele",
    field: "Web Develop",
  },
  {
    src: `${avatarPietro}`,
    srcHover: `${avatarSaraHover}`,
    name: "Pietro",
    field: "Web Develop",
  },
  {
    src: `${avatarSimone}`,
    srcHover: `${avatarSaraHover}`,
    name: "Simone",
    field: "Web Develop",
  },
  {
    src: `${avatarLuca}`,
    srcHover: `${avatarSaraHover}`,
    name: "Luca",
    field: "Backend",
  },
  {
    src: `${avatarLuca}`,
    srcHover: `${avatarSaraHover}`,
    name: "Marco",
    field: "Backend",
  },
  {
    src: `${avatarSara}`,
    srcHover: `${avatarSaraHover}`,
    name: "Sara",
    field: "Backend",
  },
  {
    src: `${avatarLuca}`,
    srcHover: `${avatarSaraHover}`,
    name: "Federico",
    field: "Fintech",
  },
  {
    src: `${avatarLuca}`,
    srcHover: `${avatarSaraHover}`,
    name: "Matteo",
    field: "Fintech",
  },
];

const Home = () => {

  return (
    <>
      <Container className="home">
        <section className="d-flex flex-column align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-center my-auto">
            <Logo />
            <h1 className="text-center">
              Make your analyisis better with Predicto.
            </h1>
            <h5 className="text-center">
              WE provide turism income analysis tools, with Predicto
            </h5>
            <h5 className="text-center">
              YOU can see the future income and make better decision for your
              business.
            </h5>
            <div className="d-flex flex-column flex-md-row mt-2">
              <Button
                variant="primary rounded-pill"
                size="lg"
                className="my-2 my-md-0 mx-md-2 rounded-50"
                href="#card"
              >
                Get Started
              </Button>
              <Button
                variant="secondary rounded-pill"
                size="lg"
                className="my-2 my-md-0 mx-md-2 rounded-50"
              >
                Tutorial
              </Button>
            </div>
          </div>
          <AnimationWave/>
        </section>
        <section id="card" className="d-sm-flex justify-content-md-center flex-md-row pt-4">
          <CardGroup className="mx-md-5">
            <Row sm={1} md={2} className="justify-content-md-center">
            <Col xs={12} md={5} className="mt-5  mt-md-3 ">
              <Card>
                {/* <Image src={placeholderFirst} className="img-fluid rounded" /> */}
                <CardAnimationFirst />

                <Card.Body>
                  <Card.Title>Actual Statistic</Card.Title>
                  <Card.Text>
                    This tool provides actual and past statistics. Select your
                    period, view and download data you need.
                  </Card.Text>
                  <Button variant="primary rounded-pill">Open</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5} className="mt-5 mt-md-3 ">
              <Card>
                <CardAnimationSecond/>

                <Card.Body>
                  <Card.Title>Prediction</Card.Title>
                  <Card.Text>
                    This tool provide prediction feature income. Start planning
                    your business looking for prediction.
                  </Card.Text>
                  <Button variant="primary rounded-pill">Open</Button>
                </Card.Body>
              </Card>
            </Col>
            </Row>
          </CardGroup>
        </section>
      <StaticWave />
      </Container>




      <Container className="istat p-0">
 
        <div className="p-1 ">
          <p className="text-white display-6 text-center">
            Source data from <span className="display-1">Istat</span>
          </p>
          <p className="text-white p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            distinctio explicabo dolore, placeat sint accusamus enim omnis
            ratione, voluptatem ut temporibus similique suscipit ab sequi
            reiciendis quo? Illum, cum aliquam.
          </p>
        </div>
      </Container>

      <Container className="our-team bg-skyblue">
        <h2 className="p-4">Our Team</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {workers.map((el: Worker, index: number) => (
            
              <div key={index} className="m-2 text-center">
                <img
                  onMouseOver={(e)=> e.currentTarget.src=el.srcHover}
                  onMouseLeave={(e)=> e.currentTarget.src=el.src}

                  src={el.src}
                  alt="..."
                  className="rounded-circle"
                  style={{ width: "100px", height: "100px" }}
                />
                <h3 className="mt-4">{el.name}</h3>
                <p>{el.field}</p>
              </div>
          ))}
        </div>
      </Container>
    
      <Container className="contactUs p-3">
      <div className="ps-3">
          <h2>Contact Us</h2>
        </div>
        <div className="w-xxl-80 mx-auto p-3 m-3">
          <Row className="m-auto">
            <Col xs={12} md={6} className=" p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22541.995642265392!2d7.6516714180993155!3d45.07059331227261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d71c8d8bb55%3A0xaf5abbd586b9f391!2sFondazione%20ITS%20Turismo%20e%20attivit%C3%A0%20culturali!5e0!3m2!1sit!2sit!4v1671721136537!5m2!1sit!2sit"
                width="600"
                height="500"
                loading="lazy"
              ></iframe>
            </Col>
            <Col xs={12} md={4} className="m-2 p-2">
              <h4>Infosense</h4>
              <h4>ITS-ICT TORINO</h4>
              <p>
                Infosense is a small start up where students are ledears.
                Infosense is a project of ITS-ICT Torino School
              </p>
          <h5>CONTACT</h5>
          <p>infosense@infosense.it</p>
            </Col>
          </Row>
        </div>
      </Container>
      <FooterCustom />
    </>
  );
};

export default Home;
