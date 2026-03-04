import { useEffect, useState, useRef } from "react";
export default function useItems(data) {
const [items, setItems] = useState([]);
const processedData = useRef(new Set());

useEffect(() => {
    if(Array.isArray(data) && data.length > 0){
        const dataKey = JSON.stringify(data);
        if(!processedData.current.has(dataKey)){
            processedData.current.add(dataKey);
            setItems(prevItems => [...prevItems, ...data]);
        }
    }
    }, [data]);

    return [items]
}