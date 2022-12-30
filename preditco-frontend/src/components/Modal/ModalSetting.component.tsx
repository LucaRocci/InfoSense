import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, FC } from "react";
import DropDown from "../DropDown/DropDown.component";

type ModalSettingProps = {
  show:boolean,
  handleClose: () => void
}

const ModalSetting:FC<ModalSettingProps> = ({show, handleClose}) => {
  
  const [activityInput, setActivityInput] = useState('');
  const [provinceInput, setProvinceInput] = useState('');
  const [nationInput, setNationInput] = useState('');




    return(
      
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
     <DropDown type="activity" />
     <DropDown type="province" />
     <DropDown type="nationality" />
  
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
        
    )
}

export default ModalSetting;
