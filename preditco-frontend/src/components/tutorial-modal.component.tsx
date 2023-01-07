//React core imports
import React, { useState, useEffect, FC, Dispatch, SetStateAction } from "react";
//React-router-dom imports
import { useSearchParams } from 'react-router-dom';
//Components impoprts
import Form from "react-bootstrap/Form";
import DropDown from "./DropDown/DropDown.component";
import { Button } from "react-bootstrap";
type TutorialModalType = {
  setCurrentStep:Dispatch<SetStateAction<number>>
}
const TutorialModal:FC<TutorialModalType> = ({setCurrentStep}) => {
  //State for add dropdown menu type if activityType=alberghi or activityType=extra-alberghieri
  const [showType, setShowType] = useState<boolean>(false);
      //Hook for searchParam 
      const [, setSearchParam] = useSearchParams();

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

        setCurrentStep(3);
      }

  return (
   <Form onSubmit={handleOnSubmit}>
    <p>Select activity type</p>
    <DropDown type="activityType" setShowType={setShowType} />
     <DropDown type="province" setShowType={setShowType} />
     <DropDown type="country" setShowType={setShowType} />
     {showType ? <DropDown type="type" setShowType={setShowType} /> : null }
     <Button type="submit">Next Step</Button>
    </Form>
  )
}

export default TutorialModal;
