//React core imports
import React, { useState, useEffect, FC, Dispatch, SetStateAction } from "react";
//React-router-dom imports
import { useSearchParams } from 'react-router-dom';
//Components impoprts
import Form from "react-bootstrap/Form";
import DropDown from "./DropDown/DropDown.component";
import { Button, Tabs, Tab } from "react-bootstrap";
type TutorialModalType = {
  setCurrentStep:Dispatch<SetStateAction<number>>
}
const TutorialModal:FC<TutorialModalType> = ({setCurrentStep}) => {
  //State for add dropdown menu type if activityType=alberghi or activityType=extra-alberghieri
  const [showType, setShowType] = useState<boolean>(false);
      //Hook for searchParam 
      const [, setSearchParam] = useSearchParams();

      //Function to handle the form submit
      const handleOnStandardSubmit = (e:any) => {
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

      const handleOnCompareSubmit = (e:any) => {
        //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
        e.preventDefault();
        e.stopPropagation();
        //Check if dropdwon for type has value or not to change the searchParams
          setSearchParam({kind: 'compare', province: e.target[1].value, provinceSecond: e.target[2].value, activityType: e.target[0].value, country: e.target[3].value})
          
          setCurrentStep(3);
      }

  return (
<Tabs
      defaultActiveKey="standard"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="standard" title="Standard">
      <form onSubmit={handleOnStandardSubmit}>
     <DropDown type="activityType" setShowType={setShowType} />
     <DropDown type="province" />
     <DropDown type="country" />
     {showType ? <DropDown type="type"/> : null }

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </form>
      </Tab>
      <Tab eventKey="compare" title="Compare">
      <form onSubmit={handleOnCompareSubmit}>

     <DropDown type="activityType" />
     <DropDown type="province"  />
     <DropDown type="provinceSecond"  />
     <DropDown type="country"  />
        <Button variant="primary" type="submit">
          Next Step
        </Button>
      </form>
      </Tab>
    </Tabs>
  )
}

export default TutorialModal;
