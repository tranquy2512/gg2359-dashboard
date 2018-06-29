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
    this.getAccountBalances = this.getAccountBalances.bind(this);
    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    this.getAccountBalances();
  }

  async getAccountBalances() {
    try {
      this.setState({
        isLoading: true
      });
      var result = await balanceService.getAccountBalances();
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

  render() {
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
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.balances.map(function (balance) {
                        return <tr key={balance.id}>
                          <td><Badge color="secondary">{balance.ticker}</Badge></td>
                          <td>{balance['Total Amount']}</td>
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
