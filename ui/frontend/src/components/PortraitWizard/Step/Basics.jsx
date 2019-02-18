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
            marks={{[-0.05]: 'Female', [0.05]: 'Male'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'age'}
            name={'Age'}
            marks={{[-0.05]: 'Older', [0.05]: 'Younger'}} />
      </>
  )
}
