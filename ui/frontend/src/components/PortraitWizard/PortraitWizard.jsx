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
      '5_o_Clock_Shadow': 0,
      'Arched_Eyebrows': 0,
      'Attractive': 0,
      'Bags_Under_Eyes': 0,
      'Bald': 0,
      'Bangs': 0,
      'Big_Lips': 0,
      'Big_Nose': 0,
      'Black_Hair': 0,
      'Blond_Hair': 0,
      'Blurry': 0,
      'Brown_Hair': 0,
      'Bushy_Eyebrows': 0,
      'Chubby': 0,
      'Double_Chin': 0,
      'Eyeglasses': 0,
      'Goatee': 0,
      'Gray_Hair': 0,
      'Heavy_Makeup': 0,
      'High_Cheekbones': 0,
      'Male': 0,
      'Mouth_Slightly_Open': 0,
      'Mustache': 0,
      'Narrow_Eyes': 0,
      'No_Beard': 0,
      'Oval_Face': 0,
      'Pale_Skin': 0,
      'Pointy_Nose': 0,
      'Receding_Hairline': 0,
      'Rosy_Cheeks': 0,
      'Sideburns': 0,
      'Smiling': 0,
      'Straight_Hair': 0,
      'Wavy_Hair': 0,
      'Wearing_Earrings': 0,
      'Wearing_Hat': 0,
      'Wearing_Lipstick': 0,
      'Wearing_Necklace': 0,
      'Wearing_Necktie': 0,
      'Young': 0,
      'amplitude': 3,
      'seed_photo_id': photoId,
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

  async function generateImage(config) {
    const {data} = await axios.post('/generate-image', config);

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
