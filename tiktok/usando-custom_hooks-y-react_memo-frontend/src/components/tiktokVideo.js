import { useEffect,useRef } from "react"
export default function TiktokVideo({ item, current }) {

    const ref = useRef(null);

    useEffect(() => {
        // Solo controlar play/pause para videos MP4, no para YouTube
        if (item.type === "mp4" && ref.current) {
            if (current) {
                ref.current.play().catch(error => {
                    console.log("Error al reproducir:", error);
                });
            } else {
                ref.current.pause();
                ref.current.currentTime = 0;
            }
        }
    }, [current, item.type]);
    
    return (
        <div className="tiktokVideo">
            {item.type === "youtube" ? (
                <iframe 
                    ref={ref}
                    width="500" 
                    height="960"
                    src={`${item.url}&autoplay=${current ? 1 : 0}&mute=1`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            ) : item.type === "tiktok" ? (
                <iframe 
                    ref={ref}
                    width="500" 
                    height="960"
                    src={item.url}
                    title={item.title}
                    frameBorder="0"
                    allow="encrypted-media;"
                    allowFullScreen
                />
            ) : (
                <video ref={ref} width="500px" height="960" muted loop playsInline>
                    <source src={item.url} type="video/mp4" />
                </video>
            )}
        </div>
    )
}