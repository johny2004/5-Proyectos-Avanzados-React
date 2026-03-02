import {add, load, addView} from "./actions";
import {useReducer} from "react";
export function reducer(state, action){
    switch(action.type){
        case "ADD":
            return add(state,action);
        case "LOAD":
            return load(state,action);
        case "ADD_VIEW":
            return addView(state,action);
        default:
            return state;

    }   
     }

export default function useReducerApp(){
    return useReducer (reducer,{items:[]});
    //el primer elemento seria el estado y el segundo elemento seria la funcion dispatch para ejecutar las acciones
}