import React from 'react';
import AttributeSlider from '../AttributeSlider/AttributeSlider';

export default function AdditionalFeatures({config, setAttribute}) {
  return (
      <>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'beard'}
            name={'beard'}
            marks={{[-config.amplitude]: 'More beard', [config.amplitude]: 'No Beard'}} />
      {/*
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'mustache'}
            name={'Mustache'}
            marks={{[-config.amplitude]: 'No mustache', [config.amplitude]: 'Fluffy mustache'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'goatee'}
            name={'Goatee'}
            marks={{[-config.amplitude]: 'No goatee', [config.amplitude]: 'Fluffy goatee'}} />
        */}
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'eyeglasses'}
            name={'Eyeglasses'}
            marks={{[-config.amplitude]: 'No Eyeglasses', [config.amplitude]: 'Eyeglasses'}} />
      </>
  )
}
