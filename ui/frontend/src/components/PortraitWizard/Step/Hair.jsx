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
            marks={{[-config.amplitude]: 'Low', [config.amplitude]: 'High'}} />
      {/*
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'bald'}
            name={'Baldness'}
            marks={{[-config.amplitude]: 'Not bald', [config.amplitude]: 'Bald'}} />
        */}
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'gray_hair'}
            name={'Hair Grayness'}
            marks={{[-config.amplitude]: 'Less gray', [config.amplitude]: 'More gray'}}/>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'black_hair'}
            name={'Hair Color'}
            marks={{[-config.amplitude]: 'Lighter', [config.amplitude]: 'Darker'}}/>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'bangs'}
            name={'Bangs'}
            marks={{[-config.amplitude]: 'Less bangs', [config.amplitude]: 'More bangs'}}/>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'wavy_hair'}
            name={'Wavy Hair'}
            marks={{[-config.amplitude]: 'Straight hair', [config.amplitude]: 'Wavy hair'}}/>
      </>
  )
}
