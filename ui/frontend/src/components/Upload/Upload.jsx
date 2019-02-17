import React from 'react';
import Dropzone from 'react-dropzone'
import cx from 'classnames';
import axios from '../../axios';

import classes from './Upload.scss';

export default function Upload() {
  async function onDrop(acceptedFiles, rejectedFiles) {
    const image = acceptedFiles[0];

    if(image) {
      const formData = new FormData();
      formData.append("image", image);
      const {data} = await axios.post('/seed-image-recon', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(data);
    }
  }

  return (
      <div className={classes.centerWrapper}>
        <Dropzone onDrop={onDrop} accept={['image/*']}>
          {({getRootProps, getInputProps, isDragActive}) => {
            return (
                <div
                    {...getRootProps()}
                    className={cx(classes.dropZone, {[classes.active]: isDragActive})}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                        <div>Drop files here...</div> :
                        <div>Try dropping some files here, or click to select files to upload.</div>
                  }
                </div>
            )
          }}
        </Dropzone>
      </div>
  )
}
