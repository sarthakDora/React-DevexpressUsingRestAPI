import React from 'react'
import './Table.css'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, {
    Column,
    FilterRow,
    HeaderFilter,
    FilterPanel,
    FilterBuilderPopup,
    Scrolling
  } from 'devextreme-react/data-grid';
// import { SpeedDialAction } from 'devextreme-react/speed-dial-action';

const columns = ['itemName', 'itemPriceFull'];
function Table({items}) {
    return (
        <div className="table">
            {/* {items.map(({itemName, itemPriceFull}) => (
                <tr>
                 
                    <td><strong>{itemName}</strong></td>
                    <td>{itemPriceFull}</td>
                </tr>
            ))} */}
             <DataGrid className="table__dataGrid"
                dataSource={items}
                defaultColumns={items.columns}
                showBorders={true}
                columnsAutoWidth="true"

            >
             <FilterRow visible={true} />
             <FilterPanel visible={true} />
             <HeaderFilter visible={true} />
             <Scrolling mode="infinite" />

             </DataGrid>
        </div>
    )
}

export default Table
