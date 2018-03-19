import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllTasks, postNewTask } from '../redux/reducer';

import './Layout.css';

class Layout extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className="layout">
        {this.props.children}
      </div>
    )
  }
}
const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getAllTasks, postNewTask};
export default connect(mapState, mapDispatch)(Layout);
