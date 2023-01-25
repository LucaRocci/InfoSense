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

  const [date, setDate] = useState<string>('');

  useEffect(() => {

  }, [date])

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
    if (e.target[4].value.length === 0)
      setSearchParam({
        kind: "standard",
        province: e.target[1].value,
        activityType: e.target[2].value,
        country: e.target[3].value,
      });
    else
      setSearchParam({
        kind: "standard",
        province: e.target[1].value,
        activityType: e.target[2].value,
        country: e.target[3].value,
        type: e.target[4].value,
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
      province: e.target[1].value,
      provinceSecond: e.target[2].value,
      activityType: e.target[3].value,
      country: e.target[4].value,
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
      province: e.target[1].value,
      country: e.target[2].value,
      year: e.target[3].value,
    });

    handleClose();
  };

  //Function to handle the form submit
  const handleOnRangeSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();

    const now = new Date();
    const prdDate = new Date(e.target[5].value);
    if (Number(prdDate.getFullYear()) < Number(now.getFullYear()))
      return
    if ((Number(prdDate.getFullYear()) === Number(now.getFullYear())) && (Number(prdDate.getMonth()) <= Number(now.getMonth()) || Number(prdDate.getMonth()) === (Number(now.getMonth()) + 1)))
      return

    if(Number(prdDate.getFullYear()) > (Number(now.getFullYear()) + 5))
      return
  
    let months;
    months = (prdDate.getFullYear() - now.getFullYear()) * 12;
    months -= now.getMonth();
    months += prdDate.getMonth();
    const steps = months <= 0 ? 0 : months;

    setSearchParam({
      kind: "prd-range",
      province: e.target[1].value,
      activityType: e.target[2].value,
      country: e.target[3].value,
      indicator: e.target[4].value,
      steps: steps.toString(),
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

      {type === "range-month" && (
        <form onSubmit={handleOnRangeSubmit}>
          <Modal.Body>
            <p>Select area, activity type and year of interest.</p>
            <DropDown type="region" />
            <DropDown type="province" />
            <DropDown type="prdActivityType" />
            <DropDown type="country" />
            <DropDown type="indicator" />
            <div className="d-flex align-items-center ms-2">
              <div className="me-1">📆</div>
              <div>Prediction end date</div>
            </div>
            <input className="px-2 py-1 w-100" type="month" onChange={(e) => setDate(e.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="rounded-pill"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button variant="primary" className="rounded-pill" type="submit" disabled={date === ''}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      )}
    </>
  );
};

export default CustomForm;
