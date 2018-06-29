import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CardColumns, Badge, Card, CardHeader, CardBody, Row, Col, Table, Button } from 'reactstrap';
import userService from '../../services/User/User';
import BalancePopover from '../../components/CustomPopover/BalancePopover';
import Loading from '../../components/Loading';

class User extends Component {

  constructor(props) {
    super(props);
    this.users = [];
    this.getUserList = this.getUserList.bind(this);
    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    this.getUserList();
  }

  async getUserList() {
    try {
      this.setState({
        isLoading: true
      });
      var result = await userService.getUserList();
      if (result.data) {
        this.users = result.data;
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
                  <span className="float-left margin-right-10" ><i className="fa fa-align-justify"></i> User</span>
                  <span className="float-left"> <Loading display={this.state.isLoading} /></span>
                </div>
              </CardHeader>
              <CardBody>
              <Table responsive striped>
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>Status</th>
                      <th>Balances</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.users.map(function(user) {
                        return <tr key={user.id}>
                        <td>{user.username}</td>
                        <td><Badge color="secondary">{user.status}</Badge></td>
                        <td><BalancePopover title={'Balances'} buttonText={'View'} placement={'right'} id={user.id} balances={user.balance}/></td>
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

export default User;
