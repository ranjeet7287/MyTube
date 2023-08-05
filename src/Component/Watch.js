import { useSearchParams } from "react-router-dom";

const Watch=()=>{
    const [searchParams]=useSearchParams();
    return(
        <div className="pt-24 ml-4">
        <iframe 
        width="900"
        height="450" 
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        ></iframe>
    </div>
    );
}
export default Watch;
