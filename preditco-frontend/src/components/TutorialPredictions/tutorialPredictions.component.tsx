// React core imports
import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

// Style
import "../Tutorial/Tutorial.scss";

// Bootstrap icons imports
import { QuestionDiamondFill, XLg, ArrowLeft } from "react-bootstrap-icons";

// Import ModalSetting from './Modal/ModalSetting.component'; */
import TutorialPredictionMonth from "./tutorial-modal-prediction-month";
import { useSearchParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

// Props type
type TutorialOverlayType = {
  setToggleChart: Dispatch<SetStateAction<string>>;
};

const TutorialPrediction: FC<TutorialOverlayType> = ({ setToggleChart }) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [searchParam] = useSearchParams();

  useEffect(() => {
    if (searchParam.get("tutorial") === "open") setShowTutorial(true);
  }, [searchParam.get("tutorial")]);

  // Steps tutorial
  const tutorialSteps = [
    {
      heading: "Welcome to the Prediction tutorial!",
      content:
        "We'll show you how this incredible app works and how you can easily change your setting and see different kind of chart. Let's go!",
      element: null,
    },
    {
      heading: "Step 1: Prediction Data",
      content:
        "Our data is generated in the background to provide you with the most accurate predictions. This process may take a moment, but the results will be worth the wait",
      element: "",
    },
    {
      heading: "Step 1: Month-range",
      content: <TutorialPredictionMonth setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 2: Line Chart",
      content:
        "You can easily view other different chart clicking the other icon. This is our line chart. Click on 🟦 Arrivals or 🟪 Stays to change data view",
      element: "#line",
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
    if (currentStep === 2)
      setToggleChart("Bar");
    if (currentStep === 4)
      setToggleChart("Line");
  }, [currentTutorialStep]);

  const handleClose = () => {
    setShowTutorial(false);
    setCurrentStep(1);
  };

  return (
    <div>
      {showTutorial && (
        <div className="tutorial-overlay" /* onKeyDown={handleKeyPress} */>
          <div className="tutorial-content text-dark">
            <div className="d-flex align-items-center justify-content-between mb-2">
              {currentStep !== 1 && (
                <ArrowLeft
                  className="text-dark tutorial-close-svg me-4"
                  role="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                />
              )}{" "}
              <h1 className="tutorail-header-step mx-auto mb-0 mt-4">
                {currentTutorialStep.heading}
              </h1>{" "}
              <XLg
                className={`text-dark tutorial-close-svg ${
                  currentStep !== 1 ? "ms-4" : ""
                }`}
                onClick={handleClose}
              />
            </div>
            <div className="tutorial-content-step">
              {currentTutorialStep.content}
            </div>

            {currentStep !== tutorialSteps.length &&
            currentStep !== 3  ? (
              <>
                <button
                  className="rounded-50 btn btn-primary rounded-pill"
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Next Step
                </button>
              </>
            ) : null}
            {currentStep === tutorialSteps.length && (
              <button
                className="rounded-50 btn btn-primary rounded-pill"
                type="button"
                style={{ backgroundColor: "purple" }}
                onClick={() => {
                  setShowTutorial(false);
                  setCurrentStep(1);
                }}
              >
                Close Tutorial
              </button>
            )}
            <Row className="mt-4">
              {tutorialSteps.map((e, i) => (
                <Col key={i} className="d-flex justify-content-center px-0">
                  <div
                    className={`tutorial-navigation-step ${
                      currentStep === i + 1 ? "active-nav text-white" : ""
                    }`}
                    role="button"
                    onClick={() => setCurrentStep(i + 1)}
                  >
                    {i}
                  </div>
                </Col>
              ))}
            </Row>
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

export default TutorialPrediction;
