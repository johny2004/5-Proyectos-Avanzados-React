import TextBlock from "./textBlock";
import { forwardRef } from "react";
import { useEffect } from "react";
function TextBlockView({ data, onChange, onCreate, focusId }, ref) {
  useEffect(() => {
        if(focusId){
            ref.current.focus();
        }
    
  }, [focusId]);

  function handleOnChange(item, e) {
    onChange({
      type: "text",
      id: item.id,
      text: e.target.value,
      completed: item.completed,
    });
  }

  function handleOnKeyDown(item, e) {
    if (e.key === "Enter") {
      onCreate();
    }
  }

  return data.map((item) => (
    <TextBlock
    ref={ref}
      key={item.id}
      item={item}
      focus = {focusId}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
    />
  ));
}

export default forwardRef(TextBlockView);
