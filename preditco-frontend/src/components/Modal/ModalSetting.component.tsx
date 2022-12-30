import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, FC, Dispatch, SetStateAction } from "react";
import DropDown from "../DropDown/DropDown.component";

type ModalSettingProps = {
  show:boolean,
  handleClose: () => void,
  setProvince: Dispatch<SetStateAction<string>>,
  setActivityType: Dispatch<SetStateAction<string>>
  setCountry: Dispatch<SetStateAction<string>>
}

const ModalSetting:FC<ModalSettingProps> = ({show, handleClose, setProvince, setActivityType, setCountry }) => {
  
  const handleOnSubmit = (e:any) => {

    e.preventDefault();
    e.stopPropagation();

    setActivityType(e.target[0].value);
    setProvince(e.target[1].value);
    setCountry(e.target[2].value);
  }

    return(
      
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleOnSubmit}>
      <Modal.Body>
     <DropDown type="activity" />
     <DropDown type="province" />
     <DropDown type="nationality" />
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
