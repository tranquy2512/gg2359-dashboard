require('babel-polyfill');
import React, { Component } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import Loading from '../Loading/Loading';
import tokenService from '../../services/Token/Token';

class NewTokenModal extends Component {

  constructor(props) {
    super(props);
    //State
    this.state = {
      isLoading: false
    };
    this.inputs = {
      ticker: '',
      address: '',
      decimal: ''
    }
    //Bind functions 
    this.createToken = this.createToken.bind(this);
  }

  async createToken() {
    try {
      this.setState({
        isLoading: true
      });
      var data = {
        ticker: this.inputs.ticker.value,
        address: this.inputs.address.value,
        decimal: parseFloat(this.inputs.decimal.value)
      }
      var result = await tokenService.createToken(data);
      if (result.status == 200 || result.status == 201) {
        this.props.cancel();
        this.setState({
          isLoading: false
        });
        window.location.reload();
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
      <Modal isOpen={this.props.isOpen}
        className={'modal-' + this.props.type}>
        <ModalHeader toggle={this.toggleDanger}>{this.props.title} <Loading display={this.state.isLoading} /></ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="12" md="12">
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Ticker</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input disabled={this.state.isLoading}  innerRef={input => (this.inputs.ticker = input)} type="text" name="ticker" placeholder="Enter Ticker"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input disabled={this.state.isLoading} innerRef={input => (this.inputs.address = input)} type="text" name="address" placeholder="Address" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Decimal</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input disabled={this.state.isLoading} innerRef={input => (this.inputs.decimal = input)} type="text" name="decimal" placeholder="Decimal" />
                    </Col>
                  </FormGroup>
                </Form>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color={this.props.type} disabled={this.state.isLoading} onClick={this.createToken}>Create</Button>{' '}
          <Button color="secondary" onClick={this.props.cancel}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default NewTokenModal;
