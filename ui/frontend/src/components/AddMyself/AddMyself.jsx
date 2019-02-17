import React, {useRef} from 'react';
import classes from './AddMyself.scss';

import axios from '../../axios';
import Button from '../Button/Button';

import { Col, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

export default function AddMyself({history}) {
  const formRef = useRef();

  async function onSubmit(e) {
    e.preventDefault()
    console.log(e.target);
    const formData = new FormData(e.target);
    const formDataImage = new FormData();
    formDataImage.append('image', formData.get('image'));
    formData.delete('image');


    const object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });

    console.log(object);



    const objectImage = {};
    formDataImage.forEach(function(value, key){
        objectImage[key] = value;
    });

    console.log(objectImage);

    const {data: dataImage} = await axios.post('/photo', formDataImage, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log(dataImage);

    formData.append('photo_id', dataImage['photo_id'])


    const {data} = await axios.post('/person', formData, {
      headers: {
        'Content-Type': 'json'
      }
    });

    console.log(data);


    history.push("/")
  }

  function clickSubmit() {
    formRef.current.dispatchEvent(new Event('submit'))
  }

  return (
      <div className={classes.centerWrapper}>
        <form ref={formRef} onSubmit={onSubmit}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Full Name</Label>
            <Col sm={10}>
              <Input type="email" name="name" id="exampleEmail"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="exampleEmail"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Phone Number</Label>
            <Col sm={10}>
              <Input type="email" name="phone_number" id="exampleEmail" placeholder="Numbers only"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Address</Label>
            <Col sm={10}>
              <Input type="email" name="address" id="exampleEmail"/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Is Missing</Label>
            <Input type="select" name="is_missing" id="exampleSelect">
              <option>No</option>
              <option>Yes</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Is Searching</Label>
            <Input type="select" name="is_searching" id="exampleSelect">
              <option>No</option>
              <option>Yes</option>
            </Input>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleFile" sm={2}>Your Photo</Label>
            <Col sm={10}>
              <Input type="file" name="image" id="exampleFile" />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 12 }}>
              <Button onClick={clickSubmit}>Submit</Button>
            </Col>
          </FormGroup>
        </form>
      </div>
  );
  
}