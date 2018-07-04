import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CardColumns, Badge, Card, CardHeader, CardBody, Row, Col, Table, Button } from 'reactstrap';
import Loading from '../../components/Loading';
import userService from '../../services/User/User';

class UserHistory extends Component {

  constructor(props) {
    super(props);
    this.userId = this.props.match.params.userId;
    this.user;
    this.depositList = [];
    this.withdrawList = [];
    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    this.getUserList();
  }

  async getUserList() {
    try {
      var self = this;
      this.setState({
        isLoading: true
      });
      var result = await userService.getUserList();
      if (result.data) {
        this.users = result.data;
        this.users.forEach(user => {
          if (user.id == this.userId) {
            this.user = user;
          }
        });
        this.user.tokens.forEach(token => {
          token.deposits.forEach(depo => {
            depo.ticker = token.ticker;
            depo.address = token.address;
            self.depositList.push(depo);
          });
          token.withdrawals.forEach(wd => {
            wd.ticker = token.ticker;
            wd.tokenAddress = token.address;
            self.withdrawList.push(wd);
          });
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
    return (
      <div className="animated fadeIn">
        <Row>
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
                      <th>Ticker</th>
                      <th>Address</th>
                      <th>Deposit Id</th>
                      <th>Amount</th>
                      <th>Hash</th>
                      <th>Create At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.depositList.map(function (depo) {
                        return <tr key={depo.id}>
                          <td><Badge color="secondary">{depo.ticker}</Badge></td>
                          <td>{depo.address}</td>
                          <td>{depo.id}</td>
                          <td>{depo.amount}</td>
                          <td>{depo.txhash}</td>
                          <td>{depo.createdAt}</td>
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
                  <span className="float-left margin-right-10" ><i className="fa fa-align-justify"></i> Withdraw history</span>
                  <span className="float-left"> <Loading display={this.state.isLoading} /></span>
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Ticker</th>
                      <th>Token Address</th>
                      <th>Withdraw Id</th>
                      <th>Amount</th>
                      <th>Hash</th>
                      <th>Address</th>
                      <th>Create At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.withdrawList.map(function (wd) {
                        return <tr key={wd.id}>
                          <td><Badge color="secondary">{wd.ticker}</Badge></td>
                          <td>{wd.tokenAddress}</td>
                          <td>{wd.id}</td>
                          <td>{wd.amount}</td>
                          <td>{wd.txhash}</td>
                          <td>{wd.address}</td>
                          <td>{wd.createdAt}</td>
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

export default UserHistory;
