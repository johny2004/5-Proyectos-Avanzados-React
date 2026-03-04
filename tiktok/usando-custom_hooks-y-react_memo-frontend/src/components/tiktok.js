import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import useItems from "./useItems";
import TiktokVideo from "./tiktokVideo";
import "./tiktok.css";
export default function Tiktok() {
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);
  const [response, data, isLoading] = useFetch(url, "json");
  const [items] = useItems(data);

  useEffect(() => {
    setUrl("http://localhost:4000/page/" + page);
  }, [page]);

  function nextVideo() {
    if (index + 2 === items.length){
       // cargar mas videos
       setPage(page + 1);

    }else {
         setIndex(index + 1);
    }
   
  }
  function previousVideo() {
    if (index > 0){
    setIndex(index - 1);
    }
  }

  return (
    <div className="tiktokApp">
      <div className="tiktokHeader">
        <h1 className="tiktokTitle">🎵 TikTok Clone</h1>
        {isLoading && <div className="loadingIndicator">Cargando...</div>}
      </div>

      <div className="tiktokMainContent">
        <div className="videoCounter">
          {items.length > 0 && `${index + 1} / ${items.length}`}
        </div>

        <div className="navigationButtons">
          <button 
            className="navButton prevButton" 
            disabled={isLoading || index === 0} 
            onClick={() => previousVideo()}
          >
            <span className="buttonIcon">⬆</span>
            <span className="buttonText">Anterior</span>
          </button>
          <button 
            className="navButton nextButton" 
            disabled={isLoading} 
            onClick={() => nextVideo()}
          >
            <span className="buttonIcon">⬇</span>
            <span className="buttonText">Siguiente</span>
          </button>
        </div>

        <div className="tiktoksContainerView">
          <div className="tiktoksContainer" style={{transform: `translateY(${-1 * index * 720 + "px"})`}}>
            {items?.map((item,i) => (
                 <TiktokVideo key={item.id} item={item} current={index === i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
