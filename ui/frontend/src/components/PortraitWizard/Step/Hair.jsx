import React from 'react';
import AttributeSlider from '../AttributeSlider/AttributeSlider';

export default function Hair({config, setAttribute}) {
  return (
      <>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Receding_Hairline'}
            name={'Hairline'}
            marks={{[-config.amplitude]: 'Low', [config.amplitude]: 'High'}} />
      {/*
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Bald'}
            name={'Baldness'}
            marks={{[-config.amplitude]: 'Not bald', [config.amplitude]: 'Bald'}} />
        */}
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Gray_Hair'}
            name={'Hair Grayness'}
            marks={{[-config.amplitude]: 'Less gray', [config.amplitude]: 'More gray'}}/>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Black_Hair'}
            name={'Hair Color'}
            marks={{[-config.amplitude]: 'Lighter', [config.amplitude]: 'Darker'}}/>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Bangs'}
            name={'Bangs'}
            marks={{[-config.amplitude]: 'Less bangs', [config.amplitude]: 'More bangs'}}/>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Wavy_Hair'}
            name={'Wavy Hair'}
            marks={{[-config.amplitude]: 'Straight hair', [config.amplitude]: 'Wavy hair'}}/>
      </>
  )
}
