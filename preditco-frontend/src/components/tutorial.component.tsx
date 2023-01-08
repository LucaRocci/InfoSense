// React core imports
import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

// Bootstrap icons imports
import { QuestionDiamondFill } from "react-bootstrap-icons";

// Import ModalSetting from './Modal/ModalSetting.component'; */
import TutorialModalStandard from "./tutorial-modal-standard.component";
import TutorialModalCompare from "./tutorial-modal-compare.component";

// Props type
type TutorialOverlayType = {
  setToggleChart: Dispatch<SetStateAction<string>>;
};

const TutorialOverlay: FC<TutorialOverlayType> = ({ setToggleChart }) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  //Function to handle the form submit
  const handleClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const tutorialSteps = [
    {
      heading: "Welcome to the tutorial!",
      content: "This is an example of an in-app tutorial overlay.",
      element: null,
    },
    {
      heading: "Step 1: App Navigation",
      content: <TutorialModalStandard setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 2: App Features",
      content:
        "In this step, we will show you some of the main features of the app.",
      element: "#bar",
    },
    {
      heading: "Step 3: Wrapping Up",
      content: "",
      element: "#line",
    },
    {
      heading: "Step 4: App Navigation",
      content: <TutorialModalCompare setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 5: App Features",
      content:
        "In this step, we will show you some of the main features of the app.",
      element: "#bar",
    },
    {
      heading: "Step 6: Wrapping Up",
      content: "other chart",
      element: "#line",
    },
    {
      heading: "Step 7: Wrapping Up",
      content: "Thats it for the tutorial! Thank you for trying it out.",
      element: "",
    },
  ];

  const currentTutorialStep = tutorialSteps[currentStep - 1];

  useEffect(() => {

    // remove the "highlight" class from all elements
    const elements = document.querySelectorAll(".highlight");
    elements.forEach((element) => element.classList.remove("highlight"));

    // add the "highlight" class to the current tutorial step element, if it exists
    if (currentTutorialStep.element) {
      const element = document.querySelector(currentTutorialStep.element);
      element?.classList.add("highlight");
    }
    if (currentStep === 3 || currentStep === 6) setToggleChart("Bar");
    if (currentStep === 4 || currentStep === 7) setToggleChart("Line");
  }, [currentStep, currentTutorialStep, setToggleChart]);

  return (
    <div>
      {showTutorial && (
        <div className="tutorial-overlay">
          <div className="tutorial-content text-dark">
            <h1>{currentTutorialStep.heading}</h1>
            <div>{currentTutorialStep.content}</div>

            {currentStep !== tutorialSteps.length && currentStep !== 2 && currentStep !== 5? (
              <button type="submit" onClick={handleClick}>
                Next Step
              </button>
            ) : null}
            {currentStep === tutorialSteps.length && (
              <button
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
