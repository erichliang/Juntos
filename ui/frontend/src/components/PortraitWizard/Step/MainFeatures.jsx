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
            marks={{[config.amplitude]: 'Dark', [config.amplitude]: 'Light'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'nose_size'}
            name={'Nose Size'}
            marks={{[-config.amplitude]: 'Small', [config.amplitude]: 'Big'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'nose_pointy'}
            name={'Pointy Nose'}
            marks={{[-config.amplitude]: 'Not pointy', [config.amplitude]: 'Very pointy'}} />
      </>
  )
}
