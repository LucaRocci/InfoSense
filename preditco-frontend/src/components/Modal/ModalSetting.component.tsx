import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, FC, Dispatch, SetStateAction, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DropDown from "../DropDown/DropDown.component";

type ModalSettingProps = {
  show:boolean,
  handleClose: () => void,
}

const ModalSetting:FC<ModalSettingProps> = ({ show, handleClose }) => {

  const [, setSearchParam] = useSearchParams();
  
  const handleOnSubmit = (e:any) => {

    e.preventDefault();
    e.stopPropagation();

    setSearchParam({ province: e.target[1].value, activityType: e.target[0].value, country: e.target[2].value})
  }

    return(
      
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleOnSubmit}>
      <Modal.Body>
     <DropDown type="activityType" />
     <DropDown type="province" />
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
    </Modal>
        
    )
}

export default ModalSetting;
