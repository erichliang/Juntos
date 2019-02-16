import React, {useState} from 'react';
import Steps from '../Steps/Steps';

export default function PortraitWizard() {
  const [step, setStep] = useState(0);

  return (
    <div>
      <Steps count={5} current={step} onStepClick={setStep} />
    </div>
  )
}
