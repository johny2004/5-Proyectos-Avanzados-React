import { useEffect, useState } from "react"
import {useParams } from "react-router-dom";
import Loader from "../components/loader";
import useReducerApp from "../store/store";

export default function Redirect() {
    const params = useParams();
    const [item, setItem] = useState(null);
    const [, dispatch ]= useReducerApp();

    useEffect(()=>{
        // Aquí iría la lógica para redirigir a la URL original
        const data = localStorage.getItem("urls");
        if(data){
            const items = JSON.parse(data);
            const id = params.id;

            const itemUrl = items.find((i) => i.shortUrl === id);

            
            if(itemUrl){
                setItem(itemUrl);
                dispatch ({type:"ADD_VIEW", data:id});
                setTimeout(() => {
                window.location.href = itemUrl.url;
                }, 1000);
            }else{
                setItem(undefined);
            }

        }else{
            setItem(undefined);
        }

    },[]);
    return (
       <Loader item={item} url={params.id} />
    )
}