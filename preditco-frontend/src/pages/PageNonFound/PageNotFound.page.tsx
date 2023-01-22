import "./PageNotFound.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="pageNotFound text-center">
        <div className="error">
          <h1>404</h1>
          <h2 className="">Oops! This Page Could Not Be Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. Name changed or is temporarily unavailable. Please go back
            to our PREDICTO home page.
          </p>
          <Link to={"/home"}>
            <Button
              variant="primary rounded-pill"
              size="lg"
              className="my-2 my-md-0 mx-md-2 rounded-50"
            >
              Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
