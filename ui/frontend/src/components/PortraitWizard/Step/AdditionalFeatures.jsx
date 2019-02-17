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
            marks={{[-1]: 'No beard', [1]: 'Fluffy Beard'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'mustache'}
            name={'Mustache'}
            marks={{[-1]: 'No mustache', [1]: 'Fluffy mustache'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'goatee'}
            name={'Goatee'}
            marks={{[-1]: 'No goatee', [1]: 'Fluffy goatee'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'eyeglasses'}
            name={'Eyeglasses'}
            step={2}
            marks={{[-1]: 'No Eyeglasses', [1]: 'Eyeglasses'}} />
      </>
  )
}
