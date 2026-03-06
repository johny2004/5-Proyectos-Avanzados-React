import TextBlockView from "./blockComponents/textBlock/textBlockView";
import { useRef, useState } from "react";
import Button from "./button";
import TodoBlockView from "./blockComponents/todoBlock/todoBlockView";
import TableBlockView from "./blockComponents/tableBlock/tableBlockView";

import "./blockView.css";

export default function BlockView({}) {
  const ref = useRef(null);

  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("text"); // Por ahora solo texto, pero se puede expandir a otros tipos de bloques , table, todo
  const [properties, setProperties] = useState(["id", "text", "completed"]); // Aquí se pueden almacenar las propiedades específicas de cada bloque
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
      text: "Hola a todos",
      completed: false,
    },
  ]);

  function handleChange(item) {
    const { type, text, id, completed } = item;

    if (type === "text") {
      const tempo = [...data];
      const editItem = tempo.find((i) => i.id === id);
      if (editItem) {
        editItem.text = text;
        setData(tempo);
      }
    }


        if (type === "todo") {
      const tempo = [...data];
      const editItem = tempo.find((i) => i.id === id);
      if (editItem) {
        editItem.text = text ?? editItem.text;
        editItem.completed = item.completed ?? editItem.completed;
        setData(tempo);
      }
    }

            if (type === "table") {
      const tempo = [...data];
      let editItem = tempo.find((i) => i.id === id);
      if (editItem) {
        editItem = item.updatedItem;
        setData(tempo);
      }
    }


  }

  function handleOnCreate() {
    const newItem = {
      id: crypto.randomUUID(),
      text: "Hola",
      completed: false,
    };

    properties.forEach((prop) => {
      if (!newItem.hasOwnProperty(prop)) {
        newItem[prop] = "";
      }
    });

    const temp = [...data, newItem];
    setData(temp);
    setCurrentItem(newItem.id);
  }

    function handleNewColumn(name){
        updateProperties(name);
    }
        function updateProperties(name){    
          const newProperties = [...properties, name];
          const temp = [...data];
          for (let i = 0; i<temp.length; i++){
            const item = temp[i];
            for (let j = 0; j<newProperties.length; j++){
              const prop = newProperties[j];
              if(item.hasOwnProperty(prop)){
              console.log("tiene la propiedad");
              }else{
                item[prop] = "";
              }
          }
    }
  
          setProperties(newProperties);
          setData(temp);
        }
   

  function TypesSelector(){
    return <div style={{position:"relative", marginTop:"20px"}}>
        <Button onClick={()=>setVisible(true)}>...</Button>
        <div className="typesSelectorButtons" style ={{display: visible ? "flex" : "none"}}>
            <button onClick={()=>setType("text")}>Text</button>
            <button onClick={()=>setType("table")}>Table</button>
            <button onClick={()=>setType("todo")}>Todo</button>
        </div>
    </div>
  }

  if(type === "todo"){
    return <div>
        <TypesSelector />
        <TodoBlockView 
          ref={ref}
          focusId={currentItem}
          data={data}
          onChange={handleChange}
          onCreate={handleOnCreate}
        />
    </div>

  }

    if(type === "table"){
    return <div>
        <TypesSelector />
        <TableBlockView 
          ref={ref}
          focusId={currentItem}
          data={data}
          columns={properties}
          onChange={handleChange}
          onCreate={handleOnCreate}
          onCreateNewColumn={handleNewColumn}
        />
    </div>

  }

  return (
    <div>
        <TypesSelector />
      <TextBlockView
        ref={ref}
        focusId={currentItem?.id}
        data={data}
        onChange={handleChange}
        onCreate={handleOnCreate}
      />
    </div>
  );
}
