import React from 'react';
import AttributeSlider from '../AttributeSlider/AttributeSlider';

export default function Hair({config, setAttribute}) {
  return (
      <>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'hairline'}
            name={'Hairline'}
            marks={{[-1]: 'Low', [1]: 'High'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'bald'}
            name={'Baldness'}
            marks={{[-1]: 'Not bald', [1]: 'Bald'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            step={1}
            field={'color'}
            name={'Color'}
            marks={{[-1]: 'Black', [0]: 'Gray', [1]: 'Blond'}} />
      </>
  )
}
