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

class Dashboard extends Component {

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
                <i className="fa fa-align-justify"></i> Balance
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Select token</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">ETH</option>
                        <option value="2">BTC</option>
                        <option value="3">EOS</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Balance</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">100.000</p>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Deposite
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" placeholder="Enter Address"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Amount</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" placeholder="Amount" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Deposite</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col xs="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> WithDraw
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Recipient Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" placeholder="Enter Address"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Amount</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" placeholder="Amount" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Withdraw</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;
