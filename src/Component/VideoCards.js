import { useEffect, useState } from "react";
import { YoutubeVideosApi } from "../utils/Config";
import CardTemplate from "./CardTemplate";
import Shimmer from "./Shimmer";

const VideoCard=()=>{

    const [video,setVideo]=useState([]);

    useEffect(()=>{
        getVideo();
    },[]);

    const getVideo=async()=>{
        const data=await fetch(YoutubeVideosApi);
        const json=await data.json();
        setVideo(json.items)
    }

    return (video.length===0) ? <Shimmer/> : (
        <div className="flex flex-wrap pt-8">
            {video.map((video)=><CardTemplate key={video.id} info={video}/>)}
        </div>
    );
}
export default VideoCard;