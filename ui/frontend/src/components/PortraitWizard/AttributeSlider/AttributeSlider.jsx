import React from 'react';
import Slider from 'rc-slider';

import classes from './AttributeSlider.scss';

export default function AttributeSlider({config, setAttribute, field, name, ...props}) {
  return (
      <>
        <Slider min={-1}
                max={1}
                step={0.1}
                value={config[field]}
                onChange={(v) => setAttribute(field, v)}
                style={{
                  height: 25
                }}
                trackStyle={{
                  height: 15
                }}
                railStyle={{
                  height: 15
                }}
                handleStyle={{
                  width: 25,
                  height: 25,
                  marginLeft: -12.5,
                  marginRight: -12.5,
                }}
                dotStyle={{
                  display: 'none'
                }} {...props} />
        <div className={classes.name}>
          {name}
        </div>
      </>
  )
}
