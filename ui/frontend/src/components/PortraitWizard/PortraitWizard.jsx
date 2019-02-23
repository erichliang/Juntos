import React, {useState, useEffect} from 'react';
import Steps from '../Steps/Steps';
import classes from './PortraitWizard.scss';
import Button from '../Button/Button';
import Basics from './Step/Basics';
import MainFeatures from './Step/MainFeatures';
import Hair from './Step/Hair';
import AdditionalFeatures from './Step/AdditionalFeatures';
import axios from '../../axios';
import useDebouncedCallback from 'use-debounce/lib/callback';

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

export default function PortraitWizard({photoId, setPhotoId}) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState({
    gender: 0,
    age: 0,
    hairline: 0,
    bald: 0,
    gray_hair: 0,
    black_hair: 0,
    blond_hair: 0,
    skin_tone: 0,
    nose_size: 0,
    nose_pointy: 0,
    beard: 0,
    mustache: 0,
    goatee: 0,
    eyeglasses: 0,
    chubby: 0,
    bangs: 0,
    wavy_hair: 0
  });

  const debouncedGenerateImage = useDebouncedCallback(generateImage, 200);

  async function fetchConfig() {
    const {data} = await axios.get('/seed-image-features/'+photoId);

    setConfig({
      ...config,
      ...data
    })
    setLoading(false)
  }

  useEffect(() => {
    if(photoId) {
      fetchConfig()
    } else {
      setLoading(false);
    }
  }, []);

  const feature = {
    choices: [],
    isLast: false,
    ...STEPS[step]
  };

  function setAttribute(name, value) {
    const newState = {
      ...config,
      [name]: value
    };

    setConfig(newState);

    debouncedGenerateImage(newState)
  }

  async function generateImage(state) {
    const {data} = await axios.post('/generate-image', state);

    setPhotoId(data.photo_id);

    return data;
  }

  async function submit() {
    generateImage(config)
  }

  function renderContent() {
    if(feature.isLast) {
      return (
          <div style={{marginTop: 20}}>
            <a href="https://devpost.com/software/juntos-yslqri">See how we made it!</a>
            {/*
            <Button onClick={submit}>
              Submit
            </Button>
            */}
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

  if(loading) {
    return "Loading..."
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
