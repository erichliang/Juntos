import React from 'react';
import AttributeSlider from '../AttributeSlider/AttributeSlider';

export default function AdditionalFeatures({config, setAttribute}) {
  return (
      <>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'No_Beard'}
            name={'Beard'}
            marks={{[-config.amplitude]: 'More beard', [config.amplitude]: 'No Beard'}} />
      {/*
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Mustache'}
            name={'Mustache'}
            marks={{[-config.amplitude]: 'No mustache', [config.amplitude]: 'Dense Mustache'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Goatee'}
            name={'Goatee'}
            marks={{[-config.amplitude]: 'No goatee', [config.amplitude]: 'Dense goatee'}} />
        */}
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Eyeglasses'}
            name={'Eyeglasses'}
            marks={{[-config.amplitude]: 'No Eyeglasses', [config.amplitude]: 'Eyeglasses'}} />
      </>
  )
}
