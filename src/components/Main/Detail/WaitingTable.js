import React, { Component } from 'react';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';
// import '../css/Table.css';
// import 'node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

/*
var options = {
  onRowClick: function (row) {
    //일단 row
    console.log(row)
    if (this.props.isOpened) {
      this.props.callbackFromParent = {
        isOpened: false
      }
    }
    else {
      this.props.callbackFromParent = {
        isOpened: true
      }
    }
    // this.setState({isOpened: this.state.isOpened=true})
    // console.log("클클릭릭")
  }
}*/

// onFormSubmit = e => {
//   e.preventDefault();

//     this.props.onSubmit(this.state.text);
// }


class WaitingTable extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpened: false }

    console.log(this.props)
  }
  static defaultProps = {
    isOpened: false
  }

render() {
  console.log(111)
  console.log(this.state.isOpened)

  const opened = this.state.isOpened
  var options = {
    onRowClick (row) {
      //일단 row
      console.log(row)
      console.log(opened);
      if (opened) {
        this.setState({isOpened: false})
        this.props.callbackFromParent(this.state.isOpened)
      }
      else {
        this.setState({isOpened: true})
        this.props.callbackFromParent(this.state.isOpened)
        }
      }
    }
  
      const selectRowProp = {
      mode: 'checkbox',
      clickToSelect: true  // enable click to select
    };

    return(
        <div>
    <BootstrapTable data={this.props.data}
      options={options}
      selectRow={selectRowProp}>
      <TableHeaderColumn isKey dataField='id'
        dataAlign='center'
        headerAlign="left"
        width="50"
        tdStyle={
          { backgroundColor: '#E9FFE2' }}>
        ID
            </TableHeaderColumn>
      <TableHeaderColumn dataField='name'
        dataAlign='center'
        headerAlign="center"
        width="400">
        Name
            </TableHeaderColumn>
      <TableHeaderColumn dataField='age'
        dataAlign='center'
        headerAlign="center"
        width="100">
        Age
            </TableHeaderColumn>
      <TableHeaderColumn dataField='gender'
        dataAlign='center'
        headerAlign="center"
        width="100">
        Gender
            </TableHeaderColumn>
    </BootstrapTable>
        </div >
      );
}}
  

export default WaitingTable;