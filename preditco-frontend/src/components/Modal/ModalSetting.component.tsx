//React core imports
import { useState, FC } from "react";
//Comopnents import
import DropDown from "../DropDown/DropDown.component";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
  //Function to handle the form submit
  const handleOnSubmit = (e:any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();
    //Check if dropdwon for type has value or not to change the searchParams
    if(e.target[3].value.length === 0)
      setSearchParam({ province: e.target[1].value, activityType: e.target[0].value, country: e.target[2].value})
    else
    setSearchParam({ province: e.target[1].value, activityType: e.target[0].value, country: e.target[2].value, type:e.target[3].value})
  }

    return(
      
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleOnSubmit}>
      <Modal.Body>
     <DropDown type="activityType" setShowType={setShowType} />
     <DropDown type="province" setShowType={setShowType} />
     <DropDown type="country" setShowType={setShowType} />
     {showType ? <DropDown type="type" setShowType={setShowType} /> : null }
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
    </Modal>
        
    )
}

export default ModalSetting;
