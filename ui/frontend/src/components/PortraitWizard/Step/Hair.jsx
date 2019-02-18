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
            marks={{[-0.05]: 'Low', [0.05]: 'High'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'bald'}
            name={'Baldness'}
            marks={{[-0.05]: 'Not bald', [0.05]: 'Bald'}} />
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'gray_hair'}
            name={'Hair Grayness'}
            marks={{[-0.05]: 'Less gray', [0.05]: 'More gray'}}/>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'black_hair'}
            name={'Hair Color'}
            marks={{[-0.05]: 'Lighter', [0.05]: 'Darker'}}/>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'bangs'}
            name={'Bangs'}
            marks={{[-0.05]: 'Less bangs', [0.05]: 'More bangs'}}/>
        <AttributeSlider
            config={config}
            setAttribute={setAttribute}
            field={'wavy_hair'}
            name={'Wavy Hair'}
            marks={{[-0.05]: 'Straight hair', [0.05]: 'Wavy hair'}}/>
      </>
  )
}
