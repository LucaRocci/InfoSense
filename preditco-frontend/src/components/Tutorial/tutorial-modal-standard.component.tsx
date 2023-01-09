// React core imports
import React, { useState, FC, Dispatch, SetStateAction } from "react";
// React-router-dom imports
import { useSearchParams } from "react-router-dom";
// Components impoprts
import DropDown from "../DropDown/DropDown.component";
import { Button } from "react-bootstrap";

type TutorialModalType = {
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const TutorialModalStandard: FC<TutorialModalType> = ({ setCurrentStep }) => {
  //State for add dropdown menu type if activityType=alberghi or activityType=extra-alberghieri
  const [showType, setShowType] = useState<boolean>(false);
  //Hook for searchParam
  const [, setSearchParam] = useSearchParams();

  //Function to handle the form submit
  const handleOnStandardSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();
    //Check if dropdwon for type has value or not to change the searchParams
    if (e.target[3].value.length === 0)
      setSearchParam({
        province: e.target[1].value,
        activityType: e.target[0].value,
        country: e.target[2].value,
      });
    else
      setSearchParam({
        province: e.target[1].value,
        activityType: e.target[0].value,
        country: e.target[2].value,
        type: e.target[3].value,
      });

    setCurrentStep(3);
  };

  return (
    <>
      <p>Here you can change your setting and chose your filter. Save your change!</p>
      <form style={{ margin: "20px" }} onSubmit={handleOnStandardSubmit}>
        <DropDown type="activityType" setShowType={setShowType} />
        <DropDown type="province" />
        <DropDown type="country" />
        {showType ? <DropDown type="type" /> : null}

        <Button
          style={{ backgroundColor: "blue", margin: "15px" }}
          variant="primary"
          type="submit"
        >
          Save Changes
        </Button>
      </form>
    </>
  );
};

export default TutorialModalStandard;
