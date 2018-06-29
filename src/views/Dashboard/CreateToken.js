import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2'; import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class CreateToken extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Add new token
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Ticker</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" placeholder="Enter Ticker"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" placeholder="Address" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Decimal</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" placeholder="Decimal" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Create</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CreateToken;
