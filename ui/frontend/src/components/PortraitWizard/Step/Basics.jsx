import React from 'react';
import AttributeSlider from '../AttributeSlider/AttributeSlider';

export default function Basics({config, setAttribute}) {
  return (
      <>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'gender'}
            name={'Gender'}
            marks={{[-1]: 'Female', [1]: 'Male'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'age'}
            name={'Age'}
            marks={{[-1]: 'Younger', [1]: 'Older'}} />
      </>
  )
}
