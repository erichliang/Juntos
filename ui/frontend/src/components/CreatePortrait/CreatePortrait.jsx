import React, {useState} from 'react';

import classes from './CreatePortrait.scss';
import PortraitWizard from '../PortraitWizard/PortraitWizard';
import {BASE_URL} from '../../axios';

export default function CreatePortrait({match}) {
  const [photoId, setPhotoId] = useState(match.params.photoId);

  return (
      <div className={classes.container}>
        <div className={classes.column}>
          {photoId && <img style={{width: '100%'}} src={`${BASE_URL}/photo/${photoId}`} alt={photoId}/>}
        </div>
        <div className={classes.separator} />
        <div className={classes.column}>
           <PortraitWizard photoId={photoId} setPhotoId={setPhotoId} />
        </div>
      </div>
  )
}
