require('babel-polyfill');
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
import withdrawService from '../../services/Withdraw/Withdraw';
import tokenService from '../../services/Token/Token';

class WithDraw extends Component {

  constructor(props) {
    super(props);
    this.inputs = {
      ticker: '',
      address: '',
      amount: ''
    };
    this.tokenList = [];
    this.state = {
      isLoading: false
    }
    this.getTokenList = this.getTokenList.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  componentDidMount() {
    this.getTokenList();
  }

  async getTokenList() {
    try {
      this.setState({
        isLoading: true
      });
      var result = await tokenService.getTokenList();
      if (result.data) {
        this.tokenList = result.data;
        this.setState({
          isLoading: false
        });
      } else {
        this.setState({
          isLoading: false,
          isDisableInputs: false
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        isLoading: false
      });
    }
  }

  async withdraw() {
    try {
      this.setState({
        isLoading: true
      });
      var data = {
        address: this.inputs.address.value,
        amount: this.inputs.amount.value
      }
      var result = await withdrawService.withdraw(this.inputs.ticker.value, data);
      if (result.status === 200 || result.status == 201) {
        alert('Withdraw success');
        window.location.reload();
        this.setState({
          isLoading: false
        });
      } else {
        alert('Delete token failed');
      }
    } catch (err) {
      console.log(err);
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="8" lg="8">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> WithDraw
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Ticker</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input disabled={this.state.isLoading} innerRef={input => (this.inputs.ticker = input)} type="select" name="ticker" id="ticker">
                        {
                          this.tokenList.map(function(token) {
                            return <option key={token.ticker} value={token.ticker}>{token.ticker}</option>
                          })
                        }
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Recipient Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input disabled={this.state.isLoading} innerRef={input => (this.inputs.address = input)} type="text" id="hf-address" name="hf-address" placeholder="Enter Address" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Amount</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input disabled={this.state.isLoading} innerRef={input => (this.inputs.amount = input)} type="amount" id="hf-amount" name="hf-amount" placeholder="Amount" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.withdraw} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Withdraw</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default WithDraw;
