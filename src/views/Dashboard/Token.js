import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CardColumns, Badge, Card, CardHeader, CardBody, Row, Col, Table, Button } from 'reactstrap';
import Loading from '../../components/Loading';

class Token extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
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
                  <span className="float-left margin-right-10" ><i className="fa fa-align-justify"></i> Tokens</span>
                  <span className="float-left"> <Loading display={this.state.isLoading} /></span>
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Ticker</th>
                      <th>Address</th>
                      <th>Decimal</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Badge color="secondary">ETH</Badge></td>
                      <td>123123782</td>
                      <td>123213</td>
                      <td><Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Edit</Button><span>  </span><Button type="submit" size="sm" color="danger"><i className="fa fa-dot-circle-o"></i> Delete</Button></td>
                    </tr>
                    <tr>
                      <td><Badge color="secondary">EOS</Badge></td>
                      <td>123123782</td>
                      <td>123213</td>
                      <td><Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Edit</Button><span>  </span><Button type="submit" size="sm" color="danger"><i className="fa fa-dot-circle-o"></i> Delete</Button></td>
                    </tr>
                    <tr>
                      <td><Badge color="secondary">BTX</Badge></td>
                      <td>123123782</td>
                      <td>123213</td>
                      <td><Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Edit</Button><span>  </span><Button type="submit" size="sm" color="danger"><i className="fa fa-dot-circle-o"></i> Delete</Button></td>
                    </tr>
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
