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
import tokenService from '../../services/Token/Token';
import Loading from '../../components/Loading';

class EditToken extends Component {

  constructor(props) {
    super(props);
    this.inputs = {
      address: ''
    }
    this.ticker = this.props.match.params.ticker;
    this.getToken = this.getToken.bind(this);
    this.updateToken = this.updateToken.bind(this);
    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    this.getToken(this.ticker)
  }

  async getToken(ticker) {
    try {
      this.setState({
        isLoading: true
      });
      var result = await tokenService.getTokenByTicker(ticker);
      if (result.status === 200 || result.status == 201) {
        this.inputs.address.value = result.data.address;
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

  async updateToken() {
    try {
      this.setState({
        isLoading: true
      });
      var data = {
        address: this.inputs.address.value
      }
      var result = await tokenService.updateToken(this.ticker, data);
      if (result.status == 200 || result.status == 201) {
        this.props.history.push('/tokens');
        this.setState({
          isLoading: false
        });
      } else {
        alert('Create token failed');
      }
    } catch (err) {
      alert('Create token failed');
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <div>
                  <span className="float-left margin-right-10" ><i className="fa fa-align-justify"></i> Edit Token</span>
                  <span className="float-left"> <Loading display={this.state.isLoading} /></span>
                </div>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input disabled={this.state.isLoading} innerRef={input => (this.inputs.address = input)} type="address" name="address" placeholder="Address" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.updateToken} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default EditToken;
