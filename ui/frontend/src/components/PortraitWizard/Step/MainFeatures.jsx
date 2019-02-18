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
            marks={{[-0.05]: 'Dark', [0.05]: 'Light'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'nose_size'}
            name={'Nose Size'}
            marks={{[-0.05]: 'Small', [0.05]: 'Big'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'nose_pointy'}
            name={'Pointy Nose'}
            marks={{[-0.05]: 'Not pointy', [0.05]: 'Very pointy'}} />
      </>
  )
}
