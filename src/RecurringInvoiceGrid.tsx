import React from 'react';
import 'devextreme/dist/css/dx.light.css';
// import { customers } from './data.js';
import DataGrid, {
  Selection,
  Column,
  SearchPanel,
  Button,
} from 'devextreme-react/data-grid';

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
  ]
};

  myCommand (e: any) {
    // this.setState({ icon: 'fa fa-pause' });
    console.log(this);
    console.log(e);
  };  

  render() {
  return (
    <div>
      <DataGrid
        dataSource={this.state.customers}
        keyExpr="ID"
        showColumnLines={false}
        columnAutoWidth={true}
        rowAlternationEnabled={true} 
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
      />
      <Column caption="On or Off" 
              type="buttons"
              >
              <Button
                name="btnOff"
                cssClass="btnOff"
                text="OFF"
              />
      </Column>
      <Column caption="Actions"
              type="buttons">
              <Button
                text=""
                icon= "fa fa-play"
                hint=""
                onClick = {this.myCommand}
              />
              <Button
                text=""
                icon= "fa fa-edit"
                hint="Edit"
              />
      </Column>
      <SearchPanel visible={this.state.customers} />
      </DataGrid>
    </div>   
    );
  }
}
export default RecurringInvoiceGrid;
