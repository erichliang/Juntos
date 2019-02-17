import React, {useState} from 'react';
import Steps from '../Steps/Steps';
import classes from './PortraitWizard.scss';
import Button from '../Button/Button';
import Basics from './Step/Basics';
import MainFeatures from './Step/MainFeatures';
import Hair from './Step/Hair';
import AdditionalFeatures from './Step/AdditionalFeatures';

const STEPS = [
  {
    name: "Basics",
    component: Basics
  },
  {
    name: "Main Features",
    component: MainFeatures
  },
  {
    name: "Hair",
    component: Hair
  },
  {
    name: "Additional Features",
    component: AdditionalFeatures
  },
  {
    name: 'You\'re all set !',
    isLast: true,
  }
];

export default function PortraitWizard() {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState({
    gender: 0,
    age: 0,
    hairline: 0,
    bald: 0,
    color: 0,
    skin_tone: 0,
    nose_size: 0,
    nose_pointy: 0,
    beard: 0,
    mustache: 0,
    goatee: 0,
    eyeglasses: -1,
  });

  const feature = {
    choices: [],
    isLast: false,
    ...STEPS[step]
  };

  function setAttribute(name, value) {
    setConfig({
      ...config,
      [name]: value
    })
  }

  function renderContent() {
    if(feature.isLast) {
      return (
          <div style={{marginTop: 20}}>
            <Button onClick={() => alert("Yay !")}>
              Submit
            </Button>
          </div>
      )
    }

    return (
        <>
          <feature.component config={config} setAttribute={setAttribute} />
          <Button onClick={() => setStep(step + 1)}>
            Next
          </Button>
        </>
    )
  }

  return (
    <>
      <Steps steps={STEPS} current={step} onStepClick={setStep} />
      <div className={classes.title}>
        {feature.name}
      </div>
      {renderContent()}
    </>
  )
}
