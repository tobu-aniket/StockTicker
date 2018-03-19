import React, {Component} from 'react';
import { Table, PageHeader } from 'react-bootstrap';
import TimeAgo from 'react-timeago';

class StockTicker extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() { }

  componentWillReceiveProps(nextProps) {

  }
/*
*/
  render() {
    return (
      <div>
        <PageHeader>
          Simple React Stock Ticker Table
        </PageHeader>
        <div className="container">
          <div className="row">
            <div>
              <Table striped bordered condensed hover >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.stocks.map((item, index) => (<tr key={index}>
                    <td>{index}</td>
                    <td>{item["name"]}</td>
                    <td>{item["price"]}</td>
                    <td><span className={'stock-'+(item["change"]?(item["change"]>0?"up":"down") : null)}></span>{item["change"]}</td>
                    <td><TimeAgo date={item["time"]}/></td>
                  </tr>))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StockTicker
