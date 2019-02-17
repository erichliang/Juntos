import React from 'react';
import classes from './AddMyself.scss';

import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

export default class AddMyself extends React.Component {
  render() {
    return (

//      <Row>
//        <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
        <div className={classes.centerWrapper}>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Full Name</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail"/>
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
                <Input type="email" name="email" id="exampleEmail" placeholder="Numbers only"/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Address</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail"/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Is Missing</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Is Searching</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>Your Photo</Label>
              <Col sm={10}>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  Cropped to the face
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
//        </Col>
//      </Row>
    );
  }
}