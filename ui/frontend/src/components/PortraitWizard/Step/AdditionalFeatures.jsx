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
            marks={{[-0.05]: 'Fluffy beard', [0.05]: 'No Beard'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'mustache'}
            name={'Mustache'}
            marks={{[-1]: 'No mustache', [0.05]: 'Fluffy mustache'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'goatee'}
            name={'Goatee'}
            marks={{[-0.05]: 'No goatee', [0.05]: 'Fluffy goatee'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'eyeglasses'}
            name={'Eyeglasses'}
            marks={{[-0.05]: 'No Eyeglasses', [0.05]: 'Eyeglasses'}} />
      </>
  )
}
