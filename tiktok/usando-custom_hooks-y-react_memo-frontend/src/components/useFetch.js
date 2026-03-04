import { useState, useEffect } from "react"
export default function useFetch(url, type) {
    const [data, setData] = useState(null);
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
       async function fetchData() {
          setIsLoading(true);
          try {
            const response = await fetch(url);
            setResponse(response);
            console.log("Response: " + response);
          switch (type) {
            case "json":
                const json = await response.json();
                setData(json);
                setIsLoading(false);
                console.log(json);
                break
            case "text":                
                const text = await response.text();
               setData(text);
               setIsLoading(false);
                break
            default:
          }
          } catch (error) {
           
            console.log("Error: " + error);
            setIsLoading(false);
          }
       }
       
       if(!!url){
           setData(null); // Resetear data antes de fetch
           fetchData();
       }

  }, [url]);


    return [response, data, isLoading];
    
}