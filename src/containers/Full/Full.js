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
import CreateToken from '../../views/Dashboard/CreateToken';
import User from '../../views/Dashboard/User';

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
                <Route exact path="/tokens/create" name="Tokens" component={CreateToken} />
                <Route exact path="/users" name="Users" component={User} />
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
