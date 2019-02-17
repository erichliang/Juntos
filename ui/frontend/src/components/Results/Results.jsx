import React from 'react';

import classes from './Results.scss';
import {BASE_URL} from '../../axios';

const mock = [
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
  {
    name: 'John Doe',
    photo_id: '5c69095b28b673337eecd7a1',
  },
];

export default function Results({results = mock}) {
  function renderResult(result, i) {
    return (
        <div key={i} className={classes.result} onClick={() => alert(result.name)}>
          <img src={`${BASE_URL}/photo/${result.photo_id}`} alt=""/>
        </div>
    )
  }

  return (
      <div className={classes.container}>
        <div className={classes.results}>
          {results.map(renderResult)}
        </div>
      </div>
  )
}