import { forwardRef, useState, useEffect } from "react";
import Button from "../../button";
import Headers from "./headers";
import Cell from "./cell";
import TableBlock from "./tableBlock";
function TableBlockView({data, onChange,columns, onCreate, focusId,onCreateNewColumn}, ref) {

    function handleNewColumn(){
        const name = prompt("Column Name");
        if(!!name){
            onCreateNewColumn(name);
        }
    }
    function handleNewRow(name){
        onCreate();


    }


    function handleOnChange(rowIndex, property, value){
        const item = (data[rowIndex][property] = value);

        onChange({
            type: "table",
            id: item.id,
            text: item.text,
            completed: item.completed,
            updatedItem: item,
        })
    }

    return <div> 
        <Button onClick={handleNewColumn}>    
            add new Column
        </Button>
        <Button onClick={handleNewRow}>
            add new Row
        </Button>

        <TableBlock columns={columns} data={data} onChange={handleOnChange}/>
    </div>
}
export default forwardRef(TableBlockView);