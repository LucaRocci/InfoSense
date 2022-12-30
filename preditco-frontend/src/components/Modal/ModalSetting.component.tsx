import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, FC } from "react";

type ModalSettingProps = {
  show:boolean,
  handleClose: () => void
}

const ModalSetting:FC<ModalSettingProps> = ({show, handleClose}) => {
  

    return(
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
     
   
    <Form.Select aria-label="Default select example">
    
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>

    <InputGroup className="mb-3">
      <DropdownButton
        variant="outline-secondary"
        title="Dropdown"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item >Action</Dropdown.Item>
        <Dropdown.Item >Another action</Dropdown.Item>
        <Dropdown.Item >Something else here</Dropdown.Item>
     
     
      </DropdownButton>
      <Form.Control aria-label="Text input with dropdown button" />
    </InputGroup>

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
