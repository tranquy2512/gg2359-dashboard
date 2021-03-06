require('babel-polyfill');
import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import Token from '../../views/Dashboard/Token';
import Balance from '../../views/Dashboard/Balance';
import EditToken from '../../views/Dashboard/EditToken';
import User from '../../views/Dashboard/User';
import UserHistory from '../../views/Dashboard/UserHistory';
import TokenHistory from '../../views/Dashboard/TokenHistory';
import WithDraw from '../../views/Dashboard/WithDraw';
class Full extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route exact path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route exact path="/tokens" name="Tokens" component={Token} />
                <Route exact path="/balances" name="Balances" component={Balance} />
                <Route exact path="/tokens/:ticker" name="Tokens" component={EditToken} />
                <Route exact path="/tokens/history/:ticker" name="Token History" component={TokenHistory} />
                <Route exact path="/users" name="Users" component={User} />
                <Route exact path="/users/history/:userId" name="User history" component={UserHistory} />
                <Route exact path="/withdraw" name="Withdraw" component={WithDraw} />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
