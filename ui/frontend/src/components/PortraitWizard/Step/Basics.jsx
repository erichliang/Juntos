import React from 'react';
import AttributeSlider from '../AttributeSlider/AttributeSlider';

export default function Basics({config, setAttribute}) {
  return (
      <>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Male'}
            name={'Gender'}
            marks={{[-config.amplitude]: 'Female', [config.amplitude]: 'Male'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Young'}
            name={'Age'}
            marks={{[-config.amplitude]: 'Older', [config.amplitude]: 'Younger'}} />
      </>
  )
}
