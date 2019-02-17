import React from 'react';
import AttributeSlider from '../AttributeSlider/AttributeSlider';

export default function MainFeatures({config, setAttribute}) {
  return (
      <>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'skin_tone'}
            name={'Skin tone'}
            marks={{[-1]: 'Light', [1]: 'Dark'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'nose_size'}
            name={'Nose Size'}
            marks={{[-1]: 'Small', [1]: 'Big'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'nose_pointy'}
            name={'Pointy Nose'}
            marks={{[-1]: 'Not pointy', [1]: 'Very pointy'}} />
      </>
  )
}
