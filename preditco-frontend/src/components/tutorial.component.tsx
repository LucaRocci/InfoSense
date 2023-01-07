import React, { useState, useEffect } from 'react';
import ModalSetting from './Modal/ModalSetting.component';
import TutorialModal from './tutorial-modal.component';

function TutorialOverlay() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [show, setShow] = useState<boolean>(false);

  const tutorialSteps = [
    {
      heading: 'Welcome to the tutorial!',
      content: 'This is an example of an in-app tutorial overlay.',
      element: null,
    },
    {
      heading: 'Step 1: App Navigation',
      content: <TutorialModal />,
      element: '#setting',
    },
    {
      heading: 'Step 2: App Features',
      content: 'In this step, we will show you some of the main features of the app.',
      element: '#bar',
    },
    {
      heading: 'Step 3: Wrapping Up',
      content: '',
      element: '#bar',
    },
    {
      heading: 'Step 3: Wrapping Up',
      content: 'Thats it for the tutorial! Thank you for trying it out.',
      element: null,
    },
  ];

  const currentTutorialStep = tutorialSteps[currentStep - 1];

  useEffect(() => {
    // remove the "highlight" class from all elements
    const elements = document.querySelectorAll('.highlight');
    elements.forEach(element => element.classList.remove('highlight'));

    // add the "highlight" class to the current tutorial step element, if it exists
    if (currentTutorialStep.element) {
      const element = document.querySelector(currentTutorialStep.element);
      element?.classList.add('highlight');
    }
  }, [currentStep, currentTutorialStep]);

  return (
    <div>
      { showTutorial &&
        <div className="tutorial-overlay">
          <div className="tutorial-content">
            <h1>{currentTutorialStep.heading}</h1>
            <p>{currentTutorialStep.content}</p>
           
            { currentStep !== tutorialSteps.length &&
              <button onClick={() => setCurrentStep(currentStep + 1)}>Next Step</button>
            }
            { currentStep === tutorialSteps.length &&
              <button onClick={() => {setShowTutorial(false); setCurrentStep(1)}}>Close Tutorial</button>
              
            }
          </div>
        </div>
      }
      <button onClick={() => setShowTutorial(true)}>Show Tutorial</button>
    </div>
  );
}


export default TutorialOverlay
