import { useEffect, useState } from "react";
import { YoutubeVideosApi } from "../utils/Config";
import CardTemplate from "./CardTemplate";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
        <div className="flex flex-wrap pt-8 items-center">
            {video.map((video,index)=>
            <Link to={"/watch?v="+video.id} key={video.id}>
                <CardTemplate info={video}/>
            </Link>
            )}
        </div>
    );
}
export default VideoCard;