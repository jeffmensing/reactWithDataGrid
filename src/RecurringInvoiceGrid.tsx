import React from 'react';
import 'devextreme/dist/css/dx.light.css';
// import { customers } from './data.js';
import DataGrid, {
  Selection,
  Column,
  Button,
} from 'devextreme-react/data-grid';
import { SelectBox } from 'devextreme-react';
import { customers } from './data';

const food = ['Food','Pizza']; 

class RecurringInvoiceGrid extends React.Component { 
state = {
  customers: [
    {
    'ID': 1,
    'Customer': 'Colin Pear',
    'Food': 'Pizza',
    'Color': 'Blue',
    'Animal': 'Koala',
    'Car': 'Mustang',
    'Location': 'USA',
    },
    {
    'ID': 2,
    'Customer': 'Colin Pear',
    'Food': 'Pizza',
    'Color': 'Blue',
    'Animal': 'Koala',
    'Car': 'Mustang',
    'Location': 'USA',
    },
    {
    'ID': 3,
    'Customer': 'Colin Pear',
    'Food': 'Pizza',
    'Color': 'Blue',
    'Animal': 'Koala',
    'Car': 'Mustang',
    'Location': 'USA',
    },
    {
    'ID': 4,
    'Customer': 'Colin Pear',
    'Food': 'Pizza',
    'Color': 'Blue',
    'Animal': 'Koala',
    'Car': 'Mustang',
    'Location': 'USA',
    },
    {
    'ID': 5,    
    'Customer': 'Colin Pear',
    'Food': 'Pizza',
    'Color': 'Blue',
    'Animal': 'Koala',
    'Car': 'Mustang',
    'Location': 'USA',
    },
    {
    'ID': 6,
    'Customer': 'Colin Pear',
    'Food': 'Pizza',
    'Color': 'Blue',
    'Animal': 'Koala',
    'Car': 'Mustang',
    'Location': 'USA',
    },
    {
    'ID': 7,
    'Customer': 'Colin Pear',
    'Food': 'Pizza',
    'Color': 'Blue',
    'Animal': 'Koala',
    'Car': 'Mustang',
    'Location': 'USA',
    }
  ],
  rowKeys : [] as any []

};

constructor(props: any) {
  super(props);
  this.myCommand = this.myCommand.bind(this);
  this.renderOnOff = this.renderOnOff.bind(this);
  this.renderPlayPause = this.renderPlayPause.bind(this);

}

myCommand (e: any) {
    var newRowKeys = JSON.parse(JSON.stringify(this.state.rowKeys));
    if (this.state.rowKeys.includes(e.row.key)) {
      var index = this.state.rowKeys.indexOf(e.row.key);
      newRowKeys.splice(index, 1);
  } else {
      newRowKeys.push(e.row.key);
  }
  this.setState({
      rowKeys: newRowKeys
  });
};

renderOnOff(e: any) {
  var text = this.state.rowKeys.includes(e.row.key) ? "ON" : "OFF";
  var myClass = this.state.rowKeys.includes(e.row.key) ? "btnOn" : "btnOff";
  // eslint-disable-next-line
  return (<a href="#" className={`dx-link ${myClass}`}>{text}</a>);
}

renderPlayPause(e: any) {
  var myIcon = this.state.rowKeys.includes(e.row.key) ? "fa fa-pause" : "fa fa-play";
  // eslint-disable-next-line
  return (<a href="#" className={`dx-link dx-icon dx-link-icon ${myIcon}`} onClick={() => this.myCommand(e)}></a>);
}

  render() {
  return (
    <div className="mainDiv">
      <div className="searchBar">
        <div className="allCust" >
          <SelectBox className="allCustSb"
            placeholder={"All Customers"}
            dataSource={customers}
            valueExpr="ID"
            displayExpr="Customer"
            width="350" />
        </div>    
        <div className="food">
          <SelectBox
            placeholder={"Food"}
            dataSource={customers}
            valueExpr="ID"
            displayExpr="Food" />
        </div>
        <div className="location" >
          <SelectBox
            placeholder={"Location"}
            dataSource={customers}
            valueExpr="ID"
            displayExpr="Location" />
        </div>
      </div>
      <div className="dataGrdDiv">
        <DataGrid className="dataGrd"
          dataSource={this.state.customers}
          keyExpr="ID"
          showColumnLines={false}
          showRowLines={true}
          columnAutoWidth={true}
          rowAlternationEnabled={true}           
          // onRowUpdated={}
        >
        <Selection mode="multiple" /> 
        <Column
          caption="Customer"
          dataField="Customer"     
        />
        <Column
          caption="Food"
          dataField="Food"
        />
        <Column
          caption="Color"
          dataField="Color" 
        />
        <Column
          caption="Animal"
          dataField="Animal"
        />
        <Column
          caption="Car"
          dataField="Car" 
        />
        <Column
          caption="Location"
          dataField="Location"
          width={100}
        />
        <Column caption="On or Off" 
                type="buttons"
                >
                <Button
                render={this.renderOnOff} />              
        </Column>
        <Column caption="Actions"
                type="buttons">
                <Button render={this.renderPlayPause} />
                <Button
                text=""
                icon= "fa fa-edit"
                hint="Edit"
                />
        </Column>
        </DataGrid>
      </div>
    </div>   
    );
  }



}
export default RecurringInvoiceGrid;
