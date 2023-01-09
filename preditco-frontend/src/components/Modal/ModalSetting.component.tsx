//React core imports
import { useState, FC, useRef } from "react";
//Comopnents import
import DropDown from "../DropDown/DropDown.component";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
//React-router-dom imports
import { useSearchParams } from "react-router-dom";
//Props type
type ModalSettingProps = {
  show: boolean;
  handleClose: () => void;
};
//Modal component for setting the req.
const ModalSetting: FC<ModalSettingProps> = ({ show, handleClose }) => {
  //Hook for searchParam
  const [, setSearchParam] = useSearchParams();
  //State for add dropdown menu type if activityType=alberghi or activityType=extra-alberghieri
  const [showType, setShowType] = useState<boolean>(false);

  const provinceDropdwonRef = useRef();
  const secondProvinceDropdwonRef = useRef();
  //Function to handle the form submit
  const handleOnStandardSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();
    //Check if dropdwon for type has value or not to change the searchParams
    if (e.target[3].value.length === 0)
      setSearchParam({
        kind: "standard",
        province: e.target[1].value,
        activityType: e.target[0].value,
        country: e.target[2].value,
      });
    else
      setSearchParam({
        kind: "standard",
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
      province: e.target[1].value,
      provinceSecond: e.target[2].value,
      activityType: e.target[0].value,
      country: e.target[3].value,
    });

    handleClose();
  };

  const handleOnYearSubmit = (e:any) => {
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
 
     handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <div className="d-flex flex-column">
          <h4>Setting</h4>
          <p className="text-muted m-0">Select option to search data</p>
        </div>
      </Modal.Header>
      <Tabs
        defaultActiveKey="standard"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="standard" title="Standard">
          <form onSubmit={handleOnStandardSubmit}>
            <Modal.Body>
              <DropDown type="activityType" setShowType={setShowType} />
              <DropDown type="province" />
              <DropDown type="country" />
              {showType ? <DropDown type="type" /> : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Tab>
        <Tab eventKey="compare" title="Compare">
          <form onSubmit={handleOnCompareSubmit}>
            <Modal.Body>
              <DropDown type="activityType" />
              <DropDown type="province" />
              <DropDown type="provinceSecond" />
              <DropDown type="country" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Tab>
        <Tab eventKey="year" title="Year">
          <form onSubmit={handleOnYearSubmit}>
            <Modal.Body>
              <DropDown type="province" />
              <DropDown type="country" />
              <DropDown type="year" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Tab>
      </Tabs>
    </Modal>
  );
};

export default ModalSetting;
