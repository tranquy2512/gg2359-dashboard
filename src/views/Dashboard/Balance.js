require('babel-polyfill');
import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CardColumns, Badge, Card, CardHeader, CardBody, Row, Col, Table, Button } from 'reactstrap';
import balanceService from '../../services/Balance/Balance';
import Loading from '../../components/Loading';

class Token extends Component {

  constructor(props) {
    super(props);
    this.balances = [];
    this.getTokenBalances = this.getTokenBalances.bind(this);
    this.state = {
      isLoading: false
    }
    this.moveToHistory = this.moveToHistory.bind(this);
    this.loadSubBalance = this.loadSubBalance.bind(this);
  }

  componentDidMount() {
    this.getTokenBalances();
  }

  async getTokenBalances() {
    try {
      this.setState({
        isLoading: true
      });
      var result = await balanceService.getTokenBalances();
      if (result.data) {
        this.balances = result.data;
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

  moveToHistory(tokenId) {
    this.props.history.push('/tokens/history/' + tokenId)
  }

  async loadSubBalance(ticker) {
    try {
      this.setState({
        isLoading: true
      });
      var result = await balanceService.getSubBalances(ticker);
      if (result.data) {
        this.balances.forEach(balance => {
          if (balance.ticker == ticker) {
            balance.subBalance = result.data.subBalance;
          }
        });
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

  render() {
    var self = this;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" lg="12">
            <Card>
              <CardHeader>
                <div>
                  <span className="float-left margin-right-10" ><i className="fa fa-align-justify"></i> Balances</span>
                  <span className="float-left"> <Loading display={this.state.isLoading} /></span>
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Ticker</th>
                      <th>Address</th>
                      <th>Main Wallet's balance</th>
                      <th>Sub Wallet's balance</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.balances.map(function (balance) {
                        return <tr key={balance.id}>
                          <td><Badge color="secondary">{balance.ticker}</Badge></td>
                          <td>{balance.address}</td>
                          <td>{balance.mainBalance}</td>
                          <td>{balance.subBalance ? balance.subBalance : <Button disabled={self.state.isLoading} onClick={() => { self.loadSubBalance(balance.ticker) }} size="sm" color="primary">Load</Button>}</td>
                          <td><Button disabled={self.state.isLoading} onClick={() => { self.moveToHistory(balance.ticker) }} type="submit" size="sm" color="warning"><i className="fa fa-dot-circle-o"></i> History</Button></td>
                        </tr>
                      })
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Token;
