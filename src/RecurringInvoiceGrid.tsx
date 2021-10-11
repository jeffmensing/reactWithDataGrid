import React from 'react';
import { customers } from './data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import DataGrid, {
  Selection,
  Column,
  SearchPanel,
  Button,
} from 'devextreme-react/data-grid';
import DropDownBox from 'devextreme-react/drop-down-box';
import { Row } from 'devextreme-react/responsive-box';

function SelectedCustomer(props: any) {
  if(props.customer) {
      return (
        <>
          {props.customer.id}
        </>
      );
  }
  return null;
}


class RecurringInvoiceGrid extends React.Component {
  
  myCommand (SelectedCustomer: any) {
    alert(SelectedCustomer);   
  } 

  render() {

  return (
    <div>
      <DataGrid
        dataSource={customers}
        keyExpr="ID"
        showColumnLines={false}
        columnAutoWidth={true}
        rowAlternationEnabled={true}
      >
      <Selection mode="single" /> 
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
      <Column type="buttons">
          <Button
            name="btnOff"
            cssClass="btnOff"
            text="OFF"
          />
      </Column>
      <Column type="buttons">
                    <Button
                      text="Play"
                      icon= ""
                      hint="Play"
                      onClick={this.myCommand(SelectedCustomer)}
                    />
                    <Button
                        text="Edit"
                        icon= "edit"
                        hint="Edit"
                        //onClick={this.myCommand}
                    />
      </Column>
      <DropDownBox visible={true}
        displayExpr="Customer"/>
      <SearchPanel visible={customers} />
      </DataGrid>
    </div>   
    );
  }
}

export default RecurringInvoiceGrid;
