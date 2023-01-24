// React core imports
import { Dispatch, FC, SetStateAction } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import DropDown from "../DropDown/DropDown.component";

// Props type
export type TutorialModalMonth = {
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const TutorialPredictionMonth: FC<TutorialModalMonth> = ({
  setCurrentStep,
}) => {
  const [, setSearchParam] = useSearchParams();

  const handleOnCompareSubmit = (e: any) => {
    // PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();

    const now = new Date();
    const prdDate = new Date(e.target[5].value);

    let months;
    months = (prdDate.getFullYear() - now.getFullYear()) * 12;
    months -= now.getMonth();
    months += prdDate.getMonth();
    const steps = months <= 0 ? 0 : months;

    // Check if dropdwon for type has value or not to change the searchParams
    setSearchParam({
      kind: "prd-range",
      province: e.target[1].value,
      activityType: e.target[2].value,
      country: e.target[3].value,
      indicator: e.target[4].value,
      steps: steps.toString(),
    });

    setCurrentStep(4);
  };

  return (
    <>
      <p>Chose your setting, then wait for your prediction data.</p>
      <form className="tutorial-form" onSubmit={handleOnCompareSubmit}>
        <DropDown type="region" />
        <DropDown type="province" />
        <DropDown type="activityType" />
        <DropDown type="country" />
        <DropDown type="indicator" />
        <div>📆 Range Month</div>
        <input type="month" />
        <div className="d-flex justify-content-center align-items-center">
          <Button
            className="rounded-50 btn btn-primary rounded-pill mt-2"
            variant="primary"
            type="submit"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
};

export default TutorialPredictionMonth;
