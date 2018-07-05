import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CardColumns, Badge, Card, CardHeader, CardBody, Row, Col, Table, Button } from 'reactstrap';
import Loading from '../../components/Loading';
import tokenService from '../../services/Token/Token';
class TokenHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
    this.depositList = [];
    this.withdrawList = [];
    this.ticker = this.props.match.params.ticker;
    this.getTokenHistory = this.getTokenHistory.bind(this);
  }

  componentDidMount() {
    this.getTokenHistory();
  }

  async getTokenHistory() {
    try {
      var self = this;
      this.setState({
        isLoading: true
      });
      var result = await tokenService.getTokenHistory(this.ticker);
      if (result.data) {
        this.depositList = result.data.deposits;
        this.withdrawList = result.data.withdrawals;
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
                  <span className="float-left margin-right-10" ><i className="fa fa-align-justify"></i> Withdraw history</span>
                  <span className="float-left"> <Loading display={this.state.isLoading} /></span>
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Amount</th>
                      <th>Txhash</th>
                      <th>Withdraw at</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.withdrawList.map(function (wd) {
                        return <tr key={wd.txhash}>
                          <td>{wd.amount}</td>
                          <td><Badge color="secondary">{wd.txhash}</Badge></td>
                          <td>{wd.withdrawAt}</td>
                        </tr>
                      })
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="12" lg="12">
            <Card>
              <CardHeader>
                <div>
                  <span className="float-left margin-right-10" ><i className="fa fa-align-justify"></i> Deposit history</span>
                  <span className="float-left"> <Loading display={this.state.isLoading} /></span>
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Amount</th>
                      <th>Txhash</th>
                      <th>Deposit at</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.depositList.map(function (dp) {
                        return <tr key={dp.txhash}>
                          <td>{dp.amount}</td>
                          <td><Badge color="secondary">{dp.txhash}</Badge></td>
                          <td>{dp.depositAt}</td>
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

export default TokenHistory;
