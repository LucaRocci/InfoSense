// React core imports
import { Dispatch, FC, SetStateAction } from "react";

// Bootstrap
import { Button } from "react-bootstrap";

// React router dom
import { useSearchParams } from "react-router-dom";

// Components imports
import DropDown from "../DropDown/DropDown.component";

//Type imports
import { TutorialModalType } from "./tutorial-modal-compare.component";

const TutorialYearCompare: FC<TutorialModalType> = ({ setCurrentStep }) => {
  const [, setSearchParam] = useSearchParams();

  const handleOnYearSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();

    //Check if dropdwon for type has value or not to change the searchParams
    setSearchParam({
      kind: "year",
      province: e.target[1].value,
      country: e.target[2].value,
      year: e.target[3].value,
    });

    setCurrentStep(9);
  };

  return (
    <>
      <p>
        Here you can compare different activity type filtered by year. Save your
        settings!
      </p>
      <form className="tutorial-form" onSubmit={handleOnYearSubmit}>
      <DropDown type="region" />
        <DropDown type="province" />
        <DropDown type="country" />
        <DropDown type="year" />
        <div className="d-flex justify-content-center align-items-center">
          {/*         <Button className="rounded-50 btn btn-primary rounded-pill mt-2 me-2" type="button" onClick={() => setCurrentStep(7)}>
                Previous Step
              </Button> */}
          <Button
            variant="primary"
            type="submit"
            className="rounded-50 btn btn-primary rounded-pill mt-2"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
};

export default TutorialYearCompare;
