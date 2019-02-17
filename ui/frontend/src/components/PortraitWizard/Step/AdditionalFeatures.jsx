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
            marks={{[-1]: 'Fluffy beard', [1]: 'No Beard'}} />
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
            marks={{[-1]: 'No Eyeglasses', [1]: 'Eyeglasses'}} />
      </>
  )
}
