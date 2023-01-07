//React core imports
import { useState, FC } from "react";
//Comopnents import
import DropDown from "../DropDown/DropDown.component";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//React-router-dom imports
import { useSearchParams } from "react-router-dom";
//Props type
type ModalSettingProps = {
  show:boolean,
  handleClose: () => void,
}
//Modal component for setting the req.
const ModalSetting:FC<ModalSettingProps> = ({ show, handleClose }) => {
  //Hook for searchParam 
  const [, setSearchParam] = useSearchParams();
  //State for add dropdown menu type if activityType=alberghi or activityType=extra-alberghieri
  const [showType, setShowType] = useState<boolean>(false);
  //State to ompare province
   const [ formType, setformType ] = useState<string>('standard');
  //Function to handle the form submit
  const handleOnStandardSubmit = (e:any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();
    //Check if dropdwon for type has value or not to change the searchParams
     if(e.target[3].value.length === 0)
      setSearchParam({kind: 'standard', province: e.target[1].value, activityType: e.target[0].value, country: e.target[2].value})
    else 
      setSearchParam({kind: 'standard', province: e.target[1].value, activityType: e.target[0].value, country: e.target[2].value, type:e.target[3].value}) 

      handleClose();
  }

  const handleOnCompareSubmit = (e:any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();
    //Check if dropdwon for type has value or not to change the searchParams
     if(e.target[4].value.length === 0)
      setSearchParam({kind: 'compare', province: e.target[1].value, provinceSecond: e.target[2].value, activityType: e.target[0].value, country: e.target[3].value})
    else 
      setSearchParam({kind: 'compare', province: e.target[1].value, provinceSecond: e.target[2].value, activityType: e.target[0].value, country: e.target[3].value, type:e.target[4].value})
      
      handleClose();
  }

    return(
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h4>TITLE</h4>
        </Modal.Header>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Standard">
      <form onSubmit={handleOnStandardSubmit}>
      <Modal.Body>
     <DropDown type="activityType" setShowType={setShowType} />
     <DropDown type="province" />
     <DropDown type="country" />
     {showType ? <DropDown type="type"/> : null }
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
      <Tab eventKey="profile" title="Compare">
      <form onSubmit={handleOnCompareSubmit}>
      <Modal.Body>
     <DropDown type="activityType" setShowType={setShowType} />
     <DropDown type="province"  />
     <DropDown type="province"  />
     <DropDown type="country"  />
     {showType ? <DropDown type="type"  /> : null }
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
        
    )
}

export default ModalSetting;
