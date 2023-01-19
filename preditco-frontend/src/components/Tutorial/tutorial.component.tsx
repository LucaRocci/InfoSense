// React core imports
import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

// Style
import "./Tutorial.scss";

// Bootstrap icons imports
import { QuestionDiamondFill, XLg, ArrowLeft } from "react-bootstrap-icons";

// Import ModalSetting from './Modal/ModalSetting.component'; */
import TutorialModalStandard from "./tutorial-modal-standard.component";
import TutorialModalCompare from "./tutorial-modal-compare.component";
import TutorialYearCompare from "./tutorial-modal-year.components";
import { useSearchParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

// Props type
type TutorialOverlayType = {
  setToggleChart: Dispatch<SetStateAction<string>>;
};

const TutorialOverlay: FC<TutorialOverlayType> = ({ setToggleChart }) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [searchParam] = useSearchParams();

  /*   const handleKeyPress = (e:any) => {
    console.log(currentStep)
    if(e.keyCode === 54 || e.key === 'ArrowRigth')
      setCurrentStep(currentStep + 1)
    
    if(e.keyCode === 52 || e.key === 'ArrowLeft')
      setCurrentStep(currentStep - 1)
  }
  useEffect(() => {
    if(currentStep > 2) {
      document.body.addEventListener('keydown',handleKeyPress)
    }

    if(currentStep === 13)
     document.body.removeEventListener('keydown',handleKeyPress)
  },[currentStep]) */

  useEffect(() => {
    if (searchParam.get("tutorial") === "open") setShowTutorial(true);
  }, [searchParam.get("tutorial")]);

  // Steps tutorial
  const tutorialSteps = [
    {
      heading: "Welcome to the tutorial!",
      content:
        "We'll show you how this incredible app works and how you can easily change your setting and see different kind of chart. Let's go!",
      element: null,
    },
    {
      heading: "Step 1: Standard",
      content: <TutorialModalStandard setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 2: Bar Chart",
      content:
        "After savign your changes, the chart will show you all the data trhought diffent years. this is our bar chart. Click on 🟦 Arrivals or 🟪 Stays to change data view",
      element: "#bar",
    },
    {
      heading: "Step 3: Line Chart",
      content:
        "You can easily view other different chart clicking the other icon. This is our line chart. Click on 🟦 Arrivals or 🟪 Stays to change data view",
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
        "Different data of different cities in the same chart, amazing! Click on 🟦 Arrivals or 🟪 Stays to change data view",
      element: "#bar",
    },
    {
      heading: "Step 6: Line Chart comparision",
      content:
        "Check our line chart with our comparision mode. Click on 🟦 Arrivals or 🟪 Stays to change data view",
      element: "#line",
    },
    {
      heading: "Step 7: Single Year",
      content: <TutorialYearCompare setCurrentStep={setCurrentStep} />,
      element: "#setting",
    },
    {
      heading: "Step 8: Bar chart year mode",
      content:
        "Different data of different years in the same chart, amazing! Click on 🟦 Arrivals or 🟪 Stays to change data view",
      element: "#bar",
    },
    {
      heading: "Step 9: Line chart year mode",
      content:
        "Check our line chart with our year mode. Click on 🟦 Arrivals or 🟪 Stays to change data view",
      element: "#line",
    },
    {
      heading: "Step 10: Doughnut chart year",
      content:
        "With our Single-year mode you can analyze different Activity in a specific year. Click on the 🟧 Activity type box to change data view ",
      element: "#doughnut",
    },
    {
      heading: "Thank's, have fun!",
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
    if (currentStep === 3 || currentStep === 6 || currentStep === 9)
      setToggleChart("Bar");
    if (currentStep === 4 || currentStep === 7 || currentStep === 10)
      setToggleChart("Line");
    if (currentStep === 11) setToggleChart("Doughnut");
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
            currentStep !== 2 &&
            currentStep !== 5 &&
            currentStep !== 8 ? (
              <>
                {/*  currentStep !== 1  && <button className="rounded-50 btn btn-primary rounded-pill me-2" type="button" onClick={() => setCurrentStep(currentStep - 1)}>
                Previous Step
              </button>  */}
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

export default TutorialOverlay;
