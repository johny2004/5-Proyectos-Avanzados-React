import CreateForm from "../components/createForm";
import ItemsContainer from "../components/itemsContainer";
import MainContainer from "../components/mainContainer";
import useReducerApp from "../store/store";
import Item from "../components/item";
import { useEffect } from "react";

export default function Create() {
  const [state, dispatch] = useReducerApp();

  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  return (
    <MainContainer>
      <CreateForm dispatch={dispatch} />

      <ItemsContainer>
        {state.items.map((item) => (
        <Item item={item} key={crypto.randomUUID()} />
        ))}
      </ItemsContainer>
    </MainContainer>
  );
}
