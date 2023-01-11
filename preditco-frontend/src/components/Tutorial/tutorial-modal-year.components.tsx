// React core imports
import { Dispatch, FC, SetStateAction } from "react";

// Bootstrap
import { Button } from "react-bootstrap";

// React router dom
import { useSearchParams } from "react-router-dom";

// Components imports
import DropDown from "../DropDown/DropDown.component";

// Props type
type TutorialModalType = {
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const TutorialYearCompare: FC<TutorialModalType> = ({ setCurrentStep }) => {
  const [, setSearchParam] = useSearchParams();

  const handleOnYearSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();

    //Check if dropdwon for type has value or not to change the searchParams
    setSearchParam({
      kind: "year",
      province: e.target[0].value,
      country: e.target[1].value,
      year: e.target[2].value,
    });

    setCurrentStep(9);
  };

  return (
    <>
      <p>You can compare different esercizi in one year. Save your settings!</p>
      <form className="tutorial-form" onSubmit={handleOnYearSubmit}>
        <DropDown type="province" />
        <DropDown type="country" />
        <DropDown type="year" />
        <div className="d-flex justify-content-center">
          <Button
            style={{ margin: "15px" }}
            variant="primary"
            type="submit"
            className="rounded-50 btn btn-primary rounded-pill"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
};

export default TutorialYearCompare;
