import React from 'react';
import AttributeSlider from '../AttributeSlider/AttributeSlider';

export default function MainFeatures({config, setAttribute}) {
  return (
      <>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Pale_Skin'}
            name={'Skin tone'}
            marks={{[-config.amplitude]: 'Dark', [config.amplitude]: 'Light'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Big_Nose'}
            name={'Nose Size'}
            marks={{[-config.amplitude]: 'Small', [config.amplitude]: 'Big'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'Pointy_Nose'}
            name={'Pointy Nose'}
            marks={{[-config.amplitude]: 'Not pointy', [config.amplitude]: 'Very pointy'}} />
      </>
  )
}
