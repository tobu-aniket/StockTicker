import React, {Component} from 'react';
import { connect } from 'react-redux';

import Websocket from 'websocket';
import { Table } from 'react-bootstrap';
import Constants from '../constants';
import StockTable from './StockTable';
import { updateStocksAction } from '../redux/actions';


class StockTicker extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    console.log(Websocket);
    this.ws = new Websocket.w3cwebsocket('ws://stocks.mnet.website');
    this.ws.onmessage = (event)=> (this.props.updateStocksAction(event));
  }

  componentDidMount() { }

  componentWillReceiveProps(nextProps) {

  }
/*
*/
  render() {
    var self = this;
    var stocks = [];
    Object.keys(this.props.stocks).forEach((key)=> {
      stocks.push(self.props.stocks[key]);
    });
    return (
      <div>
        <StockTable stocks={stocks} startTime={this.props.startTime}/>
      </div>
    )
  }
}
const mapState = ({stocks, startTime}) => ({stocks, startTime});
const mapDispatch = { updateStocksAction };
export default connect(mapState, mapDispatch)(StockTicker);
