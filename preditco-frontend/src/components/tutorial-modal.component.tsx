import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

function TutorialModal() {
  return (
   <div>
    <p>Select activity type</p>
   <Form.Select>
    
      <option>alberghi di lusso</option>
      <option>Campeggi</option>
      <option>Alberghi</option>
      <option>alberghi tre stelle</option>
    </Form.Select>
    <p>Select Province</p>
    <Form.Select>
    
      <option>Alba</option>
      <option>Cuneo</option>
      <option>Torino</option>
      <option>Alessandria</option>
    </Form.Select>
    <p>Select Provenience</p>
    <Form.Select>
       
      <option>Italy</option>
      <option>World</option>
    
    </Form.Select>
    </div>
  )
}

export default TutorialModal;
