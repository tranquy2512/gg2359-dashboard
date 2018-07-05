import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CardColumns, Badge, Card, CardHeader, CardBody, Row, Col, Table, Button } from 'reactstrap';
import Loading from '../../components/Loading';
import CreateTokenModal from '../../components/Modals/CreateTokenModal';
import tokenService from '../../services/Token/Token';

class Token extends Component {

  constructor(props) {
    super(props);
    this.tokens = [];
    this.state = {
      isLoading: false,
      isModalOpen: false
    }
    this.editToken = this.editToken.bind(this);
    this.toogleModal = this.toogleModal.bind(this);
    this.deleteToken = this.deleteToken.bind(this);
    this.getTokenList = this.getTokenList.bind(this);
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
        this.tokens = result.data;
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

  toogleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  editToken(tokenId) {
    this.props.history.push('/tokens/' + tokenId)
  }

  async deleteToken(ticker) {
    try {
      this.setState({
        isLoading: true
      });
      var result = await tokenService.deleteToken(ticker);
      if (result.status === 200 || result.status == 201) {
        this.setState({
          isLoading: false
        });
        window.location.reload();
      } else {
        alert('Delete token failed');
      }
    } catch (err) {
      alert('Delete token failed');
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    var self = this;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" lg="12">
            <Card>
              <CardHeader>
                <div>
                  <span className="float-left margin-right-10" ><i className="fa fa-align-justify"></i> Tokens</span>
                  <span className="float-left"> <Loading display={this.state.isLoading} /></span>
                </div>
                <div className="float-right">
                  <Button onClick={this.toogleModal} className="btn-sm" color="primary"><i className="fa fa-plus"></i>{'\u00A0'} Create token</Button>
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Ticker</th>
                      <th>Address</th>
                      <th>Decimal</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.tokens.map(function(token) {
                        return <tr key={token.ticker}>
                        <td><Badge color="secondary">{token.ticker}</Badge></td>
                        <td>{token.address}</td>
                        <td>{token.decimal}</td>
                        <td>
                          <Button onClick={() => {self.editToken(token.ticker)}} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Edit</Button><span>  </span>
                          <Button onClick={() => {self.deleteToken(token.ticker)}} type="submit" size="sm" color="danger"><i className="fa fa-dot-circle-o"></i> Delete</Button>
                        </td>
                      </tr>
                      })
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <CreateTokenModal isOpen={this.state.isModalOpen} type={"info"} title={"Create token"} cancel={this.toogleModal}/>
      </div>
    )
  }
}

export default Token;
