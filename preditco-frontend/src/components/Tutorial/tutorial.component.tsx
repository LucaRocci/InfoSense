// React core imports
import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

// Style
import './Tutorial.scss'

// Bootstrap icons imports
import { QuestionDiamondFill } from "react-bootstrap-icons";

// Import ModalSetting from './Modal/ModalSetting.component'; */
import TutorialModalStandard from "./tutorial-modal-standard.component";
import TutorialModalCompare from "./tutorial-modal-compare.component";
import TutorialYearCompare from "./tutorial-modal-year.components";
import { useSearchParams } from "react-router-dom";

// Props type
type TutorialOverlayType = {
  setToggleChart: Dispatch<SetStateAction<string>>;
};

const TutorialOverlay: FC<TutorialOverlayType> = ({ setToggleChart }) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [ searchParam ] = useSearchParams();

  useEffect(() => {
    if(searchParam.get('tutorial') === 'open')
      setShowTutorial(true)
  }, [searchParam.get('tutorial')])

  // Function to handle the form submit
  const handleClick = () => {
    setCurrentStep(currentStep + 1);
  };

  // Steps tutorial 
  const tutorialSteps = [
    {
      heading: "Welcome to the tutorial!",
      content: "We'll show you how this incredible app works and how you can easily change your setting and see different kind of chart. Let's go!",
      element: null,
    },
    {
      heading: "Step 1: Setting",
      content: <TutorialModalStandard setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 2: Bar Chart",
      content:
        "After savign your changes, the chart will show you all the data trhought diffent years. this is our bar chart.",
      element: "#bar",
    },
    {
      heading: "Step 3: Bar Chart",
      content: "You can easily view other different chart clicking the other icon. This is our line chart.",
      element: "#line",
    },
    {
      heading: "Step 4: Compare",
      content: <TutorialModalCompare setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 5: Bar chart comparision",
      content:
        "Different data of different cities in the same chart, amazing!",
      element: "#bar",
    },
    {
      heading: "Step 6: Line chart comparision",
      content: "Check our line chart with our comparision mode",
      element: "#line",
    },
    {
      heading: "Step 7: Compare",
      content: <TutorialYearCompare setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 8: Bar chart year mode",
      content:
        "Different data of different years in the same chart, amazing!",
      element: "#bar",
    },
    {
      heading: "Step 9: Line chart year mode",
      content: "Check our line chart with our year mode",
      element: "#line",
    },
    {
      heading: "Step 10: Doughnut chart year",
      content: "With our Single-year mode you can analyze different Activity in a specific year",
      element: "#doughnut",
    },
    {
      heading: "Step 11: Thanks, now have fun!",
      content: "We have done, now it's your turn.",
      element: "",
    },
  ];

  const currentTutorialStep = tutorialSteps[currentStep - 1];

  useEffect(() => {

    // Remove the "highlight" class from all elements
    const elements = document.querySelectorAll(".highlight");
    elements.forEach((element) => element.classList.remove("highlight"));

    // Add the "highlight" class to the current tutorial step element, if it exists
    if (currentTutorialStep.element) {
      const element = document.querySelector(currentTutorialStep.element);
      element?.classList.add("highlight");
    }
    if (currentStep === 3 || currentStep === 6 || currentStep === 9) setToggleChart("Bar");
    if (currentStep === 4 || currentStep === 7 || currentStep === 10) setToggleChart("Line");
    if (currentStep === 11) setToggleChart("Doughnut")
  }, [currentTutorialStep]);

  return (
    <div>
      {showTutorial && (
        <div className="tutorial-overlay">
          <div className="tutorial-content text-dark">
            <h1 className="tutorail-header-step">{currentTutorialStep.heading}</h1>
            <div className="tutorial-content-step">{currentTutorialStep.content}</div>

            {currentStep !== tutorialSteps.length && currentStep !== 2 && currentStep !== 5 && currentStep !== 8? (
              <button className="rounded-50 btn btn-primary rounded-pill" type="submit" onClick={handleClick}>
                Next Step
              </button>
            ) : null}
            {currentStep === tutorialSteps.length && (
              <button className="rounded-50 btn btn-primary rounded-pill" style={{ backgroundColor: 'purple' }}
                onClick={() => {
                  setShowTutorial(false);
                  setCurrentStep(1);
                }}
              >
                Close Tutorial
              </button>
            )}
          </div>
        </div>
      )}
      <QuestionDiamondFill
        className="tutorial-svg"
        onClick={() => setShowTutorial(true)}
      />
    </div>
  );
};

export default TutorialOverlay;
