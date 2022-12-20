import "./home.scss";
import Container from "react-bootstrap/Container";
import placeholder from "../../assets/placeholder/predicto-home.png";
import placeholderFirst from "../../assets/placeholder/predicto-home-first.png";
import { ReactComponent as Logo } from "../../assets/logos/logo-short-predicto.svg";
import Button from "react-bootstrap/Button";
import { Card, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
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
          <svg
            width="634"
            height="158"
            viewBox="0 0 634 158"
            fill="none"
            className="animated-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="wave">
              <path
                d="M18.2011 109.45C4.59635 124.962 12.3705 129.965 10.9128 138.972L25.9752 146.979C200.893 146.812 556.753 146.579 580.853 146.979C610.798 147.476 613.857 139.073 616.756 131.109L616.808 130.967C619.723 122.961 588.627 29.3878 580.853 15.3768C573.078 1.36586 566.276 53.4064 559.96 64.4149C553.643 75.4233 533.236 59.9114 528.863 48.9028C524.49 37.8943 517.688 42.8982 510.886 59.9114C504.083 76.9246 491.936 64.4149 481.733 59.9114C471.529 55.4079 464.241 12.3745 458.896 15.3768C453.551 18.3792 450.636 42.8982 442.376 64.4149C434.116 85.9316 420.685 74.1714 416.624 64.4149C412.251 53.9067 403.506 48.9028 397.675 64.4149C391.844 79.9269 373.381 81.9285 364.635 81.9285C357.638 81.9285 354.917 43.899 346.657 43.899C346.657 43.899 341.799 39.8959 336.454 53.9067C333.009 62.9369 326.736 78.4258 326.736 78.4258L319.448 92.4364C313.617 92.4364 309.536 82.7291 306.815 81.9285C303.414 80.9277 292.239 92.4364 279.12 92.4364C266.001 92.4364 265.515 81.9285 257.255 75.9237C248.995 69.9189 234.904 92.4364 226.159 101.444C217.413 110.451 206.723 101.444 200.407 92.4364C194.09 83.4292 185.83 92.4364 169.31 101.444C152.79 110.451 147.446 109.45 133.841 109.45C120.236 109.45 103.716 50.9043 99.3434 38.3946C94.9704 25.8849 92.0551 48.9027 81.8516 75.9237C71.6481 102.945 57.0716 93.9375 46.8681 92.4364C36.6646 90.9352 31.8058 93.9375 18.2011 109.45Z"
                fill="#280E71"
              />
            </g>
            <g id="wave1">
              <path
                d="M17.4957 152.868H37.5116C228.83 153.042 613.869 153.181 623.477 152.346C633.085 151.512 631.483 140.52 629.482 135.129C617.972 113.564 602.46 77.7385 593.453 77.7385C586.288 77.7385 570.935 106.434 561.428 113.738C551.92 121.042 543.413 112.695 529.402 113.738C515.391 114.781 515.391 127.303 502.881 135.129C490.371 142.955 479.863 136.173 468.854 135.129C457.845 134.086 452.341 128.868 443.834 127.303C435.327 125.738 428.822 113.738 423.818 117.912C418.814 122.086 405.804 123.129 395.796 117.912C385.788 112.695 384.287 102.782 374.779 102.782C365.272 102.782 352.762 70.4341 349.759 66.2603C346.757 62.0865 343.755 66.2603 336.249 70.4341C328.743 74.6079 318.16 73.5128 307.726 66.2603C298.719 59.9995 291.213 -2.40492e-05 285.208 0C280.595 1.84769e-05 278.203 19.3043 271.197 43.8258C264.192 68.3473 246.678 61.043 240.172 59.9995C233.667 58.9561 226.161 43.8258 220.157 43.8258C214.152 43.8258 214.152 61.5647 207.146 77.7385C200.141 93.9122 193.636 95.4774 177.623 90.7818C161.61 86.0862 160.109 87.6514 154.104 90.7818C148.099 93.9122 134.088 115.303 124.581 115.303C115.073 115.303 103.564 105.912 98.0596 102.782C92.5553 99.6512 88.5521 109.042 80.0453 115.303C71.5387 121.564 68.0359 121.564 60.0298 121.564H60.0294C52.0231 121.564 37.5116 114.782 32.5076 115.303C27.5035 115.825 13.4925 125.738 4.98576 138.26C-1.81965 148.277 10.4901 152.172 17.4957 152.868Z"
                fill="#86D1FF"
              />
            </g>
            <g id="wave2">
              <path
                d="M633.07 155.196C630.995 160.274 210.159 157.312 0 155.196C0 153.08 0.934038 148.067 4.67019 144.942C9.34023 141.035 20.2368 141.035 31.1335 141.035H31.1346C42.0317 141.035 60.7125 130.781 69.015 124.433C77.3176 118.085 81.4689 100.995 95.9984 116.132C110.528 131.269 138.03 136.641 155.154 136.641C172.278 136.641 181.619 136.641 192.516 141.035C203.413 145.43 205.488 130.781 217.942 130.781C230.396 130.781 237.142 136.641 246.482 136.641C255.823 136.641 269.314 130.781 282.287 124.433C295.26 118.085 300.449 124.433 310.827 124.433C321.205 124.433 338.329 100.995 343 91.2286C347.67 81.4626 349.745 90.252 359.605 100.995C367.907 110.761 379.842 113.202 393.334 108.319C406.825 103.436 413.571 92.6935 417.723 100.995C421.874 109.296 446.263 129.316 465.981 130.781C485.7 132.246 497.635 136.641 515.278 144.942C532.921 153.243 547.45 142.012 563.017 144.942C578.585 147.871 600.379 135.176 616.984 136.641C633.589 138.105 635.665 148.848 633.07 155.196Z"
                fill="#74BDE0"
              />
            </g>
          </svg>
        </section>
        <section id="card" className="d-sm-flex  flex-md-row pt-4">
          <Col className="mt-5 mx-2 mt-md-3 mx-md-5">
            <Card>
              <Image src={placeholderFirst} className="img-fluid rounded" />
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
          <Col className="mt-5 mx-2 mt-md-3 mx-md-5">
            <Card>
            <Image src={placeholder} className="img-fluid rounded"/>
              <Card.Body>
                <Card.Title>Prediction</Card.Title>
                <Card.Text>
                  If you need prevision data this is the tool you need. Start
                  planning your business looking for prediction data.
                </Card.Text>
                <Button variant="primary rounded-pill">Open</Button>
              </Card.Body>
            </Card>
          </Col>
        </section>
      </Container>
      <Container className="istat p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="1440"
          height="252"
          preserveAspectRatio="none"
          viewBox="0 0 1440 252"
        >
          <g mask='url("#SvgjsMask1471")' fill="none">
            <rect
              width="1440"
              height="252"
              x="0"
              y="0"
              fill="rgba(161, 225, 250, 1)"
            ></rect>
            <path
              d="M 0,137 C 57.6,128.6 172.8,91.8 288,95 C 403.2,98.2 460.8,159 576,153 C 691.2,147 748.8,50.6 864,65 C 979.2,79.4 1036.8,218 1152,225 C 1267.2,232 1382.4,125 1440,100L1440 252L0 252z"
              fill="rgba(61, 108, 140, 1)"
            ></path>
            <path
              d="M 0,136 C 72,122 216,55.2 360,66 C 504,76.8 576,198 720,190 C 864,182 936,25 1080,26 C 1224,27 1368,161.2 1440,195L1440 252L0 252z"
              fill="rgba(74, 141, 183, 1)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1471">
              <rect width="1440" height="252" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>{" "}
        <div className="p-1 ">
          <p className="text-white display-6 text-center">
            Source data from <span className="display-1">Istat</span>
          </p>
          <p className="text-white p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, distinctio explicabo dolore, placeat sint accusamus enim omnis ratione, voluptatem ut temporibus similique suscipit ab sequi reiciendis quo? Illum, cum aliquam.</p>
        </div>
      </Container>
      <Container className="contactUs p-3">
        <div className="p-3 m-3">
        <h2 >Contact Us</h2>

          <Card.Body>
            <Card.Title>Fintech</Card.Title>
            <Card.Text>
              <a href="mailto:">fintech@finteh.com</a>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title>Fintech</Card.Title>
            <Card.Text>
              <a href="mailto:">fintech@finteh.com</a>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title>Fintech</Card.Title>
            <Card.Text>
              <a href="mailto:">fintech@finteh.com</a>
            </Card.Text>
          </Card.Body>
        </div>
      </Container>
    </>
  );
};

export default Home;
