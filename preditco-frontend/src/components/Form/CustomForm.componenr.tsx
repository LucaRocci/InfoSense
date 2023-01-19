//React core imports
import { FC, useEffect, useState } from "react";
//React-router-dom imports
import { useSearchParams } from "react-router-dom";
//Compopnents imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropDown from "../DropDown/DropDown.component";

type FormPropsType = {
  type: string;
  handleClose: () => void;
};
const CustomForm: FC<FormPropsType> = ({ type, handleClose }) => {
  //Hook for searchParam
  const [searchParam, setSearchParam] = useSearchParams();
  //State for add dropdown menu type if activityType=alberghi or activityType=extra-alberghieri
  const [showType, setShowType] = useState<boolean>(false);

  useEffect(() => {
    if (
      searchParam.get("activityType") === "hotel" ||
      searchParam.get("activityType") === "non-hotel"
    )
      setShowType(true);
  }, [searchParam.get("activityType")]);

  //Function to handle the form submit
  const handleOnStandardSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();
    //Check if dropdwon for type has value or not to change the searchParams
    if (e.target[3].value.length === 0)
      setSearchParam({
        kind: "standard",
        region: "Piemonte",
        province: e.target[1].value,
        activityType: e.target[0].value,
        country: e.target[2].value,
      });
    else
      setSearchParam({
        kind: "standard",
        region: "Piemonte",
        province: e.target[1].value,
        activityType: e.target[0].value,
        country: e.target[2].value,
        type: e.target[3].value,
      });

    handleClose();
  };

  const handleOnCompareSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();
    //Check if dropdwon for type has value or not to change the searchParams
    setSearchParam({
      kind: "compare",
      region: "Piemonte",
      province: e.target[1].value,
      provinceSecond: e.target[2].value,
      activityType: e.target[0].value,
      country: e.target[3].value,
    });

    handleClose();
  };

  const handleOnYearSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();

    //Check if dropdwon for type has value or not to change the searchParams
    setSearchParam({
      kind: "year",
      region: "Piemonte",
      province: e.target[0].value,
      country: e.target[1].value,
      year: e.target[2].value,
    });

    handleClose();
  };

  return (
    <>
      {type === "standard" && (
        <form onSubmit={handleOnStandardSubmit}>
          <Modal.Body>
            <p>Select area, activity type and turism origin.</p>
            <DropDown type="region" />
            <DropDown type="province" />
            <DropDown type="activityType" setShowType={setShowType} />
            <DropDown type="country" />
            {showType ? (
              <div>
                <p>Choose view</p>
                <DropDown type="type" />
              </div>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="rounded-pill"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button variant="primary" className="rounded-pill" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      )}
      {type === "compare" && (
        <form onSubmit={handleOnCompareSubmit}>
          <Modal.Body>
            <p>Select two cities, activity type and turism origin.</p>
            <DropDown type="region" />
            <DropDown type="province" />
            <DropDown type="provinceSecond" />
            <DropDown type="activityType" />
            <DropDown type="country" />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="rounded-pill"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button variant="primary" className="rounded-pill" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      )}
      {type === "year" && (
        <form onSubmit={handleOnYearSubmit}>
          <Modal.Body>
            <p>Select area, activity type and year of interest.</p>
            <DropDown type="region" />
            <DropDown type="province" />
            <DropDown type="country" />
            <DropDown type="year" />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="rounded-pill"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button variant="primary" className="rounded-pill" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      )}
    </>
  );
};

export default CustomForm;
