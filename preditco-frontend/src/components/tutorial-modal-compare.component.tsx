// React core imports
import { Dispatch, FC, SetStateAction } from "react";

// Bootstrap
import { Button } from "react-bootstrap";

// React router dom
import { useSearchParams } from "react-router-dom";

// Components imports
import DropDown from "./DropDown/DropDown.component";

// Props type
type TutorialModalType = {
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const TutorialModalCompare: FC<TutorialModalType> = ({ setCurrentStep }) => {
  const [, setSearchParam] = useSearchParams();

  const handleOnCompareSubmit = (e: any) => {

    // PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();
    
    // Check if dropdwon for type has value or not to change the searchParams
    setSearchParam({
      kind: "compare",
      province: e.target[1].value,
      provinceSecond: e.target[2].value,
      activityType: e.target[0].value,
      country: e.target[3].value,
    });

    setCurrentStep(6);
  };

  return (
    <>
      <form onSubmit={handleOnCompareSubmit}>
        <DropDown type="activityType" />
        <DropDown type="province" />
        <DropDown type="provinceSecond" />
        <DropDown type="country" />
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </form>
    </>
  );
};

export default TutorialModalCompare;
