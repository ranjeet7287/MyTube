import { useEffect, useState } from "react";
import { YoutubeVideosApi } from "../utils/Config";
import { Link } from "react-router-dom";
import RecoCardTemp from "./RecoCardTemp";

const RecoCard=()=>{

    const [video,setVideo]=useState([]);

    useEffect(()=>{
        getVideo();
    },[]);

    const getVideo=async()=>{
        const data=await fetch(YoutubeVideosApi);
        const json=await data.json();
        setVideo(json.items)
    }

    return(
        <div className="pt-8 items-center">
            <p className="ml-8 mb-4 text-2xl">Recommended</p>
            {video.map((video,index)=>
            <Link to={"/watch?v="+video.id} key={video.id}>
                <RecoCardTemp info={video}/>
            </Link>
            )}
        </div>
    );
}
export default RecoCard;